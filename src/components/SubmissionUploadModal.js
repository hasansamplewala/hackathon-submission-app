import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { useSubmissions } from "../SubmissionContext";

const SubmissionUploadModal = () => {
    // react context custom hook
    const { submissionsData, setSubmissionsData, latestId, setLatestId } = useSubmissions();
    // initial formData
  const initialSubmissionsData = {
    description: "",
    title: "",
    coverImage: "",
    hackathonName: "",
    startDate: "",
    summary: "",
    endDate: "",
    githubLink: "",
    otherLinks: "",
  };

  // local state to capture formdata
  const [formData, setFormData] = useState(initialSubmissionsData);
  // form toggle state
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleUploadVideo(formData) {
    console.log("Uploading Video");
    setSubmissionsData([...submissionsData, {id:( latestId + 1),...formData}]);
    setLatestId(latestId + 1)
    setFormData(initialSubmissionsData);
  }
  console.log("submissionsData", submissionsData);
  console.log("formData", formData);
  return (
    <div>
      <Button
        startIcon={<UploadIcon />}
        variant="contained"
        color="secondary"
        sx={{ padding: "4px 10px" }}
        onClick={handleModalOpen}
      >
        Upload
      </Button>
      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle color="primary">Video Upload</DialogTitle>
        <DialogContent>
          <FormControl onChange={handleChange}>
            <TextField
              id="title"
              margin="dense"
              label="Title"
              type="text"
              helperText="Title of your submission"
              value={formData.title}
              fullWidth
            />
            <TextField
              id="summary"
              margin="dense"
              label="Summary"
              type="text"
              helperText="This link will be used to preview the thumbnail image"
              value={formData.summary}
              fullWidth
            />
            <TextField
              id="description"
              autoFocus
              margin="dense"
              label="Description"
              type="url"
              helperText="Write a long description of your project. You can describe your idea and approach here."
              value={formData.description}
              fullWidth
              variant="outlined"
            />
            <TextField
              id="coverImage"
              margin="dense"
              label="Cover Image"
              type="text"
              helperText="Minimum resolution: 360px  X 360px"
              value={formData.coverImage}
              fullWidth
            />
            <TextField
              id="hackathonName"
              margin="dense"
              label="Hackathon Name"
              type="text"
              helperText="Enter the name of the hackathon"
              value={formData.hackathonName}
              fullWidth
            />
            <TextField
              id="startDate"
              margin="dense"
              label="Start date"
              type="date"
              helperText="When does the project start"
              value={formData.startDate}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="endDate"
              margin="dense"
              label="End date"
              type="date"
              helperText="When is the submission"
              value={formData.endDate}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="githubLink"
              margin="dense"
              label="Github Repository"
              type="text"
              helperText="Enter your submissions public github repository"
              value={formData.githubLink}
              fullWidth
              
            />
            <TextField
              id="otherLinks"
              margin="dense"
              label="Other Links"
              type="text"
              helperText="You can upload a video demo URL or URL of your app here"
              value={formData.otherLinks}
              fullWidth
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleModalClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            
            onClick={() => {
              handleUploadVideo(formData);
            }}
            
            color="primary"
          >
            Upload Video
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubmissionUploadModal;
