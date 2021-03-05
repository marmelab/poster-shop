import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@material-ui/core";
import numeral from "numeral";
import { NumberField } from "react-admin";
export const OrdersTotal = ({ record }) => {
    return record ? (
        <TableContainer component={Paper}>
            <Table aria-label="items">
                <TableBody>
                    <TableRow>
                        <TableCell>Sum</TableCell>
                        <TableCell align="right">
                            <NumberField
                                record={record}
                                source="total_ex_taxes"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Delivery</TableCell>
                        <TableCell align="right">
                            <NumberField
                                record={record}
                                source="delivery_fees"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Tax(
                            {numeral(record.tax_rate).format("0%")})
                        </TableCell>
                        <TableCell align="right">
                            <NumberField
                                record={record}
                                source="taxes"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>
                            Total
                        </TableCell>
                        <TableCell align="right">
                            <NumberField
                                style={{ fontWeight: "bold" }}
                                record={record}
                                source="total"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    ) : null;
};
