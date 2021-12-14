const express = require('express');
const { renderizar_quienes_somos } = require('../controllers/controller_quienes_somos');
const ruta_index = express.Router();
const cont_index = require("../controllers/controller_quienes_somos");

ruta_index.get("/",cont_index.renderizar_quienes_somos);




module.exports = ruta_index;