import { Button } from "@nextui-org/react";
import { useFormStateStore } from "../../stores/formStateStore/formStateStore";
import HadithSourceSelection from "./HadithSourceSelection";
import HadithCountSlider from "./HadithCountSlider";

function HadithSourceForm() {
    const { isLoading, toggleLoading, hadithCount, hadithSources } =
        useFormStateStore();

    return (
        <form className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            <HadithSourceSelection />
            <HadithCountSlider />
            <Button
                className=""
                color="primary"
                onClick={async () => {
                    toggleLoading();
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    toggleLoading();
                    console.log(hadithSources, hadithCount);
                }}
                isLoading={isLoading}
            >
                Generate
            </Button>
        </form>
    );
}

export default HadithSourceForm;
