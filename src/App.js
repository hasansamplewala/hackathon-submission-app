import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import SubmissionDetails from "./pages/SubmissionDetails";
import { SubmissionsProvider } from "./SubmissionContext";

function App() {

  return (
    <div className="App">
      <SubmissionsProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:id" element={<SubmissionDetails />} />
        </Routes>
      </SubmissionsProvider>
    </div>
  );
}

export default App;
