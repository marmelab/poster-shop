import {
    DateField,
    FunctionField,
    ImageField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";
import { RatingField } from "./RatingField";

export const ReviewsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
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
                <ImageField source="thumbnail" />
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
        </SimpleShowLayout>
    </Show>
);
