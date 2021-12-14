const controlador ={};

controlador.renderizar_quienes_somos=(req,res)=>{
    res.render("quienes_somos.ejs");
}

module.exports=controlador;