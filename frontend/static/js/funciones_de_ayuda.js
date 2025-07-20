/*
    En este archivo hay funciones personalizadas
    que uso mientras desarrollo la version 
    estatica de esta aplicacion web.
*/

// Funcion para convertir valores de px a em y viceversa.
const convertRelative = (value, unitTo, setRootValue = false) => {
    let rootValue = 16, // root value inicial
        convertedValue;

    // Si, debido a que el valor de raiz cambia porque
    // el font-size del elemento mas cercano es distinto de 16px,
    // entonces establecer 'setRootValue = true' para ejecutar
    // este codigo.
    if(setRootValue && (unitTo === "em")) {
        let valorPx = prompt("Ingresa el valor en px: ");
        let valorEm = prompt("Ingresa el valor en em: ");

        valorPx = parseFloat(valorPx);
        valorEm = parseFloat(valorEm);
        
        rootValue = valorPx/valorEm;
    }

    if(unitTo === "em") {
        convertedValue = `${(value/rootValue)} em`;
    }

    else if(unitTo === "px") {
        convertedValue = `${value*rootValue} px`;
    }

    return convertedValue;
}
