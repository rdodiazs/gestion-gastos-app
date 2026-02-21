import type { NavItem } from "../types/navItem";
import CloseXBtn from "./CloseXBtn";

interface SidebarMenuHomeProps {
    navItems: NavItem[];
    openMenu: boolean;
    handleCloseSidebar: () => void;
};

const SidebarMenuHome = ({navItems, openMenu, handleCloseSidebar}: SidebarMenuHomeProps) => {
    return(
        <>
            {/* Contenido sidebar */}
            <nav
                className={`lg:hidden fixed z-2 h-full right-0 ${openMenu ? "w-7/10 opacity-100" : "w-0 opacity-0"} overflow-y-auto bg-main-app text-white-secondary transition-[opacity,width] duration-500 ease-in-out`}
                aria-label="Versión móvil de menú de navegación"
            >
                {/* Wrapper */}
                <div className={`py-[3.75rem] px-[15px] ${openMenu ? "opacity-100 duration-700" : "opacity-0"} transition-opacity`}>

                    {/* Boton "X" para cerrar sidebar */}
                    <CloseXBtn handleClose={handleCloseSidebar} />
            
                    {/* Sidebar menu content */}
                    <div>
                        <div className="flex justify-center">
                            <h2 className="text-[1.5625rem] text-nowrap font-bold py-[1.875rem]">Gestión de Gastos</h2>
                        </div>
            
                        <ul>
                            {navItems.map((navItem, index) => (
                                <li key={index} className="text-nowrap font-bold pt-[1.25rem] cursor-pointer">
                                    <span><i className={navItem.iconClass}></i> {navItem.title}</span>
                                </li>
                            ))}
                            <li className="text-nowrap font-bold pt-[1.25rem] cursor-pointer"><span><i className="fa-solid fa-arrow-right-from-bracket"></i> Salir</span></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SidebarMenuHome;
