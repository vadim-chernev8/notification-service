import { Table } from "@radix-ui/themes";

const mockData = [
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
    {
        name: 'New Gold',
        type: 'Slot',
        published: true,
    },
]

export default function GamesTable() {
    return (
        <Table.Root className="bg-white w-full">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5">
                            Name
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Type
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Published
                        </span>
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {mockData.map((item) => (
                    <Table.Row>
                        <Table.Cell py="4">
                            <span className="pl-5 block">
                                {item.name}
                            </span>  
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.type}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.published}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}