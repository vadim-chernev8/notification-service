import { Flex, Heading } from "@radix-ui/themes";
import ForgotPasswordForm from '../components/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <Flex direction="column" justify="center" align="center" className="w-full max-w-[600px] py-8 bg-white rounded-md">
      <Heading as="h3" className="w-full text-center text-foreground pb-3">Forgot Password</Heading>
      <ForgotPasswordForm />
    </Flex>
  )
};