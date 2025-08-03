// Funcion para calcular y mostrar el costo total del mes.
const mostrarCostoTotal = () => {
    const costoElements = document.querySelectorAll(".boleta .costo");
    const costoTotal = document.querySelector(".resumen-content p:nth-child(3)");
    let costoValues = [];

    if(costoElements.length === 0) {
        costoTotal.textContent = "$0";
        return
    }
    
    costoElements.forEach(
        (costo) => {
            let costoValue = parseInt(costo.textContent.replace(/(\$|\.)/g, ""));
    
            costoValues.push(costoValue);
        } 
    );
    
    // Suma de los elementos del array costoValues
    const costoTotalValue = costoValues.reduce(
        (sumaAcumulada, elementoActual) => {
            return sumaAcumulada + elementoActual
        }
    );
    
    // El metodo toLocaleString permite poner los puntos separadores de miles a la cadena numerica
    const costoFinalText = `\$${costoTotalValue.toLocaleString("es-CL")}`;
    
    costoTotal.textContent = costoFinalText;
}

mostrarCostoTotal(); // Se muestra el costo total al iniciar/refrescar la pagina

// Funcion para eliminar boletas.
const boletaContainers = document.querySelectorAll(".boleta");

const eliminarBoleta = (boleta) => {
    const deleteBtn = boleta.children[1].children[1];

    deleteBtn.addEventListener(
        "click",
        () => {
            const confirmar = confirm("¿Desea remover la boleta? Su eliminación no se podrá revertir.");

            if(confirmar) {
                boleta.remove();
                mostrarCostoTotal(); // Se actualiza el costo total cada vez que se elimine una boleta
            } else {
                return
            }
        }
    );
}

boletaContainers.forEach((boleta) => eliminarBoleta(boleta));

