import { Table } from "@radix-ui/themes";

const mockData = [
    {
        role: 'Super Admin',
        prevelegies: [ 'Manage Users', ' Roles', ' Game Categories', ' Add Games', ' Carousel', ' Menu', ' Static Pages', ' Image Library', ' Audit' ],
        isActive: true,
    },
    {
        role: 'Admin',
        prevelegies: [ 'Manage Users', ' Game Categories', ' Add Games', ' Carousel', ' Menu', ' Static Pages', ' Image Library' ],
        isActive: false,
    },
    {
        role: 'Content',
        prevelegies: [ 'Game Categories', ' Add Games', ' Carousel', ' Menu', ' Static Pages', ' Image Library' ],
        isActive: true,
    },
]

export default function RolesTable() {
    return (
        <Table.Root className="bg-white">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5">
                            Role
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4" width='400px'>
                        <span className="pl-5 border-l border-l-gray-300">
                            Prevelegies
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Active
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Delete
                        </span>
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {mockData.map((item) => (
                    <Table.Row>
                        <Table.Cell py="4">
                            <span className="pl-5 block">
                                {item.role}
                            </span>  
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.prevelegies.join(', ')}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                Delete
                            </span>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}