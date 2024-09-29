import { SliderValue } from "@nextui-org/slider";
import { CollectionKey, HadithData } from "./hadithType";

export function processNewValue(newValue: SliderValue): number | null {
    // SliderValue supports Sliders with upper and lower range
    const num = Array.isArray(newValue) ? newValue[0] : newValue;

    if (typeof num !== "number" || isNaN(num)) return null;

    const value = Math.max(1, Math.round(num));
    return value;
}

function selectRandomFromArray<Type>(array: Type[]): Type {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateUrls(hadithSources: CollectionKey[], hadithCount: number) {
    const requestURLs: string[] = [];
    for (let i = 0; i < hadithCount; i++) {
        const randomSource = selectRandomFromArray(hadithSources);
        requestURLs.push(`http://localhost:3000/random/${randomSource}`);
    }
    return requestURLs;
}
export async function generateHadiths(
    hadithSources: CollectionKey[],
    hadithCount: number,
) {
    try {
        const urls = generateUrls(hadithSources, hadithCount);

        // Fetch all URLs concurrently
        const responses = await Promise.all(urls.map((url) => fetch(url)));

        const hadithDataArray = await Promise.all(
            responses.map(async (response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }

                // Parse the JSON and return the data
                const data: HadithData = await response.json();
                return data;
            }),
        );

        // Return the resulting hadith data
        return hadithDataArray;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
        }
    }
}
