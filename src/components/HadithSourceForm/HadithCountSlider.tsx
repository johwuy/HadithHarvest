import { Slider, SliderValue } from "@nextui-org/slider";
import { STARTING_COUNT, useFormStateStore } from "../../stores/formStateStore";
import { useState } from "react";
import { processNewValue } from "../../lib/utils";
import HadithCountInput from "./HadithCountInput";

function HadithCountSlider() {
    const isLoading = useFormStateStore((state) => state.isLoading);
    const setHadithCount = useFormStateStore((state) => state.setHadithCount);

    const [tempValue, setTempValue] = useState<number>(STARTING_COUNT);
    const [inputValue, setInputValue] = useState<string>(
        STARTING_COUNT.toString(),
    );

    function updateLocalCountState(newValue: SliderValue): number | null {
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
                    <HadithCountInput
                        inputValue={inputValue}
                        handleUpdateAllCountStates={handleUpdateAllCountStates}
                        setInputValue={setInputValue}
                    />
                </output>
            )}
        />
    );
}

export default HadithCountSlider;
