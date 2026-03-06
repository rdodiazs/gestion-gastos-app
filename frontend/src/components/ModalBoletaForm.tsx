import type { RefObject } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { BoletaResponse } from "../types/boletaResponse";
import type { BoletaRequest } from "../types/boletaRequest";
import CloseXBtn from "./CloseXBtn";
import InputBoleta from "./InputBoleta";

interface ModalBoletaFormProps {
    ref: RefObject<HTMLDialogElement | null>;
    handleToast: () => void;
    boleta?: BoletaResponse;
    disabled?: boolean;
    handleDisabled?: () => void;
};

const ModalBoletaForm = ({ref, handleToast, boleta, disabled, handleDisabled} : ModalBoletaFormProps) => {
    /*
        Tabla de verdad de modos/estados (modes) del formulario.

                -------------------------------
                | Mode | 'boleta' | 'disabled'|
                -------------------------------
                |Create|     F    |     F     |
                | Read |     T    |     T     |
                | Edit |     T    |     F     |
                -------------------------------
    */

    // Para inicializar valores sirve mas 'values' que 'defaultValues' en 'react-hook-form'
    // Mas info aca: https://medium.com/@seifelmejri/react-hook-form-best-practices-1-loading-async-data-with-values-not-defaultvalues-300ed851f227
    const { control, formState: { errors }, handleSubmit, reset } = useForm<BoletaResponse>({values: boleta, disabled: disabled});

   // Envio de datos
    const onSubmitBoleta: SubmitHandler<BoletaRequest> = (data) => {
        console.log(data);
        handleToast();
        reset();

        if(handleDisabled) {
            handleDisabled();
        }
        
        ref.current?.close();
    };

    const handleClose = () => {
        if((!disabled &&  boleta) && handleDisabled) {
            handleDisabled()
        }

        ref.current?.close();

        if(errors) {
            reset();
        }
    };

    const handleCancel = () => {
        if(!handleDisabled) {
            return;
        }

        handleDisabled();
        reset();
    };

    return(
        <dialog
            /*
                m-auto -> centraliza horizontalmente dialog (No esta por defecto con TailwindCSS)
                Sobre '::backdrop': https://tailwindcss.com/docs/hover-focus-and-other-states#backdrop
                Sobre 'transitions' con '<dialog>':
                - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#animating_dialogs
                - https://tailwindcss.com/docs/hover-focus-and-other-states#openclosed-state
                - https://tailwindcss.com/docs/hover-focus-and-other-states#starting-style
            */
            className="sm:min-w-120 px-9 py-7 m-auto main-container rounded-[10px] outline-none open:opacity-100 opacity-0 starting:open:opacity-0 backdrop:bg-transparent open:backdrop:bg-black/50 starting:open:backdrop:bg-transparent transition-opacity transition-colors transition-[overlay] transition-[display] transition-discrete duration-500 ease-out"

            ref={ref}

            onCancel={handleClose} // Evento que se ejecuta cuando se presiona la tecla 'ESC'
        >
            {/* Boton "X" para cerrar container */}
            <CloseXBtn handleClose={handleClose} />
            
            <h2 className="text-[2rem] text-center mb-5 mt-7 font-bold">{!boleta ? "Ingresa tu boleta" : "Revisa tu boleta"}</h2>
            
            {(boleta && disabled) &&
                <p className="mb-7 text-lg text-center text-main-app">
                    <span
                        className="cursor-pointer hover:text-[#676696] focus:text-[#676696]"
                        onClick={handleDisabled}
                    >
                        <i className="fa-solid fa-pencil"></i>
                        Editar
                    </span>
                </p>
            }
            
            <form onSubmit={handleSubmit(onSubmitBoleta)}>
                <InputBoleta
                    id="titulo"
                    label="Título"
                    name="titulo"
                    placeholder="Identifícala con un título"
                    control={control}
                    rules={{
                        required: {
                            value: !boleta && !disabled,
                            message: "Campo obligatorio"
                        },
                        pattern: {
                            value: /^(?!\s*$).*$/,
                            message: "No se permite enviar solo espacios en blanco"
                        },
                        maxLength: {
                            value: 30,
                            message: "Has alcanzado el límite de 30 caracteres"
                        }
                    }}
                    errorMsg={errors.titulo?.message}
                    disabled={disabled}
                />
            
                <InputBoleta
                    id="nro-boleta"
                    label="Nro. Boleta Electrónica"
                    type="number"
                    name="nroBoleta"
                    placeholder="Ej: 150310"
                    control={control}
                    rules={{
                        required: {
                            value: !boleta && !disabled,
                            message: "Campo obligatorio"
                        },
                        min: {
                            value: 1,
                            message: "Número inválido"
                        }
                    }}
                    errorMsg={errors.nroBoleta?.message}
                    disabled={disabled}
                />
            
                <InputBoleta
                    id="fecha"
                    label="Fecha de emisión (mes-día-año)"
                    type="date"
                    name="fechaBoleta"
                    control={control}
                    rules={{
                        required: {
                            value: !boleta && !disabled,
                            message: "Campo obligatorio"
                        }
                    }}
                    errorMsg={errors.fechaBoleta?.message}
                    disabled={disabled}
                />
            
                <InputBoleta
                    id="monto"
                    label="Monto final"
                    type="number"
                    name="montoFinal"
                    placeholder="Monto + IVA"
                    control={control}
                    rules={{
                        required: {
                            value: !boleta && !disabled,
                            message: "Campo obligatorio"
                        },
                        min: {
                            value: 0,
                            message: "Número inválido"
                        }
                    }}
                    errorMsg={errors.montoFinal?.message}
                    disabled={disabled}
                />
            
                <InputBoleta
                    id="descripcion"
                    label={`Descripción ${!disabled ? "(opcional)" : ""}`}
                    name="descripcion"
                    control={control}
                    rules={{
                        pattern: {
                            value: /^(?!\s*$).*$/,
                            message: "No se permite enviar solo espacios en blanco"
                        },
                        maxLength: {
                            value: 50,
                            message: "Has alcanzado el límite de 50 caracteres"
                        }
                    }}
                    errorMsg={errors.descripcion?.message}
                    disabled={disabled}
                />
                
                {!disabled && (
                    <div className="grid grid-cols-2 gap-x-2 mt-8 text-lg font-bold">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className={`${boleta ? "block" : "hidden" } border border-gray-container rounded-4xl cursor-pointer hover:bg-gray-container focus:bg-gray-container`}
                        >
                            Cancelar
                        </button>
            
                        <button
                            className={`block ${!boleta && "col-span-full"} text-white-secondary rounded-4xl bg-red-btn py-5 cursor-pointer`}
                        >
                            {!boleta ? "Ingresar" : "Guardar"}
                        </button>
                    </div>
                )}
            </form>

        </dialog>
    );
};

export default ModalBoletaForm;
