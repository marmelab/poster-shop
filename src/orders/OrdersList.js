import {
    BooleanField,
    Datagrid,
    DateField,
    FunctionField,
    List,
    NumberField,
    ReferenceField,
    TextField,
} from "react-admin";
import { OrdersFilter } from "./OrdersFilter";

export const OrdersList = (props) => (
    <List filters={<OrdersFilter />} {...props}>
        <Datagrid rowClick="show">
            <TextField source="reference" />
            <DateField source="date" />
            <ReferenceField
                source="customer_id"
                reference="customers"
                link="show"
            >
                <FunctionField
                    label="Name"
                    render={(record) =>
                        `${record.first_name} ${record.last_name}`
                    }
                />
            </ReferenceField>
            <NumberField
                source="total_ex_taxes"
                options={{ style: "currency", currency: "USD" }}
            />
            <NumberField
                source="delivery_fees"
                options={{ style: "currency", currency: "USD" }}
            />
            <NumberField source="tax_rate" options={{ style: "percent" }} />
            <NumberField
                source="taxes"
                options={{ style: "currency", currency: "USD" }}
            />
            <NumberField
                source="total"
                options={{ style: "currency", currency: "USD" }}
            />
            <TextField source="status" />
            <BooleanField source="returned" />
        </Datagrid>
    </List>
);
