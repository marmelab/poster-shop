import * as React from "react";
import {
    ArrayInput,
    AutocompleteInput,
    FormDataConsumer,
    NumberField,
    NumberInput,
    ReferenceField,
    ReferenceFieldController,
    ReferenceInput,
    required,
    SimpleFormIterator,
} from "react-admin";
export const BasketForm = () => {
    return (
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
                <NumberInput
                    label="Quantity"
                    source="quantity"
                    validate={required()}
                />
                <FormDataConsumer>
                    {({ scopedFormData, getSource }) => {
                        return (
                            <span source={getSource("fakeToAvoidWarning")}>
                                <ReferenceField
                                    source="product_id"
                                    reference="products"
                                    resource="commands"
                                    record={scopedFormData}
                                    link={false}
                                    basePath="/commands"
                                    label="Price"
                                >
                                    <NumberField
                                        source="price"
                                        options={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </ReferenceField>
                                <ReferenceFieldController
                                    source="product_id"
                                    reference="products"
                                    record={scopedFormData}
                                    basePath="/commands"
                                >
                                    {({ referenceRecord, ...props }) => {
                                        return (
                                            <span>
                                                <NumberField
                                                    record={{
                                                        total:
                                                            referenceRecord &&
                                                            scopedFormData.quantity
                                                                ? referenceRecord.price *
                                                                  scopedFormData.quantity
                                                                : "-",
                                                    }}
                                                    source="total"
                                                    options={{
                                                        style: "currency",
                                                        currency: "USD",
                                                    }}
                                                />
                                            </span>
                                        );
                                    }}
                                </ReferenceFieldController>
                            </span>
                        );
                    }}
                </FormDataConsumer>
            </SimpleFormIterator>
        </ArrayInput>
    );
};
