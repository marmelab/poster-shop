import {
    Datagrid,
    DateField,
    Filter,
    List,
    NumberField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
    TextInput,
} from "react-admin";

const ReviewsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);
export const ReviewList = (props) => (
    <List filters={<ReviewsFilter />} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <DateField source="date" />
            <TextField source="status" />
            <ReferenceField source="command_id" reference="orders">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="product_id" reference="posters">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="rating" />
            <TextField source="comment" />
        </Datagrid>
    </List>
);
export const ReviewShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="date" />
            <TextField source="status" />
            <ReferenceField source="command_id" reference="orders">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="product_id" reference="posters">
                <TextField source="reference" />
            </ReferenceField>
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="rating" />
            <TextField source="comment" />
        </SimpleShowLayout>
    </Show>
);
