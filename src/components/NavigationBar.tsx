import { Button } from "@nextui-org/button";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import StarIcon from "./Icons/StarIcon";
import WheatLogo from "./Icons/WheatLogo";

function NavigationBar() {
    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <WheatLogo />
                <p className="font-bold text-inherit">HADITH HARVEST</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button isIconOnly variant="shadow">
                        <StarIcon />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavigationBar;
