'use client';

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { HomeIcon, ChevronUpIcon, ChevronDownIcon, TransparencyGridIcon } from "@radix-ui/react-icons";

const MenuItem = ({
    name, 
    icon: Icon,
    children,
    urlLink
}) => {
    const router = useRouter();
    const params = useSearchParams();
    const setUrlParams = () => {
        router.push(`?category=${name}`);
    };

    const currentCategory = params.get('category');
    return (
        <li>
            <div className="flex items-center py-4 pl-3 border-b border-gray-300">
                <span className="flex items-center gap-2">
                    {Icon ? <Icon /> : null}
                    {name && !urlLink ? name : null}
                    {urlLink ? <Link href={urlLink}>
                            {name}
                        </Link> : null}
                </span>
                {children ? (
                    <span className="ml-auto px-2" onClick={setUrlParams}>
                        {currentCategory === name ?  <ChevronDownIcon /> : <ChevronUpIcon />}
                    </span>
                ): null}
                
            </div>
            {children && currentCategory === name ? children : null}
        </li>
    )
}

const NavigationMenu = () => {
	return (
        <ul>
            <MenuItem urlLink={'/'} name="Home" icon={HomeIcon} />
            <MenuItem name="Users">
                <ul>
                    <li className="pl-8 py-4 bg-gray-300">
                        <Link href="/users">
                            Manage Users
                        </Link>
                    </li>
                    <li className="pl-8 py-4 bg-gray-300">
                        <Link href="/users/roles">
                            Roles
                        </Link>
                    </li>
                </ul>
            </MenuItem>
            <MenuItem name="Games">
                <ul>
                    <li className="pl-8 py-4 bg-gray-300">
                        <Link href="/users">
                           Categories
                        </Link>
                    </li>
                    <li className="pl-8 py-4 bg-gray-300">
                        <Link href="/games">
                            Games
                        </Link>
                    </li>
                </ul>
            </MenuItem>
            <MenuItem urlLink={'/carousel'} name="Carousel" icon={TransparencyGridIcon} />

        </ul>
	);
};

export default NavigationMenu;
