import React, { Component } from 'react';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import config from './config'
const Map = ReactMapboxGl({
  accessToken: config.token
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      address: 'Stumpergasse 51, 1060 Vienna',
    };
  }

  getStores = async () => {
    const res = await fetch(`${config.baseurl}/api/v1/stores?address=${this.state.address}`);
    const data = await res.json();
    const stores = data.data.map(store => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: store.geometry.coordinates
        },
        properties: {
          storeId: store.properties.name,
          details: store.properties,
          icon: 'shop'
        }
      };
    });

    this.setState({ stores })
  }

  render() {
    return (
      <div className="container my-3 " >
        <h1 className="h-20 text-center">
          <i className="fas fa-map-marked mr-4"></i>Locator
      </h1>
        <div className="row">

          <div className="col-8">
            <Map
              style={"mapbox://styles/mapbox/streets-v9"}
              containerStyle={{
                height: '80vh',
                width: '100%',
                zoom: 1
              }}
            >
              {this.state.stores.map(store => {
                return (
                  <Layer key={store.properties.storeId} type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={store.geometry.coordinates} />
                  </Layer>
                )
              })}

            </Map>
          </div>
          <div className="col-4" >

            <div>
              <input className="form-control" onChange={e => this.setState({ address: e.target.value })} value={this.state.address} placeholder="Address" />
              <button className="btn mt-3 btn-success mb-4" onClick={this.getStores} >Search </button>
            </div>

            <div className="block mt-2">
              Output :        {
                this.state.stores.map(store => <div className="text-bold">{store.properties.storeId}</div>)
              }
            </div>



          </div>

        </div>


      </div>
    )
  }
}

