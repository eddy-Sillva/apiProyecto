Api rest de calculadora programa creado por:
Luis Alberto Colin Zuñiga
Gina Jazmin Acosta Duran
Edwin Jesus Silva Escutia
Nota: todas las peticiones post se ejecutan desde postman en el apartado boy-raw-json
--Rutas--
Suma, Resta, Multiplicacion, Division peticion get por medio de query: Nombre de las variables del query obligatorias (num1,num2)
http://localhost:8080/api/calculadora
ejemplo
http://localhost:8080/api/calculadora?num1=10&num2=10

de decima a binario perticion post por medio del body: nombre de la variable obligatoria (numero)
http://localhost:8080/api/decimal
ejemplo
{
    "numero":1
}

binario a decima peticion tipo post por medio del body: nombre de la variable obligatoria (numero)
http://localhost:8080/api/binario
{
    "numero":"101"
}

obtener porcentaje de un valor peticin tipo get por medio de un query: nombre de las variables obligatorias (num,porcent)
http://localhost:8080/api/getPorcentaje
ejemplo
http://localhost:8080/api/getPorcentaje?num=100&porcent=50

convertir de binario a hexadecima peticion tipo post por medio del body:nombre de la variable obligatoria (binario)
http://localhost:8080/api/binToHex
ejemplo
{
    "binario":"101"
}

convertir de hexadecima a binario peticion tipo post por medio del body: nombre de la variable obligatoria (hexadecimal)
http://localhost:8080/api/hexToBin
ejemplo
{
    "hexadecimal":"5"
}
