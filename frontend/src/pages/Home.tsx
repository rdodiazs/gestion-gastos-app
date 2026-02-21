import { useState } from "react";
import HeaderHome from "../components/HeaderHome";
import DarkScreen from "../components/DarkScreen";
import FormBoleta from "../components/FormBoleta";
import Toast from "../components/Toast";

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false),
          [openForm, setOpenForm] = useState(false),
          [toastActive, setToastActive] = useState(false);

    // Funcion para abrir y cerrar componentes Sidebar o Formulario
    const handleOpen = (openState: boolean, setOpen: (state: boolean) => void) => {
        setOpen(!openState);
    }

    // Funcion para cerrar Sidebar o FormBoleta junto con DarkScreen
    const handleClose = () => {
        if(openMenu) {
            setOpenMenu(false);
            return;
        }

        else if(openForm) {
            setOpenForm(false);
        }
    }

    // Funcion para gestionar el Toast
    const handleToast = () => {
        setToastActive(!toastActive);

        setTimeout(() => setToastActive(false), 2000);
    }

    // Datos ficticios que se obtendran despues desde la API REST
    //const meses: string[] = [];
    const meses = ["Abril 2025", "Marzo 2025", "Febrero 2025", "Enero 2025"];

    return(
        <div>
            {/* Header */}
            <HeaderHome openMenu={openMenu} handleMenu={() => handleOpen(openMenu, setOpenMenu)} />

            {/* Contenido de la vista home */}
            <main className="m-[15px] lg:my-[44px] lg:mx-[11.1%] px-[15px] pb-[2.25em] lg:px-[55px] lg:pb-0 main-container">
                <h2 className="font-bold text-center lg:text-left text-[2rem] py-[2.25em]">Revisa tus gastos</h2>

                {/* Tarjetas de los meses, contenido para cuando no hay tarjetas y boton para ingresar boleta */}
                <section>
                    <div className="mb-[40px]">
                    {meses.length > 0 ?
                        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-[20px] gap-y-[20px] text-[1.125rem]">
                            {meses.map((mes, index) => (
                                <li key={index} className="text-center font-bold py-[32.5px] rounded-[12px] text-white-secondary bg-main-app-500 cursor-pointer">
                                    <span>{mes}</span>
                                </li>
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
                            onClick={() => handleOpen(openForm, setOpenForm)}
                        >
                            Ingresar Boleta
                        </button>
                    </div>
                </section>
            </main>

            {/* Formulario para agregar boletas */}
            <FormBoleta openForm={openForm} handleCloseForm={handleClose} setToast={handleToast} />

            {/* Toast Formulario */}
            <Toast isActive={toastActive} message="La boleta ha sido ingresada exitosamente"/>

            {/* Pantalla opaca oscura */}
            <DarkScreen openScreen={openMenu || openForm} handleCloseScreen={handleClose} />
        </div>
    );
}

export default Home;
