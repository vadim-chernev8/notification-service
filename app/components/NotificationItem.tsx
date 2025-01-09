import { Flex, Button, Box, Card, Text } from "@radix-ui/themes";
import { format } from "date-fns";
import { TrashIcon } from "@radix-ui/react-icons";

type NotificationItemType = {
    title: string;
    content: string;
    id: string;
    created: string;
    deleteNotification: (id: string) => Promise<void>;
};

export default function NotificationsList ({
    title = '',
    content = '',
    id = '',
    created = '',
    deleteNotification,
}: NotificationItemType) {
    return (
        <Card>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {title}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        {content}
                    </Text>
                </Box>
                <Flex ml="auto" direction="column" gap="2">
                    <Text ml="auto" size="1" color="gray">{format(new Date(created), "MM:dd:mm")}</Text>
                    <Button size="1" color="pink" variant="outline" onClick={() => deleteNotification(id)}>
                        <Text>delete</Text>
                        <TrashIcon />
                    </Button>
                </Flex>
            </Flex>
        </Card>
    )
};
