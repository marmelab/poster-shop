import {
    BooleanField,
    Datagrid,
    DateField,
    EmailField,
    Filter,
    ImageField,
    List,
    NumberField,
    Show,
    ShowButton,
    SimpleShowLayout,
    TextField,
    TextInput,
} from "react-admin";

const CustomersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CustomerList = (props) => (
    <List filters={<CustomersFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="first_name" />
            <TextField source="last_name" />
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
            <ImageField source="avatar" />
            <TextField source="groups" />
            <ShowButton />
        </Datagrid>
    </List>
);
export const CustomerShow = (props) => (
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
