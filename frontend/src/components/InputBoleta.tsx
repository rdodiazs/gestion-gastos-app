import type { HTMLInputTypeAttribute } from "react";
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form";

/*
    Se utilizan 'tipos genericos' para definir la interfaz y el
    componente funcional. Para entender sobre ese tema, recomiendo
    revisar los siguientes articulos:

    - https://www.freecodecamp.org/news/how-typescript-generics-work/
    - https://www.typescriptlang.org/docs/handbook/2/generics.html
*/

// Con la palabra clave 'extends' se estan incorporando todos
// los atributos de 'UseControllerProps' a 'InputBoletaProps'
interface InputBoletaProps<T extends FieldValues> extends UseControllerProps<T> {
    id: string;
    label: string;
    type?: HTMLInputTypeAttribute
    placeholder?: string;
    errorMsg?: string;
    disabled?: boolean;
};

const InputBoleta = <T extends FieldValues>({
    id,
    label,
    type,
    placeholder,
    errorMsg,
    disabled,
    name,
    control,
    rules
}: InputBoletaProps<T>) => {

    const {field} = useController({name, control, rules});

    return(
        <div className="mb-4">
            <div className="relative">
                <label htmlFor={id} className="font-bold">{label}</label>
                <input
                    id={id}
                    name={field.name}
                    placeholder={placeholder}
                    type={type}
                    className={`block peer ${!disabled && "border-b border-main-app-light"} outline-none w-[stretch] py-[10px]`}
                    disabled={disabled}
                    value={field.value || ""}
                    onChange={field.onChange}
                />
            
                {/* Subrayado debajo del input */}
                <div
                    className={`before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] ${!errorMsg ? "before:bg-main-app" : "before:bg-red-btn" } peer-focus:before:w-full before:transition-[width] before:duration-400 before:ease-in-out`}
                ></div>
            
            </div>

            {/* Mensaje de error */}
            {errorMsg && (
                <div className="bg-red-200 py-2 pl-1">
                    <p className="text-sm text-red-btn">
                        <i className="fa-solid fa-triangle-exclamation"></i> {errorMsg}
                    </p>
                </div>
            )}
        </div>
    );
};

export default InputBoleta;
