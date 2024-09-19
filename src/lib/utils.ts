import { SliderValue } from "@nextui-org/slider";

export function processNewValue(newValue: SliderValue): number | null {
    // SliderValue supports Sliders with upper and lower range
    const num = Array.isArray(newValue) ? newValue[0] : newValue;

    if (typeof num !== "number" || isNaN(num)) return null;

    const value = Math.max(1, Math.round(num));
    return value;
}
