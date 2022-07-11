// Modelo para las rutinas 

const mongoose=require("mongoose");

const Schema=mongoose.Schema;


const RoutineSchema=new Schema ({
    title:String, 
    day:String,
    hourinit:String,
    hourfinish:String,
    eat:String,
    //Estado de la tarea, si esta hecha o no
    status:{type:Boolean,
    default:false    
    }
})

//Exportar el modelo ("Nombre del modelo", Esquema a utilizar)
module.exports=mongoose.model("routine", RoutineSchema)

