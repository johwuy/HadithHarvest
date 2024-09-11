export type HadithKey =
    | "bukhari"
    | "muslim"
    | "abudawud"
    | "tirmidhi"
    | "nasai"
    | "ibnmajah";

export type HadithEntry = {
    key: HadithKey;
    label: string;
};
