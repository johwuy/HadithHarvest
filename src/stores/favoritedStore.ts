//store
// set of favoite object, {CollectionKey}-{Hadith Number}
// use set because look up is faster and there can be no duplicate faovites\
// // can't use set as it doesn't support reeactivity
// toggleFavorite given collection name and hadith number
// method for fetch favorites to database

import { create } from "zustand";
import { Token } from "../lib/hadithType";

// toggle favorite in card
// Favorited or not will be decidied within the componenet as the favorite can be toggled on and off.
// decided outside won't trigger re-render.
// I won't use a state because the favorited can be changed outside the component.
// Single source of truth.
//

type FavoritedStore = {
    favorited: Token[];
    toggleFavorite: (token: Token) => void;
};

export const useFavoritedStore = create<FavoritedStore>((set, get) => ({
    favorited: [],
    toggleFavorite: (token) => {
        if (get().favorited.includes(token)) {
            set((state) => ({
                favorited: state.favorited.filter(
                    (favorited) => favorited != token,
                ),
            }));
        } else {
            set((state) => ({
                favorited: [...state.favorited, token],
            }));
        }
    },
}));
