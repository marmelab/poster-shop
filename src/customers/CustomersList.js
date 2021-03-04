import {
    BooleanField,
    Datagrid,
    DateField,
    FunctionField,
    List,
    NumberField,
} from "react-admin";
import { CustomersFilterSidebar } from "./CustomersFiltersSidebar";
export const CustomersList = (props) => (
    <List aside={<CustomersFilterSidebar />} {...props}>
        <Datagrid rowClick="show">
            <FunctionField
                label="name"
                sortBy="last_name"
                render={(record) => (
                    <span>
                        {record.first_name} {record.last_name}
                    </span>
                )}
            />
            <DateField source="last_seen" />
            <NumberField source="nb_commands" />
            <NumberField
                source="total_spent"
                options={{ style: "currency", currency: "USD" }}
            />
            <DateField source="latest_purchase" />
            <BooleanField source="has_newsletter" />
        </Datagrid>
    </List>
);
