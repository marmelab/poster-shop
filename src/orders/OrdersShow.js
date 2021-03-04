import { ShowBase } from "react-admin";
import { OrdersShowLayout } from "./OrdersShowLayout";
export const OrdersShow = (props) => {
    return (
        <ShowBase {...props}>
            <OrdersShowLayout />
        </ShowBase>
    );
};
