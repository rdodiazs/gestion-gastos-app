interface ToastProps {
    isActive: boolean;
    onActive: () => void;
    message: string;
};

const Toast = ({isActive, onActive, message}:ToastProps) => {
    const handleActive = () => {
        if(isActive) {
            setTimeout(() => onActive(), 2000);
        }
    };

    handleActive();

    return(
        <div className={`${!isActive && "hidden"} fixed right-0 left-0 bottom-1 z-1 lg:bottom-2 lg:right-2 lg:left-auto`}>
            <div className="relative">

                {/*
                    Contenedor del mensaje.
                    Sobre atributo 'role=status' y accesibilidad de snackbars/toasts:
                    - https://www.w3.org/TR/wai-aria-1.1/#status
                    - https://www.atomica11y.com/accessible-web/toast-snackbar/
                */}
                <div role="status" className="py-3 px-2 main-container rounded-lg shadow-xl/20 before:absolute before:top-0 before:left-0 before:h-full before:w-[10px] before:rounded-l-md before:bg-green-600">
                    <p className="pl-2 font-medium">
                        <i className="fa-solid fa-circle-check text-green-600"></i> {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Toast;
