import { useShallow } from "zustand/react/shallow";
import { useFormStateStore } from "../stores/formStateStore/formStateStore";
// import HadithCard from "./HadithCard/HadithCard";
import HadithCardSkeleton from "./HadithCard/HadithCardSkeleton";

function HadithContainer() {
    const { isLoading, hadithCount } = useFormStateStore(
        useShallow((state) => ({
            isLoading: state.isLoading,
            hadithCount: state.hadithCount,
        })),
    );

    return (
        <div className="flex w-full max-w-5xl flex-col space-y-8 px-6 py-4">
            {/* <HadithCard
                bookName="Revelation"
                collectionName="Sahih al Bukhari"
                hadithNumber={1}
                narratedPhrase="Narrated 'Umar bin Al-Khattab"
                text={`I heard Allah's Messenger (ﷺ) saying, "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for`}
                favorited={true}
            /> */}
            {isLoading &&
                Array.from({ length: hadithCount }, () => (
                    <HadithCardSkeleton />
                ))}
        </div>
    );
}
export default HadithContainer;
