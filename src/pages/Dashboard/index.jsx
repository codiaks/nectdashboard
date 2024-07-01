import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TitleValueCard from "../../components/cards/TitleValueCard";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { analyzeOrders } from "./orderDetails";
import orderItems from "./orderItems.json";
import { Box, Card, Typography } from "@mui/material";
export default function Dashboard() {
  console.log(orderItems);
  const {
    totalRevenue,
    totalItemsSold,
    itemsByOrderType,
    itemsByOrderStatus,
    mostSoldItemId,
    mostSoldItemName,
  } = analyzeOrders(orderItems);

  console.log("Total Revenue:", totalRevenue);
  console.log("Total Items Sold:", totalItemsSold);
  console.log("Items by Order Type:", itemsByOrderType);
  console.log(
    "Items by Order Status:",
    itemsByOrderStatus,
    mostSoldItemId,
    mostSoldItemName
  );

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={4}>
        <TitleValueCard title="Total Revenue" value={`INR ${totalRevenue}`} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TitleValueCard title="Hot Item" value={mostSoldItemName} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TitleValueCard title="Total Sold" value={totalItemsSold} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ display: "flex" }}>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
}
