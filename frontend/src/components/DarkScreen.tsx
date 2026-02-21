interface DarkScreenProps {
    openScreen: boolean;
    handleCloseScreen: () => void;
};

const DarkScreen = ({openScreen, handleCloseScreen}: DarkScreenProps) => {
    return(
        <div
            className={`fixed -z-0 top-0 w-full ${openScreen ? "opacity-50 h-full" : "opacity-0"} bg-black transition-opacity duration-200 ease-in-out`}
            onClick={handleCloseScreen}
        >
        </div>
    );
}

export default DarkScreen;
