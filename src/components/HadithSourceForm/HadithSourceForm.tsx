import { Button } from "@nextui-org/react";
import { useFormStateStore } from "../../stores/formStateStore";
import HadithSourceSelection from "./HadithSourceSelection";
import HadithCountSlider from "./HadithCountSlider";
import { useShallow } from "zustand/react/shallow";

function HadithSourceForm() {
    const { isLoading, generateHadith } = useFormStateStore(
        useShallow((state) => ({
            isLoading: state.isLoading,
            generateHadith: state.generateHadith,
        })),
    );

    return (
        <form className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            <HadithSourceSelection />
            <HadithCountSlider />
            <Button
                className=""
                color="primary"
                onClick={generateHadith}
                isLoading={isLoading}
            >
                Generate
            </Button>
        </form>
    );
}

export default HadithSourceForm;
