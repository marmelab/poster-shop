import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import customers from "./customers/index.js";
import orders from "./orders/index.js";
import posters from "./posters/index.js";
import { PosterShopLayout } from "./PosterShopLayout.js";
import { authProvider } from "./providers/authProvider.js";
import reviews from "./reviews/index.js";

const data = generateData();
const dataProvider = fakeDataProvider(data);

function App() {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            layout={PosterShopLayout}
        >
            <Resource name="products" {...posters} />
            <Resource name="customers" {...customers} />
            <Resource name="commands" {...orders} />
            <Resource name="reviews" {...reviews} />
        </Admin>
    );
}

export default App;
