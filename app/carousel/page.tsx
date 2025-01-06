import { Button, Flex, Heading } from "@radix-ui/themes";
import CarouselTable from "./components/CarouselTable";
import Pagination from "./components/Pagination";
import CarouselForm from "./components/CarouselForm";

export default function Carousel() {

    return (
        <Flex direction="column" className="">
            <Heading as="h3" className="px-8 w-full text-foreground bg-gray-200 py-[13px]">Carousel</Heading>
            <Flex justify="between" className="f bg-white border border-b-gray-300 py-3 px-8">
                <Heading as="h6" className="text-foreground">Manage Carousel Promotions</Heading>
                <Flex className="flex gap-2">
                    <Button className=" text-black px-4 py-2 rounded-md hover:bg-gray-600">Edit Existing</Button>
                    <Button className=" bg-background text-white px-4 py-2 rounded-md hover:bg-gray-600">Add New User</Button>
                </Flex>
            </Flex>
            <CarouselTable/>
            <Flex justify='center' className="pb-2">
                <Pagination />
            </Flex>
            <Flex justify='between'  className=" py-3 px-8 ">
                <Heading as="h6" className="text-foreground">Add New/Edit Existing</Heading>
                <Flex className="flex gap-2">
                    <Button className="text-black px-4 py-2 rounded-md hover:bg-gray-600">Delete</Button>
                    <Button className="bg-background text-white px-4 py-2 rounded-md hover:bg-gray-600">Save</Button>
                </Flex>
            </Flex>
            <CarouselForm/>

        </Flex>
    );
}
  