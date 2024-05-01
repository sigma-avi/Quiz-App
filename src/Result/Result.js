import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name, score }) => {
  const hist = useNavigate();

  useEffect(() => {
    if (!name) {
      hist("/");
    }
  }, [name, hist]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;