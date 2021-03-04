import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import { FilterList, FilterListItem } from "react-admin";
export const HasOrderedFilter = () => (
    <FilterList label="Has ordered" icon={<MonetizationOnIcon />}>
        <FilterListItem
            label="True"
            value={{
                nb_commands_gte: 1,
                nb_commands_lte: undefined,
            }}
        />
        <FilterListItem
            label="False"
            value={{
                nb_commands_gte: undefined,
                nb_commands_lte: 0,
            }}
        />
    </FilterList>
);
