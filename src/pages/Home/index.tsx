import { Box, Grid, Typography } from "@mui/material";
import { LANDING_PAGE_IMG } from "../../assets/images";
import { Button, Spacer } from "../../components";
import { ButtenText, HeadingText, StyledText, TextContent } from "./style";
import { useNavigate } from "react-router-dom";
import { CREATE } from "../../navigation/routes";


const Home = () => {

const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spacer height={94} />

      <HeadingText>
        <p className="imagine">
          Imagine if
          <StyledText>Snapchat</StyledText>
          had events.
        </p>
        <TextContent>
          Easily host and share events with your friends across any social
          media.
        </TextContent>
      </HeadingText>
      <Spacer height={36} />
      <Box
        component="img"
        sx={{
          width: 165.63,
          height: 292,
          left: "calc(50% - 165.63px/2 + 0.32px)",
          margin: "0 auto",
          filter: "drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))",
          borderRadius: 13.2326,
        }}
        alt="The house from the offer."
        src={LANDING_PAGE_IMG}
      />
      <Spacer height={34} />
      <Button
      onClick={() => navigate(CREATE)}
      >
        <ButtenText>&#127881; Create my event</ButtenText>
      </Button>
    </Grid>
  );
};

export default Home;
