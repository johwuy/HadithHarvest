import { CollectionKey, CollectionName } from "./hadithType";

export const HADITH_INFO = [
    { key: "bukhari", label: "Sahih al Bukhari" },
    { key: "muslim", label: "Sahih Muslim" },
    { key: "abudawud", label: "Sunan Abu Dawud" },
    { key: "tirmidhi", label: "Jami At Tirmidhi" },
    { key: "nasai", label: "Sunan an Nasai" },
    { key: "ibnmajah", label: "Sunan Ibn Majah" },
] as const;

export type HadithInfo = (typeof HADITH_INFO)[number];

export const COLLECTION_KEY_TO_NAME: Record<CollectionKey, CollectionName> =
    HADITH_INFO.reduce(
        (acc, { key, label }) => {
            acc[key] = label;
            return acc;
        },
        {} as Record<CollectionKey, CollectionName>,
    );
