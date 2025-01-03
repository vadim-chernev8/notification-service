import { Flex, Box, Heading } from "@radix-ui/themes";
import NewPasswordForm from '../components/NewPasswordForm';

export default function NewPassword() {
  return (
    <Flex direction="column" justify="center" align="center" className="w-full max-w-[600px] py-8 bg-white rounded-md">
      <Heading as="h3" className="w-full text-center text-foreground pb-3">Enter New Password</Heading>
      <NewPasswordForm />
    </Flex>
  )
};