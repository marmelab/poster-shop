import { Filter, SearchInput } from "react-admin";

export const CustomersFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);
