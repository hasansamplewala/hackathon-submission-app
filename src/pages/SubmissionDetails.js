import React from "react";
import { useParams } from "react-router-dom";
import { useSubmissions } from "../SubmissionContext";
import FaceIcon from "@mui/icons-material/Face";
import SubmissionDetailsHero from "../components/SubmissionDetailsHero";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Container } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
function SubmissionDetails() {
  let { id } = useParams();
  // react context custom hook
  const { favorites, setFavorites, submissionsData } = useSubmissions();

  const currentSubmission = submissionsData.filter((item) => {
    return Number(item.id) === Number(id);
  });
  const submission = currentSubmission[0];
  const submissionDatesString = `${submission.startDate} - ${submission.endDate}`;
  // console.log(currentSubmission);
  return (
    <>
          <Grid item xs={12} md={6}>
        <img src="/logo.png" alt="Logo" />
      </Grid>
      <SubmissionDetailsHero
        id={id}
        favorites={favorites}
        setFavorites={setFavorites}
        submission={submission}
      />
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h5">Description</Typography>
              <Typography>{submission.description}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h5">Hackathon</Typography>
              <Typography>{submission.hackathonName}</Typography>
              <Chip icon={<DateRangeIcon />} label={submissionDatesString} />
              <Button variant="outlined">Github Repository</Button>
              <Button variant="outlined">Other Links</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SubmissionDetails;
