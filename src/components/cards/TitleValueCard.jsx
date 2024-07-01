import { Card, Typography } from "@mui/material";

function TitleValueCard({ title, value }) {
  return (
    <Card sx={{p : 3, justifyContent : "space-evenly", alignItems : "start", display : "flex", flexDirection : "column", height : "200px"}}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="h4" component="div">
        {value}
      </Typography>
    </Card>
  );
}

export default TitleValueCard;
