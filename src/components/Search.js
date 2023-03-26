import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useSubmissions } from '../SubmissionContext';

function SearchTextField() {
const {searchText, setSearchText} = useSubmissions()
    function handleChange(event){
        setSearchText(event.target.value)
    }
  return (
    <TextField
    variant="outlined"
    placeholder="Search"
    sx={{
      height: 40,
      borderRadius: 20,
      backgroundColor: "white",
      "& .MuiOutlinedInput-root": {
        borderRadius: 20,
      },
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <Search />
          </IconButton>
        </InputAdornment>
      ),
    }}
    onChange={handleChange}
    value={searchText}
    />
  );
}

export default SearchTextField;