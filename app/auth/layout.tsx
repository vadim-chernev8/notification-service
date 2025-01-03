import { Flex, Heading } from "@radix-ui/themes";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" className="text-white bg-background min-h-screen">
      {/* <Heading as="h1" className="w-full text-center py-8">SkyCity Casino - Back Office</Heading> */}
      <Flex direction="column" align="center" justify="center" className="my-auto">
        {children}
      </Flex>
    </Flex>
  );
}