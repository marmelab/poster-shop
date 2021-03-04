import { Card, CardContent } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import * as React from "react";
import { FilterList, FilterListItem } from "react-admin";

const HasOrderedFilter = () => (
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

export const CustomersFilterSidebar = () => (
    <Card style={{ order: -1 }}>
        <CardContent>
            <HasOrderedFilter />
        </CardContent>
    </Card>
);
