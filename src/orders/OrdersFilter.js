import { Filter, SearchInput, SelectInput } from "react-admin";

const statusChoices = [
    { id: "cancelled", name: "Cancelled" },
    { id: "delivered", name: "Delivered" },
    { id: "ordered", name: "Ordered" },
];

export const OrdersFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <SelectInput source="status" choices={statusChoices} alwaysOn />
    </Filter>
);
