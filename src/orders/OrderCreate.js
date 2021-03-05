import * as React from "react";
import {
    AutocompleteInput,
    Create,
    ReferenceInput,
    required,
    SimpleForm,
} from "react-admin";
import { BasketForm } from "./BasketForm";

export const OrderCreate = (props) => {
    return (
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
                <BasketForm />
            </SimpleForm>
        </Create>
    );
};
