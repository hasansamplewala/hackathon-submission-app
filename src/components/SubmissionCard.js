// SubmissionCard.js
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 240,
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
  },
}));

function SubmissionCard({ title, summary, image, id }) {
  const link = `/${id}`;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CustomCard>
        <Link to={link} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt="submission" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </CustomCard>
    </Grid>
  );
}

export default SubmissionCard;
