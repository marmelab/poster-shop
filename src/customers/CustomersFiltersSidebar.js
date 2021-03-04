import { Card, CardContent } from "@material-ui/core";
import * as React from "react";
import { HasNewsletterFilter } from "./CustomerHasNewsletterFilter";
import { HasOrderedFilter } from "./CustomerHasOreredFilter";
import { LastVisitedFilter } from "./CustomerLastVisitFilter";

export const CustomersFilterSidebar = () => (
    <Card style={{ order: -1 }}>
        <CardContent>
            <LastVisitedFilter />
            <HasOrderedFilter />
            <HasNewsletterFilter />
        </CardContent>
    </Card>
);
