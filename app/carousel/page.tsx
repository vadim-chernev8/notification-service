'use client';
import {Button, Flex, Heading} from "@radix-ui/themes";
import CarouselTable from "./components/CarouselTable";
import {useState} from "react";
import Pagination from "./components/Pagination";
import CarouselForm from "./components/CarouselForm";

export default function Carousel() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Flex direction="column" className="">
            <Heading as="h3" className="px-8 w-full text-foreground bg-gray-200 py-[13px]">Carousel</Heading>
            <Flex  style={{justifyContent: 'space-between'}} className="flex justify-between bg-white border border-b-gray-300 py-3 px-8">
                <Heading as="h6" className="text-foreground">Manage Carousel Promotions</Heading>
                <Flex className="flex gap-2">
                    <Button style={{background:'#E9E8E8', color:'#7F7F7F'}} className="text-black px-4 py-2 rounded-md hover:bg-gray-600">Edit Existing</Button>
                    <Button style={{background:'#707070'}} className="text-white px-4 py-2 rounded-md hover:bg-gray-600">Add New User</Button>
                </Flex>
            </Flex>
            <CarouselTable/>
            <div className="pb-2">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <Flex  style={{justifyContent: 'space-between'}} className="flex justify-between py-3 px-8 ">
                <Heading as="h6" className="text-foreground">Add New/Edit Existing</Heading>
                <Flex className="flex gap-2">
                    <Button style={{background:'#E9E8E8', color:'#7F7F7F'}} className="text-black px-4 py-2 rounded-md hover:bg-gray-600">Delete</Button>
                    <Button style={{background:'#707070'}} className="text-white px-4 py-2 rounded-md hover:bg-gray-600">Save</Button>
                </Flex>
            </Flex>

            <CarouselForm/>

        </Flex>
    );
}
  