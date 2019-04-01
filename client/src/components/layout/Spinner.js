import React from "react";
import spinner from "../../images/spinner3.gif";
export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "100px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
}
