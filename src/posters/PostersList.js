import {
    Datagrid,
    ImageField,
    List,
    NumberField,
    TextField,
} from "react-admin";
import { PosterslFilter } from "./PosterslFilter";

export const PostersList = (props) => (
    <List filters={<PosterslFilter />} {...props}>
        <Datagrid rowClick="show">
            <ImageField source="thumbnail" />
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField
                source="price"
                options={{ style: "currency", currency: "USD" }}
            />
            <NumberField source="stock" />
            <NumberField source="sales" />
        </Datagrid>
    </List>
);
