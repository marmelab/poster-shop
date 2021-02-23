import {
    BooleanField,
    DateField,
    NumberField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const OrdersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);
