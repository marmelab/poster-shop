import {
    AutocompleteInput,
    DateInput,
    Filter,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
} from "react-admin";

const statusChoices = [
    { id: "cancelled", name: "Cancelled" },
    { id: "delivered", name: "Delivered" },
    { id: "ordered", name: "Ordered" },
];

export const OrdersFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <SelectInput source="status" choices={statusChoices} alwaysOn />
        <ReferenceInput source="customer_id" reference="customers">
            <AutocompleteInput
                optionText={(record) =>
                    `${record.first_name} ${record.last_name}`
                }
                resettable={true}
            />
        </ReferenceInput>
        <DateInput label="Since" source="date_gte" />
        <NumberInput label="Min amount" source="total_gte" />
    </Filter>
);
