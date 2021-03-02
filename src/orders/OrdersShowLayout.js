import { Grid, Typography } from "@material-ui/core";
import {
    BooleanField,
    DateField,
    Labeled,
    ReferenceField,
    ShowBase,
    TextField,
} from "react-admin";
import { OrderItems } from "./OrderItems";

export const OrdersShowLayout = (props) => {
    return (
        <ShowBase {...props}>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Typography variant="h6" gutterBottom={true}>
                        Order
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="date">
                                <DateField label="Date" source="date" />
                            </Labeled>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="reference">
                                <TextField source="reference"></TextField>
                            </Labeled>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="status">
                                <TextField source="status" />
                            </Labeled>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="returned">
                                <BooleanField source="returned" />
                            </Labeled>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography>Customer</Typography>
                    <ReferenceField
                        label="Customer"
                        source="customer_id"
                        reference="customers"
                        sortBy="last_name"
                        link="show"
                    >
                        <TextField source="first_name" />
                    </ReferenceField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography>Items</Typography>
                    <OrderItems {...props} />
                </Grid>
            </Grid>
        </ShowBase>
    );
};
