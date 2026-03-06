import { useRef, useState } from "react";
import ModalBoletaForm from "../components/ModalBoletaForm";
import HeaderHome from "../components/HeaderHome";
import Toast from "../components/Toast";
import CardMesBoleta from "../components/CardMesBoleta";

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false),
          [toastActive, setToastActive] = useState(false);

    const formRef = useRef<HTMLDialogElement | null>(null);

    // Funcion para abrir y cerrar el menu sidebar
    const handleOpen = () => {
        setOpenMenu(!openMenu);
    };

    // Funcion para abrir el modal del formulario para ingresar boletas
    const openModalForm = () => {
        if(!formRef.current) {
            return;
        };

        if(!formRef.current.hasAttribute("open")) {
            formRef.current.showModal();
        }; 
    };

    // Funcion para gestionar el Toast
    const handleToast = () => {
        setToastActive(!toastActive);
    }

    // Datos ficticios que se obtendran despues desde la API REST
    //const meses: string[] = [];
    const meses = ["Abril 2025", "Marzo 2025", "Febrero 2025", "Enero 2025"];

    return(
        <div>
            {/* Header */}
            <HeaderHome openMenu={openMenu} handleMenu={handleOpen} />

            {/* Contenido de la vista home */}
            <main className="m-[15px] lg:my-[44px] lg:mx-[11.1%] px-[15px] pb-[2.25em] lg:px-[55px] lg:pb-0 main-container">
                <h2 className="font-bold text-center lg:text-left text-[2rem] py-[2.25em]">Revisa tus gastos</h2>

                {/* Tarjetas de los meses, contenido para cuando no hay tarjetas y boton para ingresar boleta */}
                <section>
                    <div className="mb-[40px]">
                    {meses.length > 0 ?
                        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-[20px] gap-y-[20px] text-[1.125rem]">
                            {meses.map((mes, index) => (
                                <CardMesBoleta key={index} mesAnio={mes} />
                            ))}
                        </ul>

                        : <p className="text-[1.25rem] lg:text-center">
                                <span className="font-bold">¡No hay boletas ingresadas!</span>
                                Comienza a agregarlas presionando el botón de abajo.
                          </p>
                    }
                    </div>

                    <div className="flex justify-center pb-[3.75rem]">
                        <button
                            className="btn-primary lg:w-[40%]"
                            onClick={openModalForm}
                        >
                            Ingresar Boleta
                        </button>
                    </div>
                </section>
            </main>

            {/* Formulario para agregar boletas */}
            <ModalBoletaForm ref={formRef} handleToast={handleToast} />

            {/* Toast Formulario */}
            <Toast isActive={toastActive} onActive={handleToast} message="La boleta ha sido ingresada exitosamente"/>
        </div>
    );
}

export default Home;
