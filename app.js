const express= require('express');
const bodyparser= require("body-parser");

const Servidor = express();

Servidor.use(express.static(__dirname + '/public'));

Servidor.use(bodyparser.json());
Servidor.use(express.urlencoded({extended:false}));

Servidor.set('view engine','ejs'); 
Servidor.set('views',__dirname+ '/views');

Servidor.get("/",(req,resp)=>{
    var json=[
    ];
    resp.render("menu_principal.ejs"+ json);
});

Servidor.listen(3000,()=>{
    console.log("El servidor esta ejecutando en el puerto 3000");
});