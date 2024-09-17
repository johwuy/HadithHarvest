import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import StarIcon from "../Icons/StarIcon";

function HadithCardSkeleton() {
    return (
        <Card className="p-8">
            <CardHeader className="flex justify-between p-2">
                <Skeleton className="rounded-lg">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <Button isIconOnly variant="light">
                        <StarIcon filled={false} />
                    </Button>
                </Skeleton>
            </CardHeader>
            <CardBody className="p-2">
                <Skeleton className="rounded-lg">
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Dictumst magnis hac iaculis dis risus laoreet donec
                        morbi. Porta tempus nostra auctor lobortis dignissim
                        malesuada justo. Eleifend amet ut condimentum
                        ullamcorper, aliquet et. Tincidunt ante neque duis odio
                        senectus. Platea tristique ridiculus vel facilisi in
                        rhoncus. Scelerisque accumsan mus ornare condimentum
                        imperdiet inceptos nulla. Tincidunt cubilia vel pharetra
                        non litora nibh.
                    </p>
                </Skeleton>
            </CardBody>
            <CardFooter className="flex flex-row-reverse p-2">
                <Skeleton className="rounded-lg">
                    <p>Lorem ipsum odor amet, consectetuer.</p>
                </Skeleton>
            </CardFooter>
        </Card>
    );
}

export default HadithCardSkeleton;
