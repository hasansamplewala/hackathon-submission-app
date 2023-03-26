import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Navbar({ activeTab, handleTabChange }) {
  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="All Challenges" />
        <Tab label="Favorite Challenges" icon={<FavoriteIcon />} />
      </Tabs>
    </>
  );
}

export default Navbar;
