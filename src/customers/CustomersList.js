import {
    BooleanField,
    Datagrid,
    DateField,
    FunctionField,
    List,
    NumberField,
    TextField,
} from "react-admin";
import { CustomersFilter } from "./CustomersFilter";
export const CustomersList = (props) => (
    <List filters={<CustomersFilter />} {...props}>
        <Datagrid rowClick="show">
            <FunctionField
                label="name"
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
            <TextField source="latest_purchase" />
            <BooleanField source="has_newsletter" />
        </Datagrid>
    </List>
);
