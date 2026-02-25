import { useForm, type SubmitHandler } from "react-hook-form";
import InputBoleta from "./InputBoleta";
import type { BoletaRequest } from "../types/boletaRequest";

interface FormBoletaProps {
    setToast: () => void;
};

const FormBoleta = ({setToast}:FormBoletaProps) => {
    // Declaracion de react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm<BoletaRequest>();
    
    const onSubmitBoleta: SubmitHandler<BoletaRequest> = (data) => {
        console.log(data); // Se muestran los datos por consola (solucion temporal)
        setToast();        // Se muestra mensaje exitoso por 2 segundos
        reset();           // Se reinician todos los valores, estados y errores del formulario
    }

    return(
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
    );
};

export default FormBoleta;
