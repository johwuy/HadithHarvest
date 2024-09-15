import { Tooltip } from "@nextui-org/react";
import { SliderValue } from "@nextui-org/slider";

type HadithCountInputProps = {
    inputValue: string;
    setInputValue: (value: React.SetStateAction<string>) => void;
    handleUpdateAllCountStates(newValue: SliderValue): void;
};

function HadithCountInput({
    inputValue,
    setInputValue,
    handleUpdateAllCountStates,
}: HadithCountInputProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const v = e.target.value;
        setInputValue(v);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && !isNaN(Number(inputValue))) {
            handleUpdateAllCountStates(Number(inputValue));
        }
    }

    return (
        <Tooltip
            className="rounded-md text-tiny text-default-500"
            content="Press Enter to confirm"
            placement="left"
        >
            <input
                className="w-12 rounded-small border-medium border-transparent bg-default-100 px-1 py-0.5 text-right text-small font-medium text-default-700 outline-none transition-colors hover:border-primary focus:border-primary"
                type="text"
                aria-label="Hadith count"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </Tooltip>
    );
}

export default HadithCountInput;
