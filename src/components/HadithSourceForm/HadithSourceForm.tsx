import { Chip } from "@nextui-org/chip";
import { Button, Tooltip } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Slider, SliderValue } from "@nextui-org/slider";
import { useState } from "react";
import hadithInfo from "../../lib/hadithInfo";
import type { HadithKey } from "../../lib/hadithType";

const INITIAL_SOURCES: HadithKey[] = [
    "bukhari",
    "muslim",
    "abudawud",
    "tirmidhi",
    "nasai",
    "ibnmajah",
];

const STARTING_COUNT = 1;

function HadithSourceForm() {
    const [hadithSources, setHadithSources] =
        useState<Array<HadithKey>>(INITIAL_SOURCES);
    const [value, setValue] = useState<SliderValue>(STARTING_COUNT);
    const [inputValue, setInputValue] = useState<string>(
        STARTING_COUNT.toString(),
    );
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (value: SliderValue) => {
        if (isNaN(Number(value))) return;

        if (Array.isArray(value)) {
            value = value.map((v) => (v >= 1 ? Math.round(v) : 1));
        } else {
            value = value >= 1 ? Math.round(value) : 1;
        }

        setValue(value);
        setInputValue(value.toString());
    };

    return (
        <form className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            <Select
                isDisabled={isLoading}
                items={hadithInfo}
                label="Hadith Source"
                selectionMode="multiple"
                size="lg"
                isMultiline={true}
                classNames={{ label: "text-large" }}
                renderValue={(selectedHadiths) => {
                    return (
                        <div className="flex flex-wrap gap-2">
                            {selectedHadiths.map((selectedHadith) => (
                                <Chip
                                    key={selectedHadith.key}
                                    onClose={() => {
                                        setHadithSources(
                                            (prevHadithSources) => {
                                                return prevHadithSources.length >
                                                    1
                                                    ? prevHadithSources.filter(
                                                          (prevHadithSource) =>
                                                              prevHadithSource !==
                                                              selectedHadith.key,
                                                      )
                                                    : prevHadithSources;
                                            },
                                        );
                                    }}
                                >
                                    {selectedHadith.textValue}
                                </Chip>
                            ))}
                        </div>
                    );
                }}
                selectedKeys={hadithSources}
                onChange={(e) => {
                    const newHadtithSouces =
                        e.target.value === ""
                            ? (e.target.value.split(",") as HadithKey[])
                            : [];
                    if (newHadtithSouces.length === 0) {
                        return;
                    }

                    setHadithSources(newHadtithSouces);
                }}
            >
                {hadithInfo.map((hadith) => (
                    <SelectItem key={hadith.key}>{hadith.label}</SelectItem>
                ))}
            </Select>
            <Slider
                isDisabled={isLoading}
                label="Count"
                showOutline
                minValue={1}
                radius="lg"
                color="secondary"
                classNames={{ label: "text-medium" }}
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
                                        handleChange(Number(inputValue));
                                    }
                                }}
                            />
                        </Tooltip>
                    </output>
                )}
                value={value}
                onChange={handleChange}
            />
            <Button
                className=""
                color="primary"
                onClick={() => {
                    console.log(hadithSources, value);
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 5000);
                }}
                isLoading={isLoading}
            >
                Generate
            </Button>
        </form>
    );
}

export default HadithSourceForm;
