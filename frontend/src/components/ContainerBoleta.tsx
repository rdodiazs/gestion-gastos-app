import type { ReactNode } from "react";
import CloseXBtn from "./CloseXBtn";

interface ContainerBoletaProps {
    openContainer: boolean;
    handleClose: () => void;
    titulo: string;
    children: ReactNode;
};

const ContainerBoleta = ({openContainer, handleClose, titulo, children}: ContainerBoletaProps) => {
    return(
        <div
            className={`fixed bottom-0 left-0 z-1 top-[50%] translate-y-[-50%] h-[600px] sm:h-[400px] md:h-[600px] w-[89%] lg:w-[40%] translate-x-[6%] lg:translate-x-[80%] rounded-[10px] overflow-y-auto px-[30px] lg:px-[40px] py-[40px] main-container ${openContainer ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-500 ease-in-out`}
        >
            {/* Boton "X" para cerrar container */}
            <CloseXBtn handleClose={handleClose} />

            <h2 className="text-[2rem] text-center my-[1.875rem] font-bold">{titulo}</h2>

            {children}
        </div>
    );
};

export default ContainerBoleta;
