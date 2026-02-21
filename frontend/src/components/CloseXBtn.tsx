const CloseXBtn = ({handleClose}: {handleClose: () => void}) => {
    return(
        <div className="text-right">
            <i className="fa-solid fa-xmark text-[1.5625rem] hover:opacity-60 cursor-pointer" onClick={handleClose}></i>
        </div>
    );
};

export default CloseXBtn;
