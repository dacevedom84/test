//console.log("Hola mundo desde NodeJS")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/tarea.js");

const app = express ();
const router =express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a base de datos 
mongoose.connect("mongodb+srv://prog_web:84Da06mon2011@clusterprogweb.ssrjg.mongodb.net/ActividadesDB?retryWrites=true&w=majority");

// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema()
        // Tus propiedades van aquí 
        idTarea: req.body.id,
        nombreTarea; req.body.nombre,
        detalleTarea; req.body.detalle
    });
    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea almacenada correctamente")
    })
app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});