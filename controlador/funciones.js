const {response}=require("express");
const calculadora=(req,res=response)=>{
    let {num1,num2}=req.query;
    num1=parseInt(num1);
    num2=parseInt(num2);
    const suma=num1+num2;
    const resta=num1-num2;
    const multiplicacion=num1*num2;
    const division=num1/num2;
    if(isNaN(suma) || isNaN(resta) || isNaN(multiplicacion) || isNaN(division)){
        res.json({error:"Alguno de los datos ingresados no es un numero o el query esta mal diseñado recuerde que el nombre de las variables es num1 y num2"})
    }else{
        res.json({suma,resta,multiplicacion,division})
    }
}

const decimalBinario=(req,res=response) =>{
    let {numero}=req.body;
    numero=parseInt(numero)
    if(isNaN(numero)){
        res.json({error:"Ingrese un dato valido, recuerde que el atributo del objeto debe ser llamado numero y el valor un numero entero"})
    }else{
        numero=numero.toString(2)
        res.json({numero})
    }
}

const binarioDecimal=(req,res=response) =>{
    let {numero}=req.body;
    var patron = new RegExp('\\b^[0-1]+$\\b','g');
    var resultado = patron.exec(numero);
    numero=parseInt(numero,2)
    if(resultado===null){
        res.json({error:"Ingrese un dato valido, recuerde que el atributo del objeto debe ser llamado numero y el valor un numero binario"})
    }else{
        res.json({numero})
    }
}

const porsentaje=(req,res=response) =>{
    var numero = parseInt(req.query.num);
        var porcentaje = parseInt(req.query.porcent);
        if(!isNaN(numero) && !isNaN(porcentaje)){
            porcentaje = porcentaje/100;
            json = {"Resultado":{
                "Numero":numero,
                "Porcentaje":porcentaje*100+"%",
                "Porcentaje obtenido":numero*porcentaje
            }}
            res.json(json);
        }else{
            res.json({"Error": "Uno de los datos ingresados no es un numero"});
        }
}

const binarioHexadecimal=(req,res=response) => {
    let json;
        let numeroBinario = req.body.binario;
        let patron = new RegExp('\\b^[0-1]+$\\b','g');
        let resultado = patron.exec(numeroBinario);
        let numero = parseInt(numeroBinario, 2);
    if(resultado != null){
        let hexa = numero.toString(16);
        hexa = hexa.toUpperCase();
        json = {"Resultado":{
            "Binario": numeroBinario,
            "Hexadecimal":hexa
        }};
        res.json(json);
    } else{
        let json = {"error":"El dato ingresado no es un numero binario"};
        res.json(json);
    }
}

const hexadecimalBinario=(req,res=Response)=>{
    let json;
        let numeroHexadecimal = req.body.hexadecimal;
        let patron = new RegExp("\\b^[0-9a-f]+$\\b",'ig');
        let resultado = patron.exec(numeroHexadecimal);
        if(resultado != null){
            let numero = parseInt(numeroHexadecimal, 16);
            json = {"Resultado": {
                "Hexadecimal": req.body.hexadecimal,
                "Binario": numero.toString(2)
            }};
        }else{
            json = {"Error":"El dato ingresado no es hexadecimal"};
        }
    res.json(json);
}

const getRaiz = (req, res=response)=>{
    let {num} = req.query;
    num = Math.sqrt(num, 2);
    if (!isNaN(num)) {
        res.json({num});
    }else{
        res.json({"Error" : "Error, ingresa un valor numerico para sacar raiz cuadrada"});
    }
}
const getPotencia = (req, res=response)=>{
    let {num, exponente} = req.query;
    let base = Math.pow(num, exponente);
    if (!isNaN(base)) {
        res.json({base});
    }else{
        res.json({"Error" : "Error, ingresa un valor numerico para sacar la potencia"});
    }
}

const getDecimalToHexadecimal = (req, res=response)=>{
    let {num} = req.body;
    if (!isNaN(num)) {
        num = num.toString(16);
        res.json({num});
    }else{
        res.json({"Error" : "Error, ingresa un numero Decimal para sacar el Hexadecimal"});
    }
}

const getHexadecimalToDecimal = (req, res=response)=>{
    let {num} = req.body;
    num = parseInt(num, 16);
    if (!isNaN(num)) {
        res.json({num});
    }else{
        res.json({"Error" : "Error, ingresa un numero Hexadecimal para sacar Decimal"});
    }
}

module.exports ={
    calculadora,
    decimalBinario,
    binarioDecimal,
    porsentaje,
    binarioHexadecimal,
    hexadecimalBinario,
    getRaiz,
    getPotencia,
    getDecimalToHexadecimal,
    getHexadecimalToDecimal
}