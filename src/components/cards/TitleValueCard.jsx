import { Box, Card, Typography } from "@mui/material";

function TitleValueCard({ title, value, icon }) {
  return (
    <Card sx={{ p: 3, display: "flex", alignItems: "center" }}>
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </Box>
    </Card>
  );
}

export default TitleValueCard;
