// Funcion para calcular y mostrar el costo total del mes.
const mostrarCostoTotal = () => {
    const costoElements = document.querySelectorAll(".boleta .costo");
    const costoTotal = document.querySelector(".resumen-content p:nth-child(3)");
    let costoValues = [];

    costoElements.forEach(
        (costo) => {
            let costoValue = parseInt(costo.textContent.replace(/(\$|\.)/g, ""));
    
            costoValues.push(costoValue);
        } 
    );
    
    // Suma de los elementos del array costoValues (con valor inicial igual a 0)
    const costoTotalValue = costoValues.reduce((sumAcum, costo) => sumAcum + costo, 0);
    
    // El metodo toLocaleString permite poner los puntos separadores de miles a la cadena numerica
    const costoFinalText = `\$${costoTotalValue.toLocaleString("es-CL")}`;
    
    costoTotal.textContent = costoFinalText;
}

mostrarCostoTotal(); // Se muestra el costo total al iniciar/refrescar la pagina


// Eventos para mostrar detalle de boleta y formulario para editar boletas
const switchContainer = document.querySelector(".switch-btn-container"),
      switchBtn = document.querySelector(".switch-btn"),
      infoBoleta = document.querySelector(".info-boleta"),
      formEditar = document.querySelector(".form-container"),
      openDetalleBtn = document.querySelector(".icono-abrir"),
      opacityContainer = document.querySelector(".opacity-detalle"),
      detalleContainer = document.querySelector(".detalle-boleta-container");

const closeDetalleElems = [opacityContainer, document.querySelector(".cerrar-detalle-container")];

let switchStatus = false;

openDetalleBtn.addEventListener("click", () => {
    detalleContainer.classList.add("detalle-on");
    opacityContainer.classList.add("opacity-on");
});

closeDetalleElems.forEach((closeElem) => {
    closeElem.addEventListener("click", () => {
        detalleContainer.classList.remove("detalle-on");
        opacityContainer.classList.remove("opacity-on");

        // Si esta abierta la ventana del formulario para editar una boleta,
        // al clickear la "x" o la pantalla "opacity", tambien se
        // cierra esta ventana para que vuelva a su estado original.
        if(switchStatus) {
            switchBtn.classList.remove("switch-on");
            infoBoleta.classList.remove("boleta-hidden");
            formEditar.classList.remove("form-open");
            switchStatus = false;
        }
    });
});

switchContainer.addEventListener("click", () => {
    if(!switchStatus) {
        switchBtn.classList.add("switch-on");
        infoBoleta.classList.add("boleta-hidden");
        formEditar.classList.add("form-open");
        switchStatus = true;
    } else {
        switchBtn.classList.remove("switch-on");
        infoBoleta.classList.remove("boleta-hidden");
        formEditar.classList.remove("form-open");
        switchStatus = false;
    }
});




// Funcion para eliminar boletas usando un modal.
const boletaContainers = document.querySelectorAll(".boleta"),
      dialogElement = document.querySelector("dialog"),
      dialogBtns = document.querySelectorAll("dialog button, .close-modal .fa-xmark");

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
        const abrirModalBtn = boleta.querySelector(".icono-eliminar");
        abrirModalBtn.addEventListener("click", () => abrirModalEliminar(boleta));
    }
);

dialogBtns.forEach((btn) => btn.addEventListener("click", confirmarEliminar));

