//LAS RUTAS DE LA PAGINA WEB 

// Importar librerias necesarias
const {Router}=require("express");
const express=require("express");

// Iniciaizar
const router=express.Router()

//Importar el modelo
const Routine=require("../models/routines")


// Aqui es donde van a ir las rutas y las peticiones 
router.get("/", async(req,res)=>
{
    console.log (`Ingresando a la ruta raiz con el metodo ${req.method}`)
    const routines=await Routine.find();
    res.render("index",{rutinas:routines}) 
})

//Agregar una rutina a la tarjeta desde el formulario
router.post("/add", async (req,res)=>
{
    const rutin=new Routine(req.body)
    await rutin.save()
    res.redirect("/")
})

//Delete por Parametro
router.get("/delete/:id",async (req,res)=>{

    //Se toma el id de la base de datos
    const {id}= req.params

    await Routine.remove({_id:id}) //Eliminar el id de la base de datos

    res.redirect("/")

})
router.get("/cambiarEstado/:id",async(req,res)=>{
    const {id}=req.params
    const  tare= await Routine.findById(id)
    tare.status=!tare.status
    await  tare.save()
    res.redirect("/") 

})


module.exports=router; //Exportar las rutas al servidor (app.js)
