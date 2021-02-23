import {
    BooleanField,
    Datagrid,
    DateField,
    EmailField,
    ImageField,
    List,
    NumberField,
    ShowButton,
    TextField,
} from "react-admin";
import { CustomersFilter } from "./CustomersFilter";
export const CustomerList = (props) => (
    <List filters={<CustomersFilter />} {...props}>
        <Datagrid rowClick="show">
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
