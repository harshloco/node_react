import React from "react";
import spinner from "../../images/spinner.gif";
export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "auto", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
}
