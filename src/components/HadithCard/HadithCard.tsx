import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { useShallow } from "zustand/react/shallow";
import { HadithData, Token } from "../../lib/hadithType";
import { getToken, labelToKey } from "../../lib/utils";
import { useFavoritedStore } from "../../stores/favoritedStore";
import InformationCircle from "../Icons/InformationCircie";
import StarIcon from "../Icons/StarIcon";

type HadithCardProps = HadithData;

function HadithCard({
    narratedPhrase,
    text,
    collectionName,
    hadithNumber,
    bookName,
}: HadithCardProps) {
    const { favorited, toggleFavorite } = useFavoritedStore(
        useShallow((state) => ({
            toggleFavorite: state.toggleFavorite,
            favorited: state.favorited,
        })),
    );

    const token: Token = getToken(labelToKey(collectionName), hadithNumber);
    const isFavorited = favorited.includes(token);

    return (
        <Card className="p-8">
            <CardHeader className="flex justify-between p-2">
                <p className="italic">{narratedPhrase}: </p>
                <Button
                    isIconOnly
                    variant="light"
                    onClick={() => toggleFavorite(token)}
                >
                    <StarIcon filled={isFavorited} />
                </Button>
            </CardHeader>
            <CardBody className="p-2">
                <p className="font-medium">{text}.</p>
            </CardBody>
            <CardFooter className="flex justify-end space-x-2 p-2">
                <p>
                    ({collectionName}, {hadithNumber})
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
