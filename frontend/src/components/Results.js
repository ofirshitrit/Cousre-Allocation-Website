import React from "react";
import Header from "./Header";

export default function Results({ data, setSelectedAlgorithm }) {
  return (
    <div>
      <Header
            headerContent="Results"
            setSelectedAlgorithm={setSelectedAlgorithm}
            inHomePage={false}
          />
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
    </div>
  );
}
