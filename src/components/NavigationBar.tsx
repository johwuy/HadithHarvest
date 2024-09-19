import { Button } from "@nextui-org/button";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import StarIcon from "./Icons/StarIcon";
import WheatLogo from "./Icons/WheatLogo";
import { useFavoritedStore } from "../stores/favoritedStore";

function NavigationBar() {
    const favoritedHadith = useFavoritedStore((state) => state.favorited);

    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <WheatLogo />
                <p className="font-bold text-inherit">HADITH HARVEST</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        isIconOnly
                        variant="shadow"
                        onClick={() => console.log(favoritedHadith)}
                    >
                        <StarIcon filled />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavigationBar;
