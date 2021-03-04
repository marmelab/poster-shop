import * as React from "react";
import { Fragment } from "react";
import { BulkDeleteButton, BulkExportButton } from "react-admin";

export const CustomerBulkActionButtons = (props) => (
    <Fragment>
        <BulkExportButton />
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </Fragment>
);
