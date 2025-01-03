import { Flex, Heading, Dialog, Button } from "@radix-ui/themes";
import GamesTable from './components/GamesTable';
import GamesForm from './components/GamesForm';

export default function Games() {
  return (
    <Flex direction="column" className="flex-1">
        <Heading as="h3" className="px-8 w-full text-foreground bg-gray-200 py-[13px]">Games</Heading>
        <Heading as="h6" className="px-8 w-full text-foreground bg-white py-[13px] border border border-b-gray-300">Manage Games</Heading>
        <Flex>
            <Flex width="50%" className="min-h-screen">
                <GamesTable />
            </Flex>
            <Flex width="50%" px="3" py="2" direction="column" className="bg-white border border-l-gray-300">
                <Flex>
                    <Heading as="h6" className="text-foreground">Add Game</Heading>
                    <Flex className="ml-auto" gap="2">
                        <Button>Delete</Button>
                        <Button>Save draft</Button>
                        <Button>Publish</Button>
                    </Flex>
                </Flex>
                <GamesForm />
            </Flex>
        </Flex>
        {/* <Dialog.Root>
            <Dialog.Trigger>
                <Flex className="mt-auto py-4 bg-white sticky bottom-0" justify="center">
                    <Flex className="w-[20%]">
                        <Button size="2" style={{ flex: 1 }} color="gray">Add new User</Button>
                    </Flex>
                </Flex>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px" align="center">
                <Dialog.Title>Add new User</Dialog.Title>
                <UserForm />
            </Dialog.Content>
        </Dialog.Root> */}
    </Flex>
  )
};
