import { HadithInfo } from "./consts";

export type CollectionKey = HadithInfo["key"];
export type CollectionName = HadithInfo["label"];

export type CollectionEntry = {
    key: CollectionKey;
    label: CollectionName;
};

export type HadithID = {
    collection: CollectionKey;
    hadithNumber: number;
};

export type HadithData = {
    narratedPhrase: string;
    text: string;
    collectionName: CollectionName;
    collectionKey: CollectionKey;
    hadithNumber: number;
    bookName: string;
};
