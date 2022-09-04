import React from "react";
import RepositoriesList from "./components/RepositoriesList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  );
};

export default App;
