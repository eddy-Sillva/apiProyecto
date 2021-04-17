const {Router} =require('express');
const{calculadora,decimalBinario,binarioDecimal,porsentaje,binarioHexadecimal,hexadecimalBinario}=require('../controlador/funciones')
const rutas=Router();
//suma resta multiplicacio y division
rutas.get("/calculadora",calculadora);
//convertir de decimal a binario
rutas.post("/decimal",decimalBinario)
//convertir de binario a decimal
rutas.post("/binario",binarioDecimal)
// obtener porcentaje
rutas.get("/getPorcentaje",porsentaje)
// binari a hexadecimal
rutas.post("/binToHex",binarioHexadecimal)
//Hexadecimal a binario
rutas.post("/hexToBin",hexadecimalBinario)
module.exports =rutas;