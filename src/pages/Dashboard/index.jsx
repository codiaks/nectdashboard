import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TitleValueCard from "../../components/cards/TitleValueCard";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { analyzeOrders } from "./orderDetails";
import orderItems from "./orderItems.json";
import { Box, Card, Typography } from "@mui/material";
import {
  AttachMoney,
  Whatshot,
  ShoppingCart,
  DiningOutlined,
  LanguageOutlined,
} from "@mui/icons-material";

export default function Dashboard() {
  console.log(orderItems);
  const {
    totalRevenue,
    totalItemsSold,
    itemsByOrderType,
    itemsByOrderStatus,
    mostSoldItemId,
    mostSoldItemName,
    orderCompletionStatus,
  } = analyzeOrders(orderItems);

  console.log("Total Revenue:", totalRevenue);
  console.log("Total Items Sold:", totalItemsSold);
  console.log("Items by Order Type:", itemsByOrderType);
  console.log(
    "Items by Order Status:",
    itemsByOrderStatus,
    mostSoldItemId,
    mostSoldItemName,
    orderCompletionStatus
  );

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
        <Card
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            // bgcolor: "#ff9299",
          }}
        >
          <Box sx={{ width: "48%", bgcolor: "#b5eef5", p: 2, borderRadius: 1 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <DiningOutlined sx={{ color: "green", mr: 1 }} /> Dine In
            </Typography>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                Completed: {orderCompletionStatus["Dine In"].Completed}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "red" }}
              >
                Not Completed: {orderCompletionStatus["Dine In"].NotCompleted}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "48%", bgcolor: "#cae8ff", p: 2, borderRadius: 1 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LanguageOutlined sx={{ color: "blueviolet", mr: 1 }} /> Online
            </Typography>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                Completed: {orderCompletionStatus.Online.Completed}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "red" }}
              >
                Not Completed: {orderCompletionStatus.Online.NotCompleted}
              </Typography>
            </Box>
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
