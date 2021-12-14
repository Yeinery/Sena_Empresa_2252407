const express = require('express');
const { renderizar_unidades_productivas} = require('../controllers/controller_unidades_productivas');
const ruta_index = express.Router();
const cont_index = require("../controllers/controller_unidades_productivas");


ruta_index.get("/",cont_index.renderizar_unidades_productivas);


module.exports = ruta_index;