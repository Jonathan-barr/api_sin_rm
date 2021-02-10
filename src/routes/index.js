const { Router } = require('express');
const router = Router();

const { getLocations, getTitles, getDirectors, getActors } = require('../controllers/index.controller');




// OBTENER LAS LOCACIONES 
router.get('/locations', getLocations);

// OBTENER LOS TÍTULOS
router.get('/titles', getTitles);

// OBTENER LOS DIRECTORES
router.get('/directors', getDirectors);

// OBTENER LOS ACTORES
router.get('/actors', getActors);

//////////////////////////////////////////////////////
//////////////// GUARDAR DATOS //////////////////////




module.exports = router;