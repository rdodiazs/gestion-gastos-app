import type { BoletaResponse } from "../types/boletaResponse";

interface CardBoletaResumenProps {
    boleta: BoletaResponse;
    openBoleta: () => void;
    openDelete: () => void;
};

const CardBoletaResumen = ({boleta, openBoleta, openDelete}: CardBoletaResumenProps) => {
    return(
        <article className="bg-main-app-500 py-3 px-4 border border-main-app rounded-xl not-last:mb-4">
            <p>{boleta.fechaBoleta}</p>
            
            <div className="grid grid-cols-[1fr_0.35fr] items-center text-2xl">
                <h3 className="font-bold">{boleta.titulo}</h3>
            
                {/* Botones acciones sobre boleta */}
                <div className="flex justify-end">
                    {/* Boton para abrir boleta */}
                    <div
                        className="p-2 mr-3 rounded-xl hover:bg-main-app-400 cursor-pointer transition-colors duration-100"
                        onClick={openBoleta}
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square text-main-app"></i>
                    </div>
            
                    {/* Boton para eliminar boleta */}
                    <div
                        className="p-2 rounded-xl hover:bg-main-app-400 cursor-pointer transition-colors duration-100"
                        onClick={openDelete}
                    >
                        <i className="fa-solid fa-trash-can text-red-btn"></i>
                    </div>
                </div>
            </div>
            
            <p className="text-xl font-bold">${boleta.montoFinal}</p>
        </article>
    );
};

export default CardBoletaResumen;
