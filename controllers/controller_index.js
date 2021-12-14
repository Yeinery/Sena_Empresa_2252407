
const controlador ={};

controlador.renderizar_menu_principal=(req,res)=>{
    res.render("menu_principal.ejs");
}

module.exports=controlador;