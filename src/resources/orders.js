import {
    BooleanField,
    Datagrid,
    DateField,
    Filter,
    List,
    NumberField,
    ReferenceField,
    Show,
    ShowButton,
    SimpleShowLayout,
    TextField,
    TextInput,
} from "react-admin";

const OrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);
export const OrderList = (props) => (
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
export const OrderShow = (props) => (
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
