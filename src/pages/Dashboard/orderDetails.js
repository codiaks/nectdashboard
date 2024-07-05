export const analyzeOrders = (data) => {
  let totalRevenue = 0;
  let totalItemsSold = 0;
  const itemsByOrderType = { Online: 0, "Dine In": 0 };
  const itemsByOrderStatus = { Delivered: 0, "In Transit": 0, Pending: 0 };
  let mostSoldItemId;
  let mostSoldItemName;
  let mostSoldItemQuantity = 0;

  const orderCompletionStatus = {
    Online: { count: 0, "In Transit": 0, Pending: 0, Delivered: 0 },
    "Dine In": { count: 0, "In Transit": 0, Pending: 0, Delivered: 0 },
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
    orderCompletionStatus[order.Order_Type].count += 1;
    orderCompletionStatus[order.Order_Type][order.Order_Status] += 1;
  }
  return {
    totalRevenue,
    totalItemsSold,
    itemsByOrderType,
    itemsByOrderStatus,
    mostSoldItemId,
    mostSoldItemName,
    orderCompletionStatus,
  };
};
