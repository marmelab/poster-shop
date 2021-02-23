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
            <TextField source="id" />
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <ImageField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" />
        </SimpleShowLayout>
    </Show>
);
