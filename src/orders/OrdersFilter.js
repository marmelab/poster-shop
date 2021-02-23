import { Filter, SearchInput } from "react-admin";

export const OrdersFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);
