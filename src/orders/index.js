import { OrderCreate } from "./OrderCreate";
import { OrdersList } from "./OrdersList";
import { OrdersShow } from "./OrdersShow";
const orders = {
    list: OrdersList,
    show: OrdersShow,
    create: OrderCreate,
};
export default orders;
