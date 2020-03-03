const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        locations: {
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "PARK_ID": 960,
                    "NAME": "quebrada la vieja",
                    "DESCRIPTIO": "quebrada la vieja"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.049844, 4.650521]
                }
            },
            {
            "type": "Feature",
            "properties": {
                "PARK_ID": 1219,
                "NAME": "iglesia lourdes",
                "DESCRIPTIO": "iglesia lourdes"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-74.061924, 4.650521]
            }
        },
            {
                "type": "Feature",
                "properties": {
                    "PARK_ID": 1219,
                    "NAME": "parque nacional",
                    "DESCRIPTIO": "parque nacional"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.065122, 4.623951]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "PARK_ID": 1219,
                    "NAME": "UD",
                    "DESCRIPTIO": "UD"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.065485, 4.628800]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "PARK_ID": 1219,
                    "NAME": "monumento a los heroes",
                    "DESCRIPTIO": "monumento a los heroes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.059658, 4.666483]
                }
            }
        ]
        }
    });
});

module.exports = router;
