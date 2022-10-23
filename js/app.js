// Función de generar el arreglo
function calcular(){
    // Generación de un arreglo aleatorio
    const arregloAleatorio = [];
    for (let i = 0; i<20; i++){
        arregloAleatorio.push(Math.floor(Math.random() * (100 -1)+1));
    }

    // Obtener el promedio del arreglo
    function promedio(arregloAleatorio){
        let promedio = 0;

        // Recorrer los elementos del arreglo
        for(let i=0; i<arregloAleatorio.length; i++){
            promedio = promedio + arregloAleatorio[i];
        }

        // regresar el valor
        return promedio/arregloAleatorio.length ;
    }
    // Imprimir el resultado
    document.getElementById('pr').value = promedio(arregloAleatorio);
}

