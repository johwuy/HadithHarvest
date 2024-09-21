import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { useShallow } from "zustand/react/shallow";
import { COLLECTION_KEY_TO_NAME } from "../../lib/consts";
import { HadithData } from "../../lib/hadithType";
import { useFavoritedStore } from "../../stores/favoritedStore";
import InformationCircle from "../Icons/InformationCircie";
import StarIcon from "../Icons/StarIcon";

function HadithCard(props: HadithData) {
    const { narratedPhrase, text, hadithNumber, bookName, collectionKey } =
        props;

    const { toggleFavorite, favorited } = useFavoritedStore(
        useShallow((state) => ({
            toggleFavorite: state.toggleFavorite,
            favorited: state.favorited,
        })),
    );

    // Can't use the isFavorited  method of store, as if favorite updates,
    // the star doesn't udpate.
    const isFilled = favorited.some(
        (item) =>
            item.collectionKey === collectionKey &&
            item.hadithNumber === hadithNumber,
    );

    return (
        <Card className="p-8">
            <CardHeader className="flex justify-between p-2">
                <p className="italic">{narratedPhrase}: </p>
                <Button
                    isIconOnly
                    variant="light"
                    onClick={() => toggleFavorite(props)}
                >
                    <StarIcon filled={isFilled} />
                </Button>
            </CardHeader>
            <CardBody className="p-2">
                <p className="font-medium">{text}.</p>
            </CardBody>
            <CardFooter className="flex justify-end space-x-2 p-2">
                <p>
                    ({COLLECTION_KEY_TO_NAME[collectionKey]}, {hadithNumber})
                </p>
                <Tooltip
                    content={
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">
                                Additional Information
                            </div>
                            <div className="text-tiny">
                                Book Name: {bookName}
                            </div>
                        </div>
                    }
                >
                    <Button isIconOnly variant="light">
                        <InformationCircle />
                    </Button>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}

export default HadithCard;
