import React from "react";
import { ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center space-x-2 p-4 bg-white">
            <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ArrowLeftIcon className="text-white w-6 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`px-[9px] py-[5px] text-sm font-medium rounded-md text-black ${
                        currentPage === index + 1
                            ? "bg-[#E9E8E8]"
                            : "bg-white hover:bg-gray-300"
                    }`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                }`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ArrowRightIcon className="text-white w-6 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
