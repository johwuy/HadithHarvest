import { create } from "zustand";
import { HadithKey } from "../../lib/hadithType";

const INITIAL_SOURCES: HadithKey[] = [
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
    hadithSources: HadithKey[];
    hadithCount: number;
    setHadithSources: (newSources: HadithKey[]) => void;
    removeHadithSource: (source: HadithKey) => void;
    setHadithCount: (newCount: number) => void;
    toggleLoading: () => void;
    generateHadith: () => void;
};

export const useFormStateStore = create<FormState>((set, get) => ({
    isLoading: false,
    hadithSources: INITIAL_SOURCES,
    hadithCount: STARTING_COUNT,
    toggleLoading: () => set((prev) => ({ isLoading: !prev.isLoading })),
    setHadithSources: (newSources: HadithKey[]) =>
        set(() => ({ hadithSources: newSources })),
    removeHadithSource: (toRemoveSource: HadithKey) =>
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
