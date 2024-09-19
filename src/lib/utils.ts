import { SliderValue } from "@nextui-org/slider";
import hadithInfo from "./hadithInfo";
import { CollectionKey, CollectionName, Token } from "./hadithType";

export function processNewValue(newValue: SliderValue): number | null {
    // SliderValue supports Sliders with upper and lower range
    const num = Array.isArray(newValue) ? newValue[0] : newValue;

    if (typeof num !== "number" || isNaN(num)) return null;

    const value = Math.max(1, Math.round(num));
    return value;
}

export function labelToKey(label: CollectionName): CollectionKey {
    const entry = hadithInfo.find((entry) => entry.label === label);

    if (!entry) {
        throw new Error(`Label "${label}" not found in hadith collections.`);
    }

    return entry.key;
}

export function getToken(
    collectionKey: CollectionKey,
    hadithNumber: number,
): Token {
    return `${collectionKey}-${hadithNumber}`;
}
