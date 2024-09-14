import { Button, Slider, SliderValue, Tooltip } from "@nextui-org/react";
import HadithSourceSelection from "./HadithSourceSelection";
import {
    STARTING_COUNT,
    useFormStateStore,
} from "../../stores/formStateStore/formStateStore";
import { useState } from "react";
import { processNewValue } from "../../lib/utils";

// TODO: Factor out processing new value into its own function

function HadithSourceForm() {
    const {
        isLoading,
        toggleLoading,
        hadithCount,
        hadithSources,
        setHadithCount,
    } = useFormStateStore();

    const [tempValue, setTempValue] = useState<number>(STARTING_COUNT);
    const [inputValue, setInputValue] = useState<string>(
        STARTING_COUNT.toString(),
    );

    function updateLocalCountState(newValue: number | number[]): number | null {
        const processedValue = processNewValue(newValue);
        if (processedValue == null) return null;
        setTempValue(processedValue);
        setInputValue(processedValue.toString());
        return processedValue;
    }

    function handleUpdateAllCountStates(newValue: SliderValue) {
        const processedValue = updateLocalCountState(newValue);
        if (processedValue != null) {
            setHadithCount(processedValue);
        }
    }

    return (
        <form className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            <HadithSourceSelection />
            <Slider
                isDisabled={isLoading}
                label="Count"
                showOutline
                minValue={1}
                radius="lg"
                color="secondary"
                classNames={{ label: "text-medium" }}
                value={tempValue}
                onChange={updateLocalCountState}
                onChangeEnd={handleUpdateAllCountStates}
                renderValue={({ ...props }) => (
                    <output {...props}>
                        <Tooltip
                            className="rounded-md text-tiny text-default-500"
                            content="Press Enter to confirm"
                            placement="left"
                        >
                            <input
                                className="w-12 rounded-small border-medium border-transparent bg-default-100 px-1 py-0.5 text-right text-small font-medium text-default-700 outline-none transition-colors hover:border-primary focus:border-primary"
                                type="text"
                                aria-label="Temperature value"
                                value={inputValue}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    const v = e.target.value;

                                    setInputValue(v);
                                }}
                                onKeyDown={(
                                    e: React.KeyboardEvent<HTMLInputElement>,
                                ) => {
                                    if (
                                        e.key === "Enter" &&
                                        !isNaN(Number(inputValue))
                                    ) {
                                        handleUpdateAllCountStates(
                                            Number(inputValue),
                                        );
                                    }
                                }}
                            />
                        </Tooltip>
                    </output>
                )}
            />
            <Button
                className=""
                color="primary"
                onClick={() => {
                    toggleLoading();
                    setTimeout(() => toggleLoading(), 3000);
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
