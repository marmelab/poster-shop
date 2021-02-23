import { Filter, SearchInput } from "react-admin";

export const ReviewsFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);
