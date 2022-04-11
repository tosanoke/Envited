import { Grid, Typography } from "@mui/material";
import { WELCOME_MESSAGE } from "../../constants/pages/home";

const Home = () => {
  return (
    <Grid>
      <Typography>{WELCOME_MESSAGE}</Typography>
    </Grid>
  );
};

export default Home;
