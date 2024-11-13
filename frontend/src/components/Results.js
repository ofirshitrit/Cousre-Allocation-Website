import React from "react";

export default function Results({ data }) {
  return (
    <div>
      <h2>Results</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
      {/* Pretty-print the JSON data */}
    </div>
  );
}
