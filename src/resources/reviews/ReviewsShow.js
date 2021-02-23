import {
    DateField,
    NumberField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const ReviewShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="date" />
            <TextField source="status" />
            <ReferenceField
                source="command_id"
                reference="commands"
                link="show"
            >
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField
                source="product_id"
                reference="products"
                link="show"
            >
                <TextField source="reference" />
            </ReferenceField>
            <ReferenceField
                source="customer_id"
                reference="customers"
                link="show"
            >
                <TextField source="id" />
            </ReferenceField>
            <NumberField source="rating" />
            <TextField source="comment" />
        </SimpleShowLayout>
    </Show>
);
