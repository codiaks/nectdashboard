import OrdersList from "../Dashboard/OrdersList";
import orderItems from "../Dashboard/orderItems.json"

const Orders = () => {
    return ( 
        <OrdersList data={orderItems} />
     );
}
 
export default Orders;