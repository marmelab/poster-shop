import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import data from "./data/data.json";
import { CustomerList, CustomerShow } from "./resources/customers.js";
import { OrderList, OrderShow } from "./resources/orders.js";
import { PosterShow, PostersList } from "./resources/posters";
import { ReviewList, ReviewShow } from "./resources/reviews.js";

console.dir(data);
const dataProvider = fakeDataProvider({
    products: data.products,
    commands: data.commands,
    customers: data.customers,
    reviews: data.reviews,
    categories: data.categories,
});

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
