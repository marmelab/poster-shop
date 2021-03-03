import { Grid, Typography } from "@material-ui/core";
import {
    BooleanField,
    CardContentInner,
    DateField,
    FunctionField,
    Labeled,
    ReferenceField,
    ShowView,
    TextField,
    useRecordContext,
} from "react-admin";
import { OrderItems } from "./OrderItems";

export const OrdersShowLayout = (props) => {
    const { record } = useRecordContext();
    console.dir(props);
    return (
        <ShowView
            title={`Order #${record.id}`}
            hasEdit={false}
            hasCreate={false}
            hasList={false}
            hasShow={false}
        >
            <CardContentInner>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container>
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
                        <Grid container>
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
                            {...props}
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
                        <OrderItems record={record} {...props} />
                    </Grid>
                </Grid>
            </CardContentInner>
        </ShowView>
    );
};
