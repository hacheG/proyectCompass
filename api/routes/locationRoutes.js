const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        locations: [
            {
                name: 'Quebrada La Vieja',
                latitude: 4.650521,
                longitude: -74.049844
            },
            {
                name: 'Iglesia Lourdes',
                latitude: 4.650521,
                longitude: -74.061924
            },
            {
                name:'Parque Nacional',
                latitude: 4.623951,
                longitude: -74.065122
            },
            {
                name:'Universidad Distrital',
                latitude: 4.628800,
                longitude: -74.065485
            },
            {
                name:'Monumento a Los Heroes',
                latitude: 4.666483,
                longitude: -74.059658
            }
        ]
    });
});

module.exports = router;
