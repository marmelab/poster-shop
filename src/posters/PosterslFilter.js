import { Filter, SearchInput } from "react-admin";

export const PosterslFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);
