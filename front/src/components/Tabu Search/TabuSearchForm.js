import React from "react";
import Header from "../Header";

export default function TabuSearchForm({ setSelectedAlgorithm }) {
  return (
    <>
      <Header
        headerContent="Tabu Search Algorithm"
        setSelectedAlgorithm={setSelectedAlgorithm}
        inHomePage={false}
      />
    </>
  );
}
