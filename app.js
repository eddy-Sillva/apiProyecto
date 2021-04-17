const express=require("express");
const app=express();
app.listen(8080,()=>{
    console.log("Corriendo en el puerto 8080");
});
app.use(express.json());

app.use("/api",require("./rutas/rutas"))