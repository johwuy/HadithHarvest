import { create } from "zustand";
import { CollectionKey, HadithData } from "../lib/hadithType";

const INITIAL_SOURCES: CollectionKey[] = [
    "bukhari",
    "muslim",
    "abudawud",
    "tirmidhi",
    "nasai",
    "ibnmajah",
];

export const STARTING_COUNT = 1;

type FormState = {
    isLoading: boolean;
    hadithSources: CollectionKey[];
    hadithCount: number;
    setHadithSources: (newSources: CollectionKey[]) => void;
    removeHadithSource: (source: CollectionKey) => void;
    setHadithCount: (newCount: number) => void;
    toggleLoading: () => void;
    generateHadith: () => void;
    generatedHadiths: HadithData[];
};

export const useFormStateStore = create<FormState>((set, get) => ({
    isLoading: false,
    hadithSources: INITIAL_SOURCES,
    hadithCount: STARTING_COUNT,
    generatedHadiths: [],
    toggleLoading: () => set((prev) => ({ isLoading: !prev.isLoading })),
    setHadithSources: (newSources: CollectionKey[]) =>
        set(() => ({ hadithSources: newSources })),
    removeHadithSource: (toRemoveSource: CollectionKey) =>
        set((state) =>
            state.hadithSources.length > 1
                ? {
                      hadithSources: state.hadithSources.filter(
                          (hadith) => hadith != toRemoveSource,
                      ),
                  }
                : { hadithSources: state.hadithSources },
        ),
    setHadithCount: (newCount: number) =>
        set(() => ({ hadithCount: newCount >= 1 ? Math.round(newCount) : 1 })),
    generateHadith: async () => {
        get().toggleLoading();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const generatePost = {
            hadithSources: get().hadithSources,
            hadithCount: get().hadithCount,
        };
        console.log(JSON.stringify(generatePost));
        get().toggleLoading();
    },
}));
