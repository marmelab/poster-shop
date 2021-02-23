import {
    Datagrid,
    ImageField,
    List,
    NumberField,
    ShowButton,
    TextField,
} from "react-admin";
import { PosterslFilter } from "./PosterslFilter";

export const PostersList = (props) => (
    <List filters={<PosterslFilter />} {...props}>
        <Datagrid rowClick="show">
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <ImageField source="thumbnail" />
            <NumberField source="stock" />
            <NumberField source="sales" />
            <ShowButton />
        </Datagrid>
    </List>
);
