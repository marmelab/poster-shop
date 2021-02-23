import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import { authProvider } from "./providers/authProvider";
import { CustomerList, CustomerShow } from "./resources/customers.js";
import { OrderList, OrderShow } from "./resources/orders.js";
import { PosterShow, PostersList } from "./resources/posters";
import { ReviewList, ReviewShow } from "./resources/reviews.js";

const data = generateData();
const dataProvider = fakeDataProvider(data);

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="products" list={PostersList} show={PosterShow} />
            <Resource
                name="customers"
                list={CustomerList}
                show={CustomerShow}
            />
            <Resource name="commands" list={OrderList} show={OrderShow} />
            <Resource name="reviews" list={ReviewList} show={ReviewShow} />
        </Admin>
    );
}

export default App;
