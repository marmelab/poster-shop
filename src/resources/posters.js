import {
    Datagrid,
    Filter,
    ImageField,
    List,
    NumberField,
    SearchInput,
    Show,
    ShowButton,
    SimpleShowLayout,
    TextField,
} from "react-admin";
const PosterslFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);
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

export const PosterShow = (props) => (
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
