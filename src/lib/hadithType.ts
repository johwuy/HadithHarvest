export type CollectionKey =
    | "bukhari"
    | "muslim"
    | "abudawud"
    | "tirmidhi"
    | "nasai"
    | "ibnmajah";

export type CollectionName =
    | "Sahih al Bukhari"
    | "Sahih Muslim"
    | "Sunan Abu Dawud"
    | "Jami At Tirmidhi"
    | "Sunan an Nasai"
    | "Sunan Ibn Majah";

export type CollectionEntry = {
    key: CollectionKey;
    label: CollectionName;
};

export type HadithData = {
    narratedPhrase: string;
    text: string;
    collectionName: CollectionName;
    hadithNumber: number;
    bookName: string;
};
