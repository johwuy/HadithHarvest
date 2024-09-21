const hadithInfo = [
    { key: "bukhari", label: "Sahih al Bukhari" },
    { key: "muslim", label: "Sahih Muslim" },
    { key: "abudawud", label: "Sunan Abu Dawud" },
    { key: "tirmidhi", label: "Jami At Tirmidhi" },
    { key: "nasai", label: "Sunan an Nasai" },
    { key: "ibnmajah", label: "Sunan Ibn Majah" },
] as const;

export type HadithInfo = (typeof hadithInfo)[number];

export default hadithInfo;
