
/*
================================
    DECLARACION DE VARIABLES
================================
*/
let modificarInputs = document.querySelectorAll(".modificar-container form input");

let dataElements = document.querySelectorAll(".detalle-body h2:first-child, .detalle-content ul li:nth-child(2n)");

let elemValues = {};

/*
======================================
    Poblado de datos de los inputs
======================================
*/

for(let i = 0; i < modificarInputs.length; i++) {
    let nombreInput = modificarInputs[i].name,
        valorInput = dataElements[i].textContent
        maxLength = modificarInputs[i].maxLength;

    // Se acorta la cadena de texto de los inputs 'titulo' o 'descripcion'
    // si su largo es mayor al maximo permitido en ambos
    if((nombreInput === "titulo" || nombreInput === "descripcion") && valorInput.length > maxLength) {
        valorInput = valorInput.substr(0, maxLength);
    }

    // Se convierte la cadena de la fecha al formato permitido 'YYY-MM-dd'.
    else if(nombreInput === "fecha") {
        valorInput = valorInput.split("-").reverse();
        valorInput = `${valorInput[0]}-${valorInput[1]}-${valorInput[2]}`;
    }

    else if(nombreInput === "costo" || nombreInput === "nro-boleta") {

        // Se quitan todos los espacios en blanco
        valorInput = valorInput.trim();

        // Quita todos los caracteres no numericos de la cadena.
        valorInput = valorInput.replace(/[^0-9]/g, "");

        // Se quita todo el texto si la cadena resulta en valores tipo '000', 
        // '024', etc. Si incluye el cero, solo se permite la cadena '0'.
        if(valorInput.length > 1 && valorInput.startsWith("0")) {
            valorInput = null;
        }
    }

    elemValues[nombreInput] = valorInput;
}

const poblarInputs = () => {
    for(input of modificarInputs) {
        let nombre = input.name;
    
        input.value = elemValues[nombre];
    }
}

poblarInputs(); // poblado inicial

// Abrir-cerrar vista para modificar boleta
const detalleElements = Array.from(document.querySelector(".detalle-body").children).slice(2, 5);

const closeModificar = document.querySelector(".close-modificar svg");

let eventElements = detalleElements.slice(0, 2);

eventElements.push(closeModificar);

let [opacityContainer, modificarContainer] = detalleElements.slice(1);

const toggleModificar = (elem) => {
    elem.addEventListener(
        "click",
        () => {
            if(elem.className === "modificar-btn") {
                modificarContainer.classList.add("modificar-open");
                opacityContainer.classList.add("opacity-on");

                poblarInputs(); // Las entradas se poblaran cada vez que se abra la vista para modificar datos
            } else {
                modificarContainer.classList.remove("modificar-open");
                opacityContainer.classList.remove("opacity-on");
            }
        }
    );
}

eventElements.forEach((elem) => toggleModificar(elem));

