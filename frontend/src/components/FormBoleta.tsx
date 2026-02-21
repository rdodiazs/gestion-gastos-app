import { useForm, type SubmitHandler } from "react-hook-form";
import CloseXBtn from "./CloseXBtn";
import InputBoleta from "./InputBoleta";
import type { BoletaRequest } from "../types/boletaRequest";

interface FormBoletaProps {
    openForm: boolean;
    handleCloseForm: () => void;
    setToast: () => void;
};

const FormBoleta = ({openForm, handleCloseForm, setToast}:FormBoletaProps) => {
    // Declaracion de react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm<BoletaRequest>();
    
    const onSubmitBoleta: SubmitHandler<BoletaRequest> = (data) => {
        console.log(data); // Se muestran los datos por consola (solucion temporal)
        setToast();        // Se muestra mensaje exitoso por 2 segundos
        reset();           // Se reinician todos los valores, estados y errores del formulario
    }

    return(
        <div
            className={`fixed bottom-0 left-0 z-1 top-[50%] translate-y-[-50%] h-[600px] sm:h-[400px] md:h-[600px] w-[89%] lg:w-[40%] translate-x-[6%] lg:translate-x-[80%] rounded-[10px] overflow-y-auto px-[30px] lg:px-[40px] py-[40px] main-container ${openForm ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-500 ease-in-out`}
        >
            {/* Boton "X" para cerrar formulario */}
            <CloseXBtn handleClose={handleCloseForm} />
        
            <h2 className="text-[2rem] text-center my-[1.875rem] font-bold">Ingresa tu boleta</h2>
        
            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmitBoleta)}>
                <InputBoleta
                    id="titulo" label="Título"
                    placeholder="Identifícala con un título"
                    type="text"

                    // El valor "titulo" esta siendo asignado al atributo "name"
                    register={register("titulo", {
                        required: "Campo obligatorio",
                        pattern: {
                            value: /^(?!\s*$).*$/,
                            message: "No se permite enviar solo espacios en blanco"
                        }
                    })} 
                    errorMsg={errors.titulo?.message}
                />

                 <InputBoleta
                    id="nro-boleta" label="Nro. Boleta Electrónica"
                    placeholder="Ej: 150310"
                    type="number"
                    register={register("nroBoleta", {
                        required: "Campo obligatorio",
                        min: {
                            value: 1,
                            message: "Número inválido"
                        }
                    })} 
                    errorMsg={errors.nroBoleta?.message}
                />

                <InputBoleta
                    id="fecha" label="Fecha de emisión (mes-día-año)"
                    type="date"
                    register={register("fechaBoleta", {required: "Campo obligatorio"})} 
                    errorMsg={errors.fechaBoleta?.message}
                />

                <InputBoleta
                    id="costo" label="Monto final"
                    placeholder="Monto + IVA"
                    type="number"
                    register={register("montoFinal", {
                        required: "Campo obligatorio",
                        min: {
                            value: 0,
                            message: "Número inválido"
                        }
                    })} 
                    errorMsg={errors.montoFinal?.message}
                />

                <InputBoleta
                    id="descripcion" label="Descripción"
                    placeholder="Opcional"
                    type="text"
                    register={register("descripcion", {
                        pattern: {
                            value: /^(?!\s*$).*$/,
                            message: "No se permite enviar solo espacios en blanco"
                        }
                    })} 
                    errorMsg={errors.descripcion?.message}
                />
        
                <button className="btn-primary mt-[30px]">Ingresar</button>
            </form>
        </div>
    );
};

export default FormBoleta;
