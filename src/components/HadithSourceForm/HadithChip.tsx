import { Chip } from "@nextui-org/chip";
import { HadithKey } from "../../lib/hadithType";
import { useFormStateStore } from "../../stores/formStateStore/formStateStore";
import { ReactNode } from "react";

type HadithChipProps = {
    id: HadithKey;
    children: ReactNode;
};

function HadithChip({ id, children }: HadithChipProps) {
    const { removeHadithSource } = useFormStateStore();

    return <Chip onClose={() => removeHadithSource(id)}>{children}</Chip>;
}

export default HadithChip;
