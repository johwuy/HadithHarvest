import { create } from "zustand";
import { CollectionKey, HadithData } from "../lib/hadithType";

type FavoritedStore = {
    favorited: HadithData[];
    isFavorited: (collection: CollectionKey, hadithNumber: number) => boolean;
    addHadith: (hadithData: HadithData) => void;
    removeHadith: (collection: CollectionKey, hadithNumber: number) => void;
    toggleFavorite: (hadithData: HadithData) => void;
};

export const useFavoritedStore = create<FavoritedStore>((set, get) => ({
    favorited: [],
    isFavorited: (collection, hadithNumber) =>
        get().favorited.some(
            (item) =>
                item.collectionKey === collection &&
                item.hadithNumber === hadithNumber,
        ),
    addHadith: (hadithData) => {
        if (
            !get().isFavorited(
                hadithData.collectionKey,
                hadithData.hadithNumber,
            )
        ) {
            console.log(
                `Add to database: ${hadithData.collectionKey}-${hadithData.hadithNumber}`,
            );
            set((state) => ({
                favorited: [...state.favorited, hadithData],
            }));
        }
    },
    removeHadith: (collection, hadithNumber) => {
        if (get().isFavorited(collection, hadithNumber)) {
            console.log(`Remove from database: ${collection}-${hadithNumber}`);
            set((state) => ({
                favorited: state.favorited.filter(
                    (hadith) =>
                        hadith.collectionKey !== collection ||
                        hadith.hadithNumber !== hadithNumber,
                ),
            }));
        }
    },
    toggleFavorite: (hadithData) => {
        if (
            get().isFavorited(hadithData.collectionKey, hadithData.hadithNumber)
        ) {
            get().removeHadith(
                hadithData.collectionKey,
                hadithData.hadithNumber,
            );
        } else {
            get().addHadith(hadithData);
        }
    },
}));
