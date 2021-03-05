import { Grid, Typography } from "@material-ui/core";
import {
    BooleanField,
    CardContentInner,
    DateField,
    FunctionField,
    Labeled,
    ReferenceField,
    TextField,
    useRecordContext,
} from "react-admin";
import { OrderItems } from "./OrderItems";
import { OrdersTotal } from "./OrdersTotal";

export const OrdersShowLayout = () => {
    const { record } = useRecordContext();
    return (
        <CardContentInner>
            {record && (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Labeled source="date">
                                    <DateField
                                        record={record}
                                        label="Date"
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
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Labeled source="status">
                                    <TextField
                                        record={record}
                                        source="status"
                                    />
                                </Labeled>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Labeled source="returned">
                                    <BooleanField
                                        record={record}
                                        source="returned"
                                        valueLabelTrue="returned"
                                    />
                                </Labeled>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography>Customer</Typography>
                        <ReferenceField
                            record={record}
                            label="Customer"
                            source="customer_id"
                            reference="customers"
                            sortBy="last_name"
                            link="show"
                            basePath="/commands"
                        >
                            <FunctionField
                                resource="customers"
                                label="Name"
                                render={(record) =>
                                    `${record.first_name} ${record.last_name}`
                                }
                            />
                        </ReferenceField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography>Items</Typography>
                        <OrderItems record={record} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography>Totals</Typography>
                        <OrdersTotal record={record} />
                    </Grid>
                </Grid>
            )}
        </CardContentInner>
    );
};
