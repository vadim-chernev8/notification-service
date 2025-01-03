import { Flex } from "@radix-ui/themes";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" className="text-white bg-background min-h-screen">
      {children}
    </Flex>
  );
}
