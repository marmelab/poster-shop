import {
    BooleanField,
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    ShowButton,
    TextField,
} from "react-admin";
import { OrdersFilter } from "./OrdersFilter";

export const OrdersList = (props) => (
    <List filters={<OrdersFilter />} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="reference" />
            <DateField source="date" />
            <ReferenceField
                source="customer_id"
                reference="customers"
                link="show"
            >
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="total_ex_taxes" />
            <NumberField source="delivery_fees" />
            <NumberField source="tax_rate" />
            <NumberField source="taxes" />
            <NumberField source="total" />
            <TextField source="status" />
            <BooleanField source="returned" />
            <ShowButton />
        </Datagrid>
    </List>
);
