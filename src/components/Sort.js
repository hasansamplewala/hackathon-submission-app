import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSubmissions } from '../SubmissionContext';
import { styled } from "@mui/material/styles";

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  "& .MuiSelect-select": {
    paddingRight: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function Sort() {
  const {sortBy, setSortBy} = useSubmissions()

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
 <CustomFormControl>
        <Select
          value={sortBy}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"new"}>Newest</MenuItem>
          <MenuItem value={"old"}>Oldest</MenuItem>
        </Select>
      </CustomFormControl>
    </div>
  );
}

