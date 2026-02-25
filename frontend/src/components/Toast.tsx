const Toast = ({isActive, message}:{isActive: boolean, message: string}) => {
    return(
        <div className={`${!isActive && "hidden"} fixed right-0 left-0 bottom-1 z-1 lg:bottom-2 lg:right-auto lg:left-2`}>
            <div className="relative">
                <div className="py-3 px-2 main-container rounded-lg shadow-xl/20 before:absolute before:top-0 before:left-0 before:h-full before:w-[10px] before:rounded-l-md before:bg-green-600">
                    <p className="pl-2 font-medium">
                        <i className="fa-solid fa-circle-check text-green-600"></i> {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Toast;
