import {
    BooleanField,
    DateField,
    FunctionField,
    NumberField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const OrdersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);
