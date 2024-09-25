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
            // Make post request to database.
            const hadithPost = {
                collectionKey: hadithData.collectionKey,
                hadithNumber: hadithData.hadithNumber,
            };
            console.log(`Add to database: ${JSON.stringify(hadithPost)}`);
            set((state) => ({
                favorited: [...state.favorited, hadithData],
            }));
        }
    },
    removeHadith: (collection, hadithNumber) => {
        if (get().isFavorited(collection, hadithNumber)) {
            const hadithPost = {
                collectionKey: collection,
                hadithNumber: hadithNumber,
            };
            console.log(`Add to database: ${JSON.stringify(hadithPost)}`);
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
