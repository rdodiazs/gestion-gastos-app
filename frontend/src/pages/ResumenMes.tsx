import { useRef, useState } from "react";
import type { BoletaResponse } from "../types/boletaResponse";
import ModalBoletaForm from "../components/ModalBoletaForm";
import Toast from "../components/Toast";
import ModalDelete from "../components/ModalDelete";
import HeaderResumenMes from "../components/HeaderResumenMes";
import CardBoletaResumen from "../components/CardBoletaResumen";

const ResumenMes = () => {
    const [boletaData, setBoletaData] = useState<BoletaResponse>();
    const [disabledForm, setDisabledForm] = useState(true);
    const [toastActive, setToastActive] = useState(false);
    const boletaRef = useRef<HTMLDialogElement | null>(null);
    const deleteModRef = useRef<HTMLDialogElement | null>(null);

    // Datos dummy que se obtendran desde la API
    const mesAnio = "Enero 2025";

    const boletas: BoletaResponse[] = [
        {
            id: 1,
            titulo: "Boleta 1",
            nroBoleta: 310105,
            fechaBoleta: "2025-01-05",
            montoFinal: 3400,
            descripcion: "Compra del super mes"
        },
        {
            id: 2,
            titulo: "Pago cuenta de la luz",
            nroBoleta: 110264,
            fechaBoleta: "2025-01-07",
            montoFinal: 12500,
            descripcion: ""
        },
        {
            id: 3,
            titulo: "Compra bluejeans",
            nroBoleta: 310105,
            fechaBoleta: "2025-01-18",
            montoFinal: 20000,
            descripcion: "Regalo de cumpleaños"
        }
    ];

    // Funciones de ayuda
    const getGastoTotal = (): string => {
        const formatCL = new Intl.NumberFormat("es-CL");

        // Como 'boletas' es un arreglo de objetos, es obligatorio indicar el valor inicial
        const gastoTotal = boletas.reduce((acc, boleta) => acc + boleta.montoFinal, 0);

        return formatCL.format(gastoTotal);
    };

    const openModalBoleta = () => {
        if(!boletaRef.current) {
            return;
        };

        if(!boletaRef.current.hasAttribute("open")) {
            boletaRef.current.showModal();
        }; 
    };

    // Se busca la boleta segun su 'id' y luego se abre el modal para dicha boleta
    const handleDetalle = (boletas: BoletaResponse[], boletaId: number) => {
        const boletaEncontrada = boletas.find((boleta) => boleta.id === boletaId);
        setBoletaData(boletaEncontrada);
        openModalBoleta();
    };

    const handleDisabled = () => setDisabledForm(!disabledForm);

    const handleToast = () => {
        setToastActive(!toastActive);
    }

    return(
        <div>
            {/* Header */}
            <HeaderResumenMes mesResumen={mesAnio} getTotal={getGastoTotal} />

            {/* Boletas ingresadas del mes */}
            <main className="main-container my-10 px-3 lg:p-0 lg:my-23 lg:mx-25">
                <section className="lg:mx-25">
                    <h2 className="text-[2rem] text-center font-bold py-13 lg:text-left lg:py-17 lg:px-0">Boletas ingresadas en este mes</h2>

                    {/* Listado de boletas ingresadas */}
                    <div className="mb-13 lg:mb-18 text-white-secondary">
                        {boletas.map((boleta) => (
                            <CardBoletaResumen
                                boleta={boleta}

                                // 'key' es un prop especial que se usa obligadamente cuando un elemento
                                // JSX o TSX es iterado por el metodo 'map'. No es necesario definirlo
                                // como un prop del componente funcional:
                                // - https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
                                // - https://react.dev/warnings/special-props
                                key={boleta.id}
                                openBoleta={() => handleDetalle(boletas, boleta.id)}
                                openDelete={() => deleteModRef.current?.showModal()}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <ModalBoletaForm
                ref={boletaRef}
                handleToast={handleToast}
                boleta={boletaData}
                disabled={disabledForm}
                handleDisabled={handleDisabled}
            />

            <Toast
                isActive={toastActive}
                onActive={handleToast}
                message="La boleta ha sido actualizada"
            />

            <ModalDelete ref={deleteModRef} />

        </div>
    );
};

export default ResumenMes;