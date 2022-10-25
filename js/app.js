// Función de generar el arreglo
function calcular(){
    // Generación de un arreglo aleatorio
    const arregloAleatorio = [];
    for (let i = 0; i<20; i++){
        arregloAleatorio.push(Math.floor(Math.random() * (100 -1)+1));
    }

    // 1. Diseña una función que reciba como argumento un arreglo de valores
    // enteros de 20 posiciones , regrese el valor promedio de los elementos del arreglo.
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

    // 2. Diseñe una función que reciba como argumento un arreglo de 20 valores
    //numéricos enteros, y me regrese la cantidad de valores pares que existe en el
    //arreglo
    function pares(arregloAleatorio){
        let pares = 0;
        // Recorrer los elementos del arreglo
        for(let i=0; i<arregloAleatorio.length; i++){
            // comprobar si el número es par
            if(arregloAleatorio[i]%2 == 0){
                pares++;
            }
            
        }
        // regresar el valor
        return pares;
    }

    // Imprimir el resultado
    document.getElementById('par').value = pares(arregloAleatorio);

    // 3. Diseñe una función que reciba como argumento un arreglo de 20 valores
    // numéricos enteros, ordene los valores del arreglo de mayor a menor.
    function ordenar(arregloAleatorio){
        let arregloOrdenado = arregloAleatorio.slice();
			return arregloOrdenado.sort(function(a, b) {return b - a});

    }

    // imprimir los arreglos
    function imprimirArreglos(array, etiqueta){
        let contenido ="";

        for(let i=0; i< array.length; i++){
            contenido += "<p>"+ array[i] +"</p>"
        }
        etiqueta.innerHTML=contenido;
    }
    let arregloOrdenado = ordenar(arregloAleatorio);
    imprimirArreglos(arregloAleatorio, document.getElementById('Normal'));
    imprimirArreglos(arregloOrdenado, document.getElementById('Ordenado'));
}

// Generación de objetos
function generar(){
    let limite = document.getElementById('limite').value;
    let lstNumeros = document.getElementById('idNumeros');
    lstNumeros.innerHTML = "";
    let arreglo = [];
    let pares = 0;
    let impares = 0;

    // Generar arreglo aleatorio
    for (let i = 0; i<limite; i++){
        arreglo.push(Math.floor(Math.random() * (limite -1)+1));
        
    }
    // Ordenarlo
    arreglo.sort(function(a, b) {return b - a});

    // Imprimir el contenido
    for(let i=0; i<limite; ++i){
        lstNumeros.options[i] = new Option(arreglo[i],'texto',arreglo[i]);
    }

    // Conocer el porcentaje de pares e impares
    for (let i = 0; i<limite; i++){
        if(arreglo[i]%2 == 0){
            pares++;
        }else{
            impares++;
        }
        
    }
    // Imprimir el porcentaje de pares e impares
    pares = (pares * 100) / limite;
    let paresImprimir = document.getElementById('pares');
    paresImprimir.innerHTML = pares + "%";

    impares = (impares * 100) / limite;
    let imparesImprimir = document.getElementById('impares');
    imparesImprimir.innerHTML = impares + "%";
    
    // Conocer si es simétrico
    let simetrico = document.getElementById('simetrico')
    if(pares>impares){
        if(pares - impares > 25){
            simetrico.innerHTML = "No es simetrico";
        }else{
            simetrico.innerHTML = "Es simetrico";
        }
    }else{
        if(impares - pares > 25){
            simetrico.innerHTML = "No es simetrico";
        }else{
            simetrico.innerHTML = "Es simetrico";
        }
    }

}
