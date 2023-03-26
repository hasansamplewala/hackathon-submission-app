import React from "react";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sort from "../components/Sort";
import SubmissionCard from "../components/SubmissionCard";
import { matchesSearchQuery } from "../helper/matchesSearchQuery";
import { useSubmissions } from "../SubmissionContext";
import Toolbar from "@mui/material/Toolbar";
import HeroSection from "../components/HeroSection";
import { Container } from "@mui/material";
import SearchTextField from "../components/Search";

function Dashboard() {
  // react context custom hook
  const { submissionsData, favorites, searchText, sortBy } = useSubmissions();
  const [activeTab, setActiveTab] = useState(0);
  const [filteredSubmissionData, setFilteredSubmissionData] = useState([]);

  useEffect(() => {
    let newSubmissionsData = submissionsData.filter((submission) => {
      return matchesSearchQuery(submission.title, searchText);
    });
    // sort submissions by new or old
    if (sortBy === "new") {
      newSubmissionsData.sort((a, b) => {
        return new Date(a.uploadDate) - new Date(b.uploadDate);
      });
    }
    if (sortBy === "old") {
      newSubmissionsData.sort((a, b) => {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      });
    }

    setFilteredSubmissionData(newSubmissionsData);

    // setFilteredSubmissionData()
  }, [searchText, sortBy]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const favoriteChallenges = filteredSubmissionData.filter((item) => {
    return favorites.has(item.id);
  });

  const favoritesCardGrid = favoriteChallenges.map((item) => {
    return (
      <SubmissionCard
        key={item.id}
        id={item.id}
        title={item.title}
        summary={item.summary}
        image={item.coverImage}
      />
    );
  });

  const allChallengesCardGrid = filteredSubmissionData.map((item) => {
    return (
      <SubmissionCard
        key={item.id}
        id={item.id}
        title={item.title}
        summary={item.summary}
        image={item.coverImage}
      />
    );
  });
  // console.log("filteredSubmissionData", filteredSubmissionData);
  return (
    <>
      <Grid item xs={12} md={6}>
        <img src="/logo.png" alt="Logo" />
      </Grid>
      <HeroSection />

      <Toolbar sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />
          </Grid>
          <Grid item>
            <SearchTextField />
          </Grid>
          <Grid item>
            <Sort />
          </Grid>
        </Grid>
      </Toolbar>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {activeTab === 0 ? allChallengesCardGrid : favoritesCardGrid}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
