import { DiningOutlined, LanguageOutlined } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";

const CurrentOrders = ({orderCompletionStatus}) => {
    return ( <>
            <Card
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            height: "200px",
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
                Completed: {orderCompletionStatus["Dine In"].Delivered}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "red" }}
              >
                In Transit : {orderCompletionStatus["Dine In"]["In Transit"]}
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
                Completed: {orderCompletionStatus.Online.Delivered}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "red" }}
              >
                In Transit: {orderCompletionStatus.Online["In Transit"]}
              </Typography>
            </Box>
          </Box>
        </Card>
    </> );
}
 
export default CurrentOrders;