import type { NavItem } from "../types/navItem";

interface NavbarHomeProps {
    navItems: NavItem[];
};

// Mejorar con rutas
const NavbarHome = ({navItems}: NavbarHomeProps) => {

    // Importante definir el tipo, porque Typescript xd
    const gridNavCols: {[key: number]: string} = {
    // 'grid-temp-cols-*' es una custom utility class definida en globals.css
        3: "grid-temp-cols-3",
        4: "grid-temp-cols-4",
        5: "grid-temp-cols-5"
    };

    return(
        <nav className="hidden lg:grid lg:grid-cols-3 lg:items-center" aria-label="Menú de navegación principal">
            <p className="font-bold text-[1.0625rem]"><span className="cursor-pointer">Gestión de Gastos</span></p> 
        
            {/* Tailwind y clases con variables dinamicas (no siempre funcionan): 
                - https://tailkits.com/blog/tailwind-dynamic-classes/
                - https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names
            */}
            <ul className={`grid ${gridNavCols[navItems.length]}`}>
                {navItems.map((navItem, index) => (
                    <li key={index} className="text-center">
                        <span className="block py-[13px] px-[10px] my-[17px] text-main-app-500 hover:bg-main-app-500 hover:text-white-secondary transition-colors duration-100 cursor-pointer">{navItem.title}</span>
                    </li>
                ))}
            </ul>
        
            <p className="text-right">
                <span className="font-bold py-[10px] px-[14px] border border-solid rounded-3xl border-red-btn text-red-btn hover:bg-red-btn hover:text-white-secondary transition-colors duration-100 cursor-pointer">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Salir
                </span>
            </p>
        </nav>
    );
}

export default NavbarHome;
