import { createContext, useContext, useState } from "react";
import submissions from "./data/submissions";

const SubmissionsContext = createContext();
const lastId = submissions[submissions.length - 1].id;

export const SubmissionsProvider = ({ children }) => {
  console.log("lastId", lastId);
  const [submissionsData, setSubmissionsData] = useState(submissions);
  // array of ids that are set as favorites
  const [favorites, setFavorites] = useState(new Set());
  // Search Text
  const [searchText, setSearchText] = useState("");
  // sortBy
  const [sortBy, setSortBy] = useState("new");

  const [latestId, setLatestId] = useState(lastId);
  return (
    <SubmissionsContext.Provider
      value={{
        favorites,
        setFavorites,
        submissionsData,
        setSubmissionsData,
        searchText,
        setSearchText,
        latestId,
        setLatestId,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = () => {
  const contextValue = useContext(SubmissionsContext);

  if (contextValue === undefined) {
    throw new Error("useCounter must be used within Count Provider");
  }
  return contextValue;
};
