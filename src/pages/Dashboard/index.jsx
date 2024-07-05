import {
  AttachMoney,
  ShoppingCart,
  Whatshot
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import TitleValueCard from "../../components/cards/TitleValueCard";
import Chart from "./Chart";
import CurrentOrders from "./CurrentOrders";
import OrderToasts from "./OrderToasts";
import OrdersList from "./OrdersList";
import { analyzeOrders } from "./orderDetails";
import orderItems from "./orderItems.json";

const dummyOrders = [
  "Order of 560 rupees paid",
  "Order of 340 rupees paid",
  "Order of 1200 rupees paid",
  "Order of 450 rupees paid",
  "Order of 890 rupees paid",
];

export default function Dashboard() {
  const {
    totalRevenue,
    totalItemsSold,
    mostSoldItemName,
    orderCompletionStatus,
  } = analyzeOrders(orderItems);

  const chartData = Object.values(
    orderItems
      .map((item) => ({
        quantity: item.Items.map((x) => x.Quantity).reduce(
          (acc, curr) => acc + curr,
          0
        ),
        time: dayjs(item.datetime).format("HH"),
      }))
      .reduce((acc, { time, quantity }) => {
        if (!acc[time]) {
          acc[time] = { time, quantity: 0 };
        }
        acc[time].quantity += quantity;
        return acc;
      }, {})
  ).sort((a, b) => a.time - b.time);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <TitleValueCard
          title="Total Revenue"
          value={`INR ${totalRevenue.toLocaleString()}`}
          icon={<AttachMoney fontSize="large" color="success" />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TitleValueCard
          title="Hot Item!"
          value={mostSoldItemName}
          icon={<Whatshot fontSize="large" color="error" />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TitleValueCard
          title="Items Sold"
          value={totalItemsSold.toLocaleString()}
          icon={<ShoppingCart fontSize="large" color="primary" />}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CurrentOrders orderCompletionStatus={orderCompletionStatus} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OrderToasts orders={dummyOrders} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart data={chartData} dataKey={"quantity"} />
        </Paper>
      </Grid>      
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrdersList showMore data={orderItems.slice(0,9)} />
        </Paper>
      </Grid>
    </Grid>
  );
}
