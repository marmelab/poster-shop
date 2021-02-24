import { Show } from "react-admin";
import { OrdersShowLayout } from "./OrdersShowLayout";

export const OrdersShow = (props) => (
    <Show {...props}>
        <OrdersShowLayout {...props} />
    </Show>
);
