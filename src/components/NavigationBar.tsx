import { Button } from "@nextui-org/button";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import StarIcon from "./Icons/StarIcon";
import WheatLogo from "./Icons/WheatLogo";

type NavigationBar = {
    toggleModal: () => void;
};

function NavigationBar({ toggleModal }: NavigationBar) {
    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <WheatLogo />
                <p className="font-bold text-inherit">HADITH HARVEST</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button isIconOnly variant="shadow" onClick={toggleModal}>
                        <StarIcon filled />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavigationBar;
