import * as React from "react";
import {
    ArrayInput,
    AutocompleteInput,
    Create,
    ReferenceInput,
    required,
    SimpleForm,
    SimpleFormIterator,
} from "react-admin";

export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                source="customer_id"
                reference="customers"
                validate={required()}
            >
                <AutocompleteInput
                    optionText={(record) =>
                        `${record.first_name} ${record.last_name}`
                    }
                    resettable={true}
                />
            </ReferenceInput>
            <ArrayInput source="basket">
                <SimpleFormIterator>
                    <ReferenceInput
                        label="Poster"
                        source="product_id"
                        reference="products"
                        resource="commands"
                        validate={required()}
                    >
                        <AutocompleteInput
                            optionText="reference"
                            resettable={true}
                        />
                    </ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

const test = {
    id: 0,
    reference: "CI6IM7",
    date: "2020-02-06T22:15:43.885Z",
    customer_id: 704,
    basket: [{ product_id: 109, quantity: 2 }],
    total_ex_taxes: 31.86,
    delivery_fees: 3.31,
    tax_rate: 0.12,
    taxes: 4.22,
    total: 39.39,
    status: "delivered",
    returned: false,
};
