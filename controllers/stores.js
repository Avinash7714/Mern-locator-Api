const Store = require('../models/Store');
const geocoder = require('../utils/geocoder')

// @desc  Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
  try {
    const { address } = req.query;

    if (!address) return res.status(400).send({ error: 'Please provide address' });

    const loc = await geocoder.geocode(address);
    const place = loc[loc.length - 1];
    const query = {
      geometry:
      {
        $geoIntersects:
        {
          $geometry: {
            "type": "Point",
            "coordinates": [place.longitude, place.latitude]
          }
        }
      }

    }

    const stores = await Store.find(query);
    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};