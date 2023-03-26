import { Chip, Grid, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SubmissionEditModal from "./SubmissionEditModal";
import DeleteModal from "./DeleteModal";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";

const CustomHeroSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#003145",
    color: "white",
    padding: theme.spacing(2),
  }));

function SubmissionDetailsHero({ id, setFavorites, favorites, submission }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  function handleFavorites() {
    let newSet = new Set(favorites);
    if (favorites.has(Number(id))) {
      newSet.delete(Number(id));
      setFavorites(newSet);
    } else {
      newSet.add(Number(id));
      setFavorites(newSet);
    }
  }

  return (
    <>
        <CustomHeroSection
      sx={{
        height: isDesktop ? "400px" : "auto",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Box
          sx={{
            backgroundColor: "#003145",
            height: "100%",
            width: "100%",
            color: "white",
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Stack spacing={2}>
                <img
                  src={submission.coverImage}
                  alt="Hero"
                  style={{
                    maxWidth: "auto",
                    maxHeight: "100px",
                    width: "20%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h4">{submission.title}</Typography>
                <Typography>{submission.summary}</Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    onClick={handleFavorites}
                    aria-label="add to favorites"
                    sx={{
                      color: 'white',
                      width: "1.5em",
                      height: "1.5em",
                    }}
                  >
                    {favorites.has(Number(id)) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                  <Chip
                    icon={<CalendarTodayIcon 
                      sx={{
                        color: "white",
                        width: "1.5em",
                        height: "1.5em",
                      }}
                    />}
                    label={submission.startDate}
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: theme.palette.primary.contrastText,
                      fontSize: "1.1em",
                      '& .MuiChip-label': {
                        padding: '0 8px',
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-end"
                spacing={2}
                height="100%"
              >
                <SubmissionEditModal id={id} submission={submission} />
                <DeleteModal id={id} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      </CustomHeroSection>
    </>
  );
}

export default SubmissionDetailsHero;
