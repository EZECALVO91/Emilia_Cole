// SETEOS BASICO PARA APP.JS
const express = require ("express");

const path = require ("path")

const app = express ();

app.use(express.static(path.join("public")));

app.listen (3030, () => {
    console.log("Servidor corriendo en el puerto 3030");
});

// DESPUES SE SIGUEN ARMANDO Y PEGANDO LOS OTROS ARCHIVOS HTML

app.get ("/", function(req,res){
    res.sendFile(path.join (__dirname, "/views/index.html"))
});

app.get ("/contact", function(req,res){
    res.sendFile(path.join (__dirname, "/views/contact.html"))
});

app.get ("/about", function(req,res){
    res.sendFile(path.join (__dirname, "/views/about.html"))
});

app.get ("/music", function(req,res){
    res.sendFile(path.join (__dirname, "/views/music.html"))
});