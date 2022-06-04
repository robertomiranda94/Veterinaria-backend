import express  from "express";
import dotenv from 'dotenv'
import conectarDB from "./config/db.js";
import VeterinarioRoutes from "./routes/veterinarioRoutes.js"
import pacienteRoutes from "./routes/pacienteRoutes.js"
import cors from "cors"

const app= express();

app.use(express.json())

dotenv.config()

conectarDB()

const dominiosPermitidos = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin,callback){
        if(dominiosPermitidos.indexOf(origin)!== -1){
            //el origen del reques esta permitido
            callback(null,true)
        }else{
            callback(new Error('No permitido por cors'))
        }
    }
}

app.use(cors(corsOptions))

app.use('/api/veterinarios',VeterinarioRoutes)
app.use('/api/pacientes',pacienteRoutes)

const PORT = process.env.PORT||4000

app.listen(PORT,()=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});