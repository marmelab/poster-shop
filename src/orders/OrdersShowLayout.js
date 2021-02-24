import {
    Box,
    Card,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Switch,
    Typography,
} from "@material-ui/core";
import { format } from "date-fns";

export const OrdersShowLayout = ({ record }) => {
    return (
        <Box>
            <Paper>
                <Card>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography variant="h6" gutterBottom={true}>
                                Order
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FormControl>
                                        <FormLabel>Date</FormLabel>
                                        <Typography gutterBottom={true}>
                                            {format(
                                                new Date(record.date),
                                                "MM/dd/yyyy"
                                            )}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FormControl>
                                        <FormLabel>Reference</FormLabel>
                                        <Typography gutterBottom={true}>
                                            {record.reference}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FormControl>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={record.status}
                                        >
                                            <MenuItem value="ordered">
                                                Ordered
                                            </MenuItem>
                                            <MenuItem value="cancelled">
                                                Cancelled
                                            </MenuItem>
                                            <MenuItem value="delivered">
                                                Delivered
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={record.returned}
                                                    name="returned"
                                                />
                                            }
                                            label="Returned"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography>Customer</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Paper>
        </Box>
    );
};
