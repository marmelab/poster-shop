import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import customers from "./data/customers.js";
import orders from "./data/orders.js";
import posters from "./data/posters.js";
import reviews from "./data/reviews.js";
import { CustomerList, CustomerShow } from "./resources/customers.js";
import { OrderList, OrderShow } from "./resources/orders.js";
import { PosterShow, PostersList } from "./resources/posters";
import { ReviewList, ReviewShow } from "./resources/reviews.js";

const dataProvider = fakeDataProvider({
    posters: posters,
    orders: orders,
    customers: customers,
    reviews: reviews,
});

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posters" list={PostersList} show={PosterShow} />
            <Resource
                name="customers"
                list={CustomerList}
                show={CustomerShow}
            />
            <Resource name="orders" list={OrderList} show={OrderShow} />
            <Resource name="reviews" list={ReviewList} show={ReviewShow} />
        </Admin>
    );
}

export default App;
