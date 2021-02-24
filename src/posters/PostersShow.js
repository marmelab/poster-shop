import {
    ImageField,
    NumberField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";
export const PostersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField
                source="price"
                options={{ style: "currency", currency: "USD" }}
            />
            <ImageField source="thumbnail" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" />
        </SimpleShowLayout>
    </Show>
);
