import { Table } from "@radix-ui/themes";

const mockData = [
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
    {
        name: 'Super Admin',
        emailAddress: 'asda@gr.co',
        role: 'Admin',
        isActive: true,
    },
]

export default function UsersTable() {
    return (
        <Table.Root className="bg-white">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5">
                            Name
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Email Address
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Role
                        </span>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell py="4">
                        <span className="pl-5 border-l border-l-gray-300">
                            Active
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
                                {item.emailAddress}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                {item.role}
                            </span>
                        </Table.Cell>
                        <Table.Cell py="4">
                            <span className="pl-5 border-l border-l-gray-300 block">
                                
                            </span>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}