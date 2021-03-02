import { Grid, Switch, Typography } from "@material-ui/core";
import { DateField, Labeled, SimpleShowLayout, TextField } from "react-admin";
import { OrderItems } from "./OrderItems";

export const OrdersShowLayout = ({ record, ...props }) => {
    return (
        <SimpleShowLayout>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Typography variant="h6" gutterBottom={true}>
                        Order
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="date">
                                <DateField
                                    label="Date"
                                    record={record}
                                    source="date"
                                />
                            </Labeled>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="reference">
                                <TextField
                                    record={record}
                                    source="reference"
                                ></TextField>
                            </Labeled>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="status">
                                <TextField record={record} source="status" />
                            </Labeled>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Labeled source="returned">
                                <Switch
                                    checked={record.returned}
                                    name="returned"
                                />
                            </Labeled>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography>Customer</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography>Items</Typography>
                    <OrderItems record={record} {...props} />
                </Grid>
            </Grid>
        </SimpleShowLayout>
    );
};
