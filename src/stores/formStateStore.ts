import { create } from "zustand";
import { CollectionKey } from "../lib/hadithType";

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
};

export const useFormStateStore = create<FormState>((set, get) => ({
    isLoading: false,
    hadithSources: INITIAL_SOURCES,
    hadithCount: STARTING_COUNT,
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
        console.log(get().hadithSources, get().hadithCount);
        get().toggleLoading();
    },
}));
