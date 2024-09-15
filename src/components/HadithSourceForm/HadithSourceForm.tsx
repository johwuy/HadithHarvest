import { Button } from "@nextui-org/react";
import { useFormStateStore } from "../../stores/formStateStore/formStateStore";
import HadithSourceSelection from "./HadithSourceSelection";
import HadithCountSlider from "./HadithCountSlider";
import { useShallow } from "zustand/react/shallow";

function HadithSourceForm() {
    const { isLoading, toggleLoading, hadithSources, hadithCount } =
        useFormStateStore(
            useShallow((state) => ({
                isLoading: state.isLoading,
                toggleLoading: state.toggleLoading,
                hadithSources: state.hadithSources,
                hadithCount: state.hadithCount,
            })),
        );

    return (
        <form className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            <HadithSourceSelection />
            <HadithCountSlider />
            <Button
                className=""
                color="primary"
                onClick={async () => {
                    toggleLoading();
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    console.log(hadithSources, hadithCount);
                    toggleLoading();
                }}
                isLoading={isLoading}
            >
                Generate
            </Button>
        </form>
    );
}

export default HadithSourceForm;
