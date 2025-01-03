import { Flex, Heading, Dialog, Button } from "@radix-ui/themes";
import UsersTable from './components/UsersTable';
import UserForm from './components/UserForm';

export default function ManageUsers() {
  return (
    <Flex direction="column" className="flex-1">
        <Heading as="h3" className="px-8 w-full text-foreground bg-gray-200 py-[13px]">Users</Heading>
        <Heading as="h6" className="px-8 w-full text-foreground bg-white py-[13px] border border border-b-gray-300">Manage Users</Heading>
        <UsersTable />
        <Dialog.Root>
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
        </Dialog.Root>
    </Flex>
  )
};
