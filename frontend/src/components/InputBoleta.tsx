import type { HTMLInputTypeAttribute } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputBoletaProps {
    id: string;
    label: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    value?: string;

    // El tipo 'UseFormRegisterReturn' es el retornado por la funcion 'register' y representa
    // las propiedades que se pasan a un 'input'.
    // En cambio, el tipo 'UseFormRegister' es una funcion y por eso no sirve usarla aca.
    // En los docs no se menciona, pero si se puede ver en el codigo fuente:
    // https://github.com/react-hook-form/react-hook-form/blob/master/src/types/form.ts
    register: UseFormRegisterReturn<string>; 
    errorMsg?: string;
};

const InputBoleta = ({id, label, placeholder, type, value, register, errorMsg}: InputBoletaProps) => {
    return(
        <div className="mb-[15px]">
            <div className="relative">
                <label htmlFor={id} className="font-bold">{label}</label>
                <input
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    className={`block peer ${!errorMsg && "border-b border-main-app-light"} outline-none w-[stretch] py-[10px]`}
                    {...register}
                />

                {/* Subrayado debajo del input */}
                <div className={`before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1.2px] ${!errorMsg ? "before:bg-main-app" : "before:bg-red-btn"} peer-focus:before:w-full before:transition-[width] before:duration-400 before:ease-in-out`}></div>
            </div>

            {/* Mensaje de error por input invalido */}
            {errorMsg &&
                (<div className="bg-red-200 py-2 pl-1">
                    <p className="text-sm text-red-btn">
                        <i className="fa-solid fa-triangle-exclamation"></i> {errorMsg}
                    </p>
                </div>)
            }
        </div>
    );
};

export default InputBoleta;
