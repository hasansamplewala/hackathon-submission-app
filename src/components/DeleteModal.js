import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSubmissions } from "../SubmissionContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ id }) {
  const { submissionsData, setSubmissionsData } = useSubmissions();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    let newSubmissionsData = submissionsData.filter((item)=>{
        return item.id !== Number(id)
    })
    console.log('newSubmissionsData', newSubmissionsData)
    setSubmissionsData([...newSubmissionsData]);
    navigate("/")
    // handleClose()
  };
  return (
    <div>
      <Button
        sx={{ padding: "4px 10px" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Model</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is irreversable. Are you sure you want to delete this
            model?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
