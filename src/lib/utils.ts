import { SliderValue } from "@nextui-org/slider";
import hadithInfo from "./hadithInfo";
import { CollectionKey, CollectionName } from "./hadithType";

export function processNewValue(newValue: SliderValue): number | null {
    // SliderValue supports Sliders with upper and lower range
    const num = Array.isArray(newValue) ? newValue[0] : newValue;

    if (typeof num !== "number" || isNaN(num)) return null;

    const value = Math.max(1, Math.round(num));
    return value;
}

export function lableToKey(label: CollectionName): CollectionKey | undefined {
    const entry = hadithInfo.find((entry) => entry.label == label);
    if (entry) {
        return entry.key;
    }
    return undefined;
}
