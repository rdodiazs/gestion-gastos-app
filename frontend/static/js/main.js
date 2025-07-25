
// Código para abrir y cerrar side-menu
let headerElements = Array.from(document.getElementsByClassName("main-header").item(0).children);

headerElements = headerElements.slice(0, 2); // Dejo solo los elementos de los sidebars

let elementsToEvent = Array.from(document.getElementsByTagName("svg"));

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


