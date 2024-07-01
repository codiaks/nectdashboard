export const analyzeOrders = (data) => {
    let totalRevenue = 0;
    let totalItemsSold = 0;
    const itemsByOrderType = { Online: 0, "Dine In": 0 };
    const itemsByOrderStatus = { Delivered: 0, "In Transit": 0, Pending: 0 };
    let mostSoldItemId;
    let mostSoldItemName;
    let mostSoldItemQuantity = 0;

    const orderCompletionStatus = {
        Online: { Completed: 0, NotCompleted: 0 },
        "Dine In": { Completed: 0, NotCompleted: 0 }
    };

    for (const order of data) {
        for (const item of order.Items) {
            const itemPrice = item.Item_Price;
            const quantity = item.Quantity;
            totalRevenue += itemPrice * quantity;
            totalItemsSold += quantity;

            itemsByOrderType[order.Order_Type] += quantity;
            itemsByOrderStatus[order.Order_Status] += quantity;

            // Track most sold item
            if (quantity > mostSoldItemQuantity) {
                mostSoldItemId = item.Item_ID;
                mostSoldItemName = item.Item_Name;
                mostSoldItemQuantity = quantity;
            }
        }

        // Track order completion status
        if (order.Order_Status === "Delivered") {
            orderCompletionStatus[order.Order_Type].Completed += 1;
        } else {
            orderCompletionStatus[order.Order_Type].NotCompleted += 1;
        }
    }

    return {
        totalRevenue,
        totalItemsSold,
        itemsByOrderType,
        itemsByOrderStatus,
        mostSoldItemId,
        mostSoldItemName,
        orderCompletionStatus
    };
}