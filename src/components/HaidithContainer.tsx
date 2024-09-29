import { useShallow } from "zustand/react/shallow";
import { useFormStateStore } from "../stores/formStateStore";
import HadithCard from "./HadithCard/HadithCard";
import HadithCardSkeleton from "./HadithCard/HadithCardSkeleton";

function HadithContainer() {
    const { isLoading, hadithCount, generatedHadiths } = useFormStateStore(
        useShallow((state) => ({
            isLoading: state.isLoading,
            hadithCount: state.hadithCount,
            generatedHadiths: state.generatedHadiths,
        })),
    );

    return (
        <div className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            {generatedHadiths.map((hadith) => (
                <HadithCard
                    key={`${hadith.collectionKey}-${hadith.hadithNumber}`}
                    bookName={hadith.bookName}
                    collectionKey={hadith.collectionKey}
                    hadithNumber={hadith.hadithNumber}
                    narratedPhrase={hadith.narratedPhrase}
                    text={hadith.text}
                />
            ))}
            {isLoading &&
                Array.from({ length: hadithCount }, (_, index) => (
                    <HadithCardSkeleton key={index} />
                ))}
        </div>
    );
}
export default HadithContainer;
