import { Chip } from "@nextui-org/chip";
import { CollectionKey } from "../../lib/hadithType";
import { useFormStateStore } from "../../stores/formStateStore";
import { ReactNode } from "react";

type CollectionChipProps = {
    id: CollectionKey;
    children: ReactNode;
};

function CollectionChip({ id, children }: CollectionChipProps) {
    const { removeHadithSource } = useFormStateStore();

    return <Chip onClose={() => removeHadithSource(id)}>{children}</Chip>;
}

export default CollectionChip;
