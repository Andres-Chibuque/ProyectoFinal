// SEVIDOR DE LA APLICACION 

// Importar las librerias necesarias
const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const morgan=require("morgan");

//Inicializar el servidor 
const app=express();

//BASE DE DATOS
mongoose.connect('mongodb://127.0.0.1:27017/gym').then(db=>console.log("La base de datos ha sido conectada")).catch(err=>console.log(err));

//Importar las rutas (routes)
const indexRoutes=require("./routes/index")
const indexUsres=require("./routes/usuarios")

//Settings -> La configuracion que va a tener como tal mi servidor
app.set("port",3000); 
app.set("views",path.join(__dirname,"views")) //Es un meotodo para enlazar rutas, en este caso enlaza donde estoy parado (_dirname=app.js) con "views"
app.set("view engine","ejs")


//Midleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use("/", indexRoutes);


//Poner a escuchar el servidor 
app.listen(3000,()=>{
    console.log("Server on in port 3000");
})


