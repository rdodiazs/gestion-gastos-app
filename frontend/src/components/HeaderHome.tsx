import NavbarHome from "./NavbarHome";
import SidebarMenuHome from "./SidebarMenuHome";
import type { NavItem } from "../types/navItem";

interface HeaderHomeProps {
    openMenu: boolean;
    handleMenu: () => void;
};

const HeaderHome = ({openMenu, handleMenu}: HeaderHomeProps) => {
    // Estas tres variables se obtendran desde la API REST
    let nombreUsuario = "John Doe";
    let gastoUltimoMes = 8000;
    const formatCL = new Intl.NumberFormat("es-CL");

    // Items de navegacion
    const navItems: NavItem[] = [
        {title: "Inicio", iconClass: "fa-solid fa-house", url: ""},
        {title: "Reporte", iconClass: "fa-solid fa-chart-line", url: ""},
        {title: "Configuración", iconClass: "fa-solid fa-gear", url: ""}
    ];

    return(
        <header className="lg:mt-[10px] lg:mx-[11.1%] lg:px-[55px] lg:pb-[60px] lg:main-container">
            {/* Navbar version desktop */}
            <NavbarHome navItems={navItems} />
        
            {/* Sidebar nav menu (mobile) */}
            <SidebarMenuHome navItems={navItems} openMenu={openMenu} handleCloseSidebar={handleMenu} />
            
            {/* header content */}
            <div className="grid grid-cols-[1fr_0.25fr] lg:block lg:rounded-2xl py-[3.75em] px-[1.875em] lg:p-[1.875rem] bg-main-app text-white-secondary">
                {/* header content wrapper */}
                <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-center">
                    <div className="text-[2rem] lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2 lg:justify-self-center">
                        <p>Hola,</p>
                        <p className="font-bold">{nombreUsuario}</p>
                    </div>
        
                    <p className="mt-[2.5em] mb-[2.2em]">Tu gasto del último mes es de</p>
                    <p className="font-bold text-6xl lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:self-start">${formatCL.format(gastoUltimoMes)}</p>
                </div>
        
                {/* Hamburger icon (font awesome) */}
                <div className="lg:hidden text-right">
                    <i className="fa-solid fa-bars text-[1.5625rem] cursor-pointer" onClick={handleMenu}></i>
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;
