
// Código para abrir y cerrar side-menu
let headerElements = Array.from(document.getElementsByClassName("main-header").item(0).children);

headerElements = headerElements.slice(0, 2); // Dejo solo los elementos de los sidebars

let elementsToEvent = Array.from(document.querySelectorAll(".main-header svg"));

elementsToEvent.push(headerElements[0]);

const openSidebarEvent = (iconElem, open = true) => {
    iconElem.addEventListener(
        "click",
        () => {
            headerElements.forEach(
                (elem) => {

                    let classNameElem = elem.className;

                    if(open) {
                        if(classNameElem.startsWith("opacity")) {
                            elem.classList.add("opacity-on");
                        } else {
                            elem.classList.add("open-menu");
                        }
                    } else {
                        if(classNameElem.startsWith("opacity")) {
                            elem.classList.remove("opacity-on");
                        } else {
                            elem.classList.remove("open-menu");
                        }
                    }
                }
            );
        }
    );
}

for(element of elementsToEvent) {
    let parentClassName = element.parentElement.className,
        className = element.className;

    if(parentClassName === "hamburger-menu-icon") {
        openSidebarEvent(element);
    }

    else if(parentClassName === "close-menu-icon" || className.startsWith("opacity")) {
        openSidebarEvent(element, false);
    }
}

// Codigo para abrir vista para agregar una boleta.
let ingresarElements = Array.from(document.querySelectorAll(".gastos-mes-container button, .ingresar-container, .opacity-ingresar, .close-ingresar svg"));
let ingresarEvents = [];

let [, opacityContainer, ingresarContainer] = ingresarElements;

for(let i = 0; i < ingresarElements.length; i++) {

    if(i === 2) {
        i += 1;
    }
    
    ingresarEvents.push(ingresarElements[i]);
}

const toggleIngresar = (elem) => {
    elem.addEventListener(
        "click",
        () => {
            let isVisible = elem.localName === "button";

            ingresarContainer.classList.toggle("ingresar-open", isVisible);
            opacityContainer.classList.toggle("opacity-on", isVisible);
        }
    );
}

ingresarEvents.forEach((elem) => toggleIngresar(elem));

