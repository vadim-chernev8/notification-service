import { Flex } from "@radix-ui/themes";

export default function CarouselLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" className="text-white bg-white min-h-screen">
      {children}
    </Flex>
  );
}