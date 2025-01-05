import { Table } from "@radix-ui/themes";
import { CheckIcon, Cross2Icon} from "@radix-ui/react-icons";
import {getPathFromUrl} from "../../../utils/helpers/index";
const mockData = [
    {
        promoName: '10 Free Spins',
        from: '23/12/2023,00:23:23',
        to: '23/12/2023,00:23:23',
        imageUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
        cta:'Claim Here',
        url:'https://www.radix-ui.com/themes/docs/overview/getting-started',
        order:1,
        status:'Active'
    },
    {
        promoName: '10 Free Spins',
        from: '23/12/2023,00:23:23',
        to: '23/12/2023,00:23:23',
        imageUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
        cta:'Claim Here',
        url:'https://www.radix-ui.com/themes/docs/overview/getting-started',
        order:2,
        status:'Inactive'
    },
    {
        promoName: '10 Free Spins',
        from: '23/12/2023,00:23:23',
        to: '23/12/2023,00:23:23',
        imageUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
        cta:'Claim Here',
        url:'https://www.radix-ui.com/themes/docs/overview/getting-started',
        order:3,
        status:'Active'
    },
    {
        promoName: '10 Free Spins',
        from: '23/12/2023,00:23:23',
        to: '23/12/2023,00:23:23',
        imageUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
        cta:'Claim Here',
        url:'https://www.radix-ui.com/themes/docs/overview/getting-started',
        order:4,
        status:'Active'
    },
    {
        promoName: '10 Free Spins',
        from: '23/12/2023,00:23:23',
        to: '23/12/2023,00:23:23',
        imageUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
        cta:'Claim Here',
        url:'https://www.radix-ui.com/themes/docs/overview/getting-started',
        order:5,
        status:'Active'
    },


]

export default function CarouselTable() {

    return (
        <Table.Root className="bg-white">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5">
                            Promo Name
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            From
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            To
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Image URL
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            CTA
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            URL
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Order
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Status
                        </span>
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {mockData.map((item, index) => (
                    <Table.Row key={index}>
                        <Table.Cell py="4">
                            <span className="pl-5 block">
                                {item.promoName}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.from}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.to}
                            </span>
                        </Table.Cell><Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {getPathFromUrl(item.imageUrl)}
                            </span>
                        </Table.Cell><Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.cta}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {getPathFromUrl(item.url)}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.order}
                            </span>
                        </Table.Cell>
                    
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.status.toLowerCase() === 'active' ?<CheckIcon className="text-green-500 w-5 h-5" />
                                    : <Cross2Icon className="text-red-500 w-5 h-5"/>}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}