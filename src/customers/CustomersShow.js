import {
    BooleanField,
    DateField,
    EmailField,
    FunctionField,
    NumberField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";

export const CustomersShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <FunctionField
                label="name"
                render={(record) => (
                    <span>
                        {record.first_name} {record.last_name}
                    </span>
                )}
            />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="zipcode" />
            <TextField source="city" />
            <TextField source="stateAbbr" />
            <DateField source="birthday" />
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
