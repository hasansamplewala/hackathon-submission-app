import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SubmissionUploadModal from "./SubmissionUploadModal";

const CustomHeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#003145",
  color: "white",
  padding: theme.spacing(2),
}));

function HeroSection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <CustomHeroSection
      sx={{
        height: isDesktop ? "400px" : "auto",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Stack direction="column" alignItems="flex-start" spacing={2}>
            <Typography variant="h3">Hackathon Submissions</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Urna cursus amet
              pellentesque in parturient purus feugiat faucibus. Congue
              laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel
              nisl tempus nec vitae.
            </Typography>
            <SubmissionUploadModal />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/lightbulb.png"
            alt="Hero"
            style={{
              maxWidth: "100%",
              maxHeight: isDesktop ? "400px" : "auto",
            }}
          />
        </Grid>
      </Grid>
    </CustomHeroSection>
  );
}

export default HeroSection;
