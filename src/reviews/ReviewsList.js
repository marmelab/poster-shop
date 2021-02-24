import {
    Datagrid,
    DateField,
    FunctionField,
    List,
    ReferenceField,
    TextField,
} from "react-admin";
import { RatingField } from "./RatingField";
import { ReviewsFilter } from "./ReviewsFilter";

export const ReviewsList = (props) => (
    <List filters={<ReviewsFilter />} {...props}>
        <Datagrid rowClick="show">
            <DateField source="date" />
            <TextField source="status" />
            <ReferenceField
                source="command_id"
                reference="commands"
                link="show"
            >
                <TextField source="reference" />
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
                <FunctionField
                    label="Name"
                    render={(record) =>
                        `${record.first_name} ${record.last_name}`
                    }
                />
            </ReferenceField>
            <RatingField source="rating" />
            <TextField source="comment" />
        </Datagrid>
    </List>
);
