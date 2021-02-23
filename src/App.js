import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";
import React from "react";
import { Admin, Resource } from "react-admin";
import { authProvider } from "./providers/authProvider.js";
import { CustomerList } from "./resources/customers/CustomersList.js";
import { CustomerShow } from "./resources/customers/CustomersShow.js";
import { OrderList } from "./resources/orders/OrderList";
import { OrderShow } from "./resources/orders/OrdersShow.js";
import { PostersList } from "./resources/posters/PostersList";
import { PosterShow } from "./resources/posters/PostersShow";
import { ReviewList } from "./resources/reviews/ReviewList";
import { ReviewShow } from "./resources/reviews/ReviewsShow.js";

const data = generateData();
const dataProvider = fakeDataProvider(data);

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
