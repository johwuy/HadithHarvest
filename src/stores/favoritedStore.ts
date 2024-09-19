import { create } from "zustand";
import { HadithData, HadithID } from "../lib/hadithType";

type FavoritedStore = {
    favorited: HadithData[];
    isFavorited: (hadithID: HadithID) => boolean;
    addHadith: (hadithData: HadithData) => void;
    removeHadith: (removeHadithID: HadithID) => void;
    toggleFavorite: (hadithData: HadithData) => void;
};

export const useFavoritedStore = create<FavoritedStore>((set, get) => ({
    favorited: [],
    isFavorited: (hadithID: HadithID) =>
        get().favorited.some((item) => item.hadithID == hadithID),
    addHadith: async (hadithData) => {
        console.log(`Add to database: ${hadithData.hadithID}`);
        set((state) => ({ favorited: [...state.favorited, hadithData] }));
    },
    removeHadith: async (removeHadithID) => {
        console.log(`Remove to database: ${removeHadithID}`);
        set((state) => ({
            favorited: state.favorited.filter(
                (hadith) => hadith.hadithID != removeHadithID,
            ),
        }));
    },
    toggleFavorite: async (hadithData) => {
        if (get().isFavorited(hadithData.hadithID)) {
            get().removeHadith(hadithData.hadithID);
        } else {
            get().addHadith(hadithData);
        }
    },
}));
