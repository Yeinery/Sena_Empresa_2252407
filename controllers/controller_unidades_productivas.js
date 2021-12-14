const controlador ={};

controlador.renderizar_unidades_productivas=(req,res)=>{
    res.render("unidades_productivas.ejs");
}

module.exports=controlador;