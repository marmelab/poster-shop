import {
    BooleanField,
    DateField,
    EmailField,
    NumberField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const CustomersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="zipcode" />
            <TextField source="city" />
            <TextField source="stateAbbr" />
            <TextField source="birthday" />
            <DateField source="first_seen" />
            <DateField source="last_seen" />
            <BooleanField source="has_ordered" />
            <TextField source="latest_purchase" />
            <BooleanField source="has_newsletter" />
            <NumberField source="nb_commands" />
            <NumberField source="total_spent" />
            <TextField source="avatar" />
            <TextField source="groups" />
        </SimpleShowLayout>
    </Show>
);
