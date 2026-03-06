interface HeaderResumenMesProps {
    mesResumen: string;
    getTotal: () => string;
};

const HeaderResumenMes = ({mesResumen, getTotal}: HeaderResumenMesProps) => {
    return(
        <header className="border-b border-gray-container lg:main-container lg:pt-8 lg:pb-16 lg:mx-25">
            {/* Titulo header container */}
            <div className="bg-main-app text-white-secondary lg:mx-25 lg:mb-8 lg:rounded-xl">
                <div className="pt-7 pl-4 text-4xl">
                    <i className="fa-solid fa-arrow-left cursor-pointer"></i>
                </div>
        
                <h1 className="font-bold text-center text-[2.85rem] pt-8 pb-16">Gastos de {mesResumen}</h1>
            </div>
        
            {/* Info resumen gastos del mes */}
            <div className="py-15 px-3 lg:py-0 lg:px-25">
                <div className="bg-main-app text-white-secondary p-5 rounded-xl">
                    <h2 className="text-2xl font-bold">Resumen gastos del mes</h2>
        
                    <p className="text-lg mt-15">Total gastado</p>
                    <p className="text-[2.85rem] text-center font-bold my-6 wrap-anywhere">${getTotal()}</p>
                </div>
            </div>
        </header>
    );
};

export default HeaderResumenMes;
