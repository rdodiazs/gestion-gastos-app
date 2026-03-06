const CardMesBoleta = ({mesAnio}:{mesAnio: string}) => {
    return(
        <li className="text-center font-bold py-[32.5px] rounded-[12px] text-white-secondary bg-main-app-500 cursor-pointer">
            <span>{mesAnio}</span>
        </li>
    );
};

export default CardMesBoleta;
