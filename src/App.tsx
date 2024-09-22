import { useDisclosure } from "@nextui-org/react";
import FavoritesModal from "./components/FavoritesModal";
import HadithHarvestContainer from "./components/HadithHarvestContainer";
import NavigationBar from "./components/NavigationBar";

function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <NavigationBar toggleModal={onOpen} />
            <HadithHarvestContainer />
            <FavoritesModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
}

export default App;
