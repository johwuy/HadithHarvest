import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import StarIcon from "../Icons/StarIcon";
import { Tooltip } from "@nextui-org/tooltip";
import InformationCircle from "../Icons/InformationCirciel";
import { HadithData } from "../../lib/hadithType";

type HadithCardProps = HadithData & {
    favorited: boolean;
};

function HadithCard({
    narratedPhrase,
    text,
    collectionName,
    hadithNumber,
    bookName,
    favorited,
}: HadithCardProps) {
    return (
        <Card className="p-8">
            <CardHeader className="flex justify-between p-2">
                <p className="italic">{narratedPhrase}: </p>
                <Button isIconOnly variant="light">
                    <StarIcon filled={favorited} />
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
