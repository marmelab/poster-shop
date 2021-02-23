import {
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    TextField,
} from "react-admin";
import { ReviewsFilter } from "./ReviewsFilter";

export const ReviewsList = (props) => (
    <List filters={<ReviewsFilter />} {...props}>
        <Datagrid rowClick="show">
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
        </Datagrid>
    </List>
);
