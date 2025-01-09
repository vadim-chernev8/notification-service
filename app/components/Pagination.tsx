'use client';
import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";

const Pagination = ({ totalPages = 10, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            if (onPageChange) {
                onPageChange(page);
            }
        }
    };

    return (
        <Flex justify='center' className="flex  space-x-2 p-4">
            <Button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <ArrowLeftIcon className="text-white w-6 h-5" />
            </Button>

            {Array.from({ length: totalPages }, (_, index) => (
                <Button
                    key={index}
                    className={`px-[9px] py-[5px] text-sm font-medium rounded-md text-black ${
                        currentPage === index + 1
                            ? "bg-[#E9E8E8]"
                            : "bg-white hover:bg-gray-300"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </Button>
            ))}

            <Button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <ArrowRightIcon className="text-white w-6 h-5" />
            </Button>
        </Flex>
    );
};

export default Pagination;