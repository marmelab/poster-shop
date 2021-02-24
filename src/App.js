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
            <Resource name="products" {...posters} />
            <Resource name="customers" {...customers} />
            <Resource
                name="commands"
                options={{ label: "Orders" }}
                {...orders}
            />
            <Resource name="reviews" {...reviews} />
        </Admin>
    );
}

export default App;
