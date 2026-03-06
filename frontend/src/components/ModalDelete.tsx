import type { RefObject } from "react";
import CloseXBtn from "./CloseXBtn";

interface ModalDeleteProps {
    ref: RefObject<HTMLDialogElement | null>;
};

const ModalDelete = ({ref}: ModalDeleteProps) => {
    return(
        <dialog ref={ref} className="py-8 px-4 rounded-[10px] outline-none backdrop:bg-black/50 m-auto">
            {/* Header del modal */}
            <div className="flex mb-5">
                <div>
                    <div className="py-1 px-[7px] mr-2 rounded-full bg-red-200 text-xl text-red-btn">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                </div>

                <div>
                    <h2 className="mb-5 text-xl font-bold">Eliminar boleta</h2>
                    <p>¿Confirmas que quieres eliminar esta boleta? No podrás revertir esta acción.</p>
                </div>

                <CloseXBtn handleClose={() => ref.current?.close()} />
            </div>

            {/* Botones de decision (por ahora, en ambos casos solo cierra el modal)*/}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 font-bold">
                <button
                    type="button"
                    className="py-4 px-5 border rounded-2xl border-gray-container hover:bg-gray-container focus:bg-gray-container cursor-pointer"
                    onClick={() => ref.current?.close()}
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    className="py-4 px-5 rounded-2xl bg-red-btn text-white-secondary cursor-pointer"
                    onClick={() => ref.current?.close()} // Modificar despues para eliminar boleta
                >
                    Confirmar
                </button>
            </div>
        </dialog>
    );
};

export default ModalDelete;
