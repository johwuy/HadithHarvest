import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import hadithInfo from "../../lib/hadithInfo";
import { CollectionKey, CollectionEntry } from "../../lib/hadithType";
import { useFormStateStore } from "../../stores/formStateStore";
import CollectionChip from "./CollectionChip";

function HadithSourceSelection() {
    const { isLoading, hadithSources, setHadithSources } = useFormStateStore();

    function handleHadithChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // Emptry string will split into [""] with a length 1
        const newHadtithSouces =
            event.target.value != ""
                ? (event.target.value.split(",") as CollectionKey[])
                : [];
        if (newHadtithSouces.length > 0) {
            setHadithSources(newHadtithSouces);
        }
    }

    function handleRenderChip(
        selectedCollections: SelectedItems<CollectionEntry>,
    ): JSX.Element {
        return (
            <div className="flex flex-wrap gap-2">
                {selectedCollections.map(({ key, textValue }) => (
                    <CollectionChip
                        key={key}
                        id={key?.toString() as CollectionKey}
                    >
                        {textValue}
                    </CollectionChip>
                ))}
            </div>
        );
    }

    return (
        <Select
            isDisabled={isLoading}
            items={hadithInfo}
            label="Hadith Source"
            selectionMode="multiple"
            size="lg"
            isMultiline={true}
            classNames={{ label: "text-large" }}
            selectedKeys={hadithSources}
            onChange={handleHadithChange}
            renderValue={handleRenderChip}
        >
            {hadithInfo.map((hadith) => (
                <SelectItem key={hadith.key}>{hadith.label}</SelectItem>
            ))}
        </Select>
    );
}

export default HadithSourceSelection;
