const {Router} =require('express');
const{calculadora,decimalBinario,binarioDecimal,getPorcentaje,binarioToHexadecimal,hexadecimalToBinario,
getRaiz,getPotencia,getDecimalToHexadecimal,getHexadecimalToDecimal}=require('../controlador/funciones')
const rutas=Router();
//suma resta multiplicacio y division
rutas.get("/calculadora",calculadora);
//convertir de decimal a binario
rutas.post("/decimal",decimalBinario)
//convertir de binario a decimal
rutas.post("/binario",binarioDecimal)
// obtener porcentaje
rutas.get("/getPorcentaje",getPorcentaje)
// binari a hexadecimal
rutas.post("/binToHex",binarioToHexadecimal)
//Hexadecimal a binario
rutas.post("/hexToBin",hexadecimalToBinario)
rutas.get("/raiz", getRaiz);
rutas.get("/potencia", getPotencia);
rutas.post("/decimal-hexadecimal", getDecimalToHexadecimal);
rutas.post("/hexadecimal-decimal", getHexadecimalToDecimal);
module.exports =rutas;
