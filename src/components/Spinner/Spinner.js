import { CircularProgress } from "@mui/material";
import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <CircularProgress />
      </div>
    </>
  );
};

export default Spinner;
