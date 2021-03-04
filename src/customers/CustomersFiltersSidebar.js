import { Card, CardContent } from "@material-ui/core";
import * as React from "react";
import { HasNewsletterFilter } from "./CustomerHasNewsletterFilter";
import { HasOrderedFilter } from "./CustomerHasOreredFilter";
import { LastVisitedFilter } from "./CustomerLastVisitFilter";
import { CustomersFilter } from "./CustomersFilter";

export const CustomersFilterSidebar = () => (
    <Card style={{ order: -1 }}>
        <CardContent>
            <CustomersFilter />
            <LastVisitedFilter />
            <HasOrderedFilter />
            <HasNewsletterFilter />
        </CardContent>
    </Card>
);
