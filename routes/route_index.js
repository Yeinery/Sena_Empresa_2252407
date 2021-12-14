const express = require('express');
const { renderizar_index } = require('../controllers/controller_index');
const ruta_index = express.Router();
const cont_index = require("../controllers/controller_index");


ruta_index.get("/",cont_index.renderizar_index);


module.exports = ruta_index;