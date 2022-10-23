const arreglo1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(arreglo1);

function promedio(){
    let suma = arreglo1.reduce((previous, current) => current += previous);
    let promedio = suma/arreglo1.length;
    return promedio;
}
promedio(arreglo1);