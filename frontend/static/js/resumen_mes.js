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

// Funcion para eliminar boletas usando un modal.
const boletaContainers = document.querySelectorAll(".boleta"),
      dialogElement = document.querySelector("dialog"),
      dialogBtns = document.querySelectorAll("dialog button, .close-modal svg");

let boletaActual = null;

const abrirModalEliminar = (boleta) => {
    boletaActual = boleta;
    dialogElement.showModal();
}

const confirmarEliminar = (event) => {
    if(event.target.value === "confirmar" && boletaActual) {
        boletaActual.remove();
        mostrarCostoTotal(); // Se actualiza el costo total cada vez que se elimine una boleta
        boletaActual = null;
    } else {
        boletaActual = null;
    }

    dialogElement.close();
}

boletaContainers.forEach(
    (boleta) => {
        const abrirModalBtn = boleta.querySelector(".bx-trash");
        abrirModalBtn.addEventListener("click", () => abrirModalEliminar(boleta));
    }
);

dialogBtns.forEach((btn) => btn.addEventListener("click", confirmarEliminar));

