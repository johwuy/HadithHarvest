import { Divider } from "@nextui-org/divider";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import { useFavoritedStore } from "../stores/favoritedStore";
import HadithCard from "./HadithCard/HadithCard";

type FavoritesModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
};

function FavoritesModal({ isOpen, onOpenChange }: FavoritesModalProps) {
    const favorited = useFavoritedStore((state) => state.favorited);

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="3xl"
            scrollBehavior="outside"
            backdrop="blur"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>Favorited Hadiths</ModalHeader>
                        <Divider />
                        <ModalBody>
                            {favorited.map((hadithData) => (
                                <HadithCard
                                    key={`${hadithData.collectionKey}-${hadithData.hadithNumber}`}
                                    collectionKey={hadithData.collectionKey}
                                    bookName={hadithData.bookName}
                                    hadithNumber={hadithData.hadithNumber}
                                    narratedPhrase={hadithData.narratedPhrase}
                                    text={hadithData.text}
                                />
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default FavoritesModal;
