const {Router} =require('express');
const{calculadora,decimalBinario,binarioDecimal,porsentaje,binarioHexadecimal,hexadecimalBinario,
getRaiz,getPotencia,getDecimalToHexadecimal,getHexadecimalToDecimal}=require('../controlador/funciones')
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
rutas.get("/raiz", getRaiz);
rutas.get("/potencia", getPotencia);
rutas.post("/decimal-hexadecimal", getDecimalToHexadecimal);
rutas.post("/hexadecimal-decimal", getHexadecimalToDecimal);
module.exports =rutas;