import AssignmentIcon from "@material-ui/icons/Assignment";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import customers from "./customers";
import orders from "./orders";
import posters from "./posters";
import { authProvider } from "./providers/authProvider.js";
import reviews from "./reviews";

const data = generateData();
const dataProvider = fakeDataProvider(data);

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name="products" {...posters} icon={BurstModeIcon} />
            <Resource name="customers" {...customers} icon={PeopleIcon} />
            <Resource
                name="commands"
                options={{ label: "Orders" }}
                {...orders}
                icon={AssignmentIcon}
                title="Orders"
            />
            <Resource name="reviews" {...reviews} icon={RateReviewIcon} />
        </Admin>
    );
}

export default App;
