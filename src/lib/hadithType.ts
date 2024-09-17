export type CollectionKey =
    | "bukhari"
    | "muslim"
    | "abudawud"
    | "tirmidhi"
    | "nasai"
    | "ibnmajah";

export type CollectionEntry = {
    key: CollectionKey;
    label: string;
};

export type HadithData = {
    narratedPhrase: string;
    text: string;
    collectionName: string;
    hadithNumber: number;
    bookName: string;
};
