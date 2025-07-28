/*
=====================================
   Funciones para validar inputs
     desde el lado del cliente
=====================================
*/

// Conteo de caracteres
let inputNames = ["titulo", "descripcion"]

inputNames.forEach(
    (name) => {
        let elemInput = document.querySelector(`input[name='${name}']`);
        
        let elemLabel = document.querySelector(`label[for='${name}'] span`);
        
        const addCountChar = () => {
            let cantCaracteres = elemInput.value.length,
                maxCaracteres = elemInput.maxLength,
                conteo = (maxCaracteres - cantCaracteres);
        
            elemLabel.textContent = `(${conteo}/${maxCaracteres})`;
        
            if(cantCaracteres === 0) {
                elemLabel.textContent = '';
            }
        
        }
        
        elemInput.addEventListener("keyup", addCountChar);
    }
);


// Validacion de numeros
let numInputNames = ["nro-boleta", "costo"];

numInputNames.forEach(
    (inputName) => {
        let numInput = document.querySelector(`input[name=${inputName}]`);

        const validarNumero = () => {
            /*
            ----------------------
            Explicacion del regex:
            ----------------------
            - '^': Indica que es el inicio de la cadena.
            - '[0-9]': Coincide con cualquier digito entre el 0 y el 9
            - '+': Se asegura que uno o mas digitos estan presentes en la cadena.
            - '$': Indica que es el fin de la cadena.
            */
            const regexNumero = /^[0-9]+$/;
            
            if(!regexNumero.test(numInput.value) || numInput.value.startsWith("0")) {
                numInput.value = '';
            }
        }
   
        numInput.addEventListener("keyup", validarNumero);
    }
);

