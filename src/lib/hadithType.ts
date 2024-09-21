import { HadithInfo } from "./hadithInfo";

export type CollectionKey = HadithInfo["key"];
export type CollectionName = HadithInfo["label"];

export type CollectionEntry = {
    key: CollectionKey;
    label: CollectionName;
};

export type HadithID = `${CollectionKey}-${number}`;

export type HadithData = {
    hadithID: HadithID;
    narratedPhrase: string;
    text: string;
    collectionName: CollectionName;
    hadithNumber: number;
    bookName: string;
};
