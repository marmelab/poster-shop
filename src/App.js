import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, ListGuesser, Resource, ShowGuesser } from "react-admin";
import customers from "./data/customers.js";
import orders from "./data/orders.js";
import posters from "./data/posters.js";
import reviews from "./data/reviews.js";
import { PostersList } from "./posters";

const dataProvider = fakeDataProvider({
    posters: posters,
    orders: orders,
    customers: customers,
    reviews: reviews,
});

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posters" list={PostersList} />
            <Resource name="customers" list={ListGuesser} show={ShowGuesser} />
            <Resource name="orders" list={ListGuesser} show={ShowGuesser} />
            <Resource name="reviews" list={ListGuesser} show={ShowGuesser} />
        </Admin>
    );
}

export default App;
