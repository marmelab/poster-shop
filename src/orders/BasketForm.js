import { Grid } from "@material-ui/core";
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
import { useFormState } from "react-final-form";
import { OrderItems } from "./OrderItems";
export const BasketForm = () => {
    const formState = useFormState();

    return (
        <span>
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
                        {({ getSource, scopedFormData }) => {
                            getSource();
                            return (
                                <Grid
                                    container
                                    spacing={3}
                                    alignContent="flex-end"
                                    alignItems="flex-end"
                                >
                                    <Grid item>
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
                                    </Grid>
                                    <Grid item>
                                        <ReferenceFieldController
                                            source="product_id"
                                            reference="products"
                                            record={scopedFormData}
                                            basePath="/commands"
                                        >
                                            {({
                                                referenceRecord,
                                                ...props
                                            }) => {
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
                                                                style:
                                                                    "currency",
                                                                currency: "USD",
                                                            }}
                                                        />
                                                    </span>
                                                );
                                            }}
                                        </ReferenceFieldController>
                                    </Grid>
                                </Grid>
                            );
                        }}
                    </FormDataConsumer>
                </SimpleFormIterator>
            </ArrayInput>
            <OrderItems record={formState.values} />
        </span>
    );
};
