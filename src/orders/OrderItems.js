import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from "react";
import {
    NumberField,
    ReferenceField,
    ReferenceFieldController,
    TextField,
} from "react-admin";

export const OrderItems = ({ record, ...props }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="items">
                <TableHead>
                    <TableRow>
                        <TableCell>Reference</TableCell>
                        <TableCell align="right">Unit price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {record.basket
                        ? record.basket.map((row) => (
                              <TableRow key={row.product_id}>
                                  <TableCell>
                                      <ReferenceField
                                          source="product_id"
                                          reference="products"
                                          record={row}
                                          link="show"
                                          {...props}
                                      >
                                          <TextField source="reference" />
                                      </ReferenceField>
                                  </TableCell>
                                  <TableCell align="right">
                                      <ReferenceField
                                          source="product_id"
                                          reference="products"
                                          resource="commands"
                                          record={row}
                                          link={false}
                                          basePath="/commands"
                                      >
                                          <NumberField
                                              source="price"
                                              options={{
                                                  style: "currency",
                                                  currency: "USD",
                                              }}
                                          />
                                      </ReferenceField>
                                  </TableCell>
                                  <TableCell align="right">
                                      {row.quantity}
                                  </TableCell>
                                  <TableCell align="right">
                                      <ReferenceFieldController
                                          source="product_id"
                                          reference="products"
                                          record={row}
                                          {...props}
                                      >
                                          {({ referenceRecord, ...props }) => {
                                              return (
                                                  <span>
                                                      {referenceRecord
                                                          ? referenceRecord.price *
                                                            row.quantity
                                                          : "-"}
                                                  </span>
                                              );
                                          }}
                                      </ReferenceFieldController>
                                  </TableCell>
                              </TableRow>
                          ))
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
