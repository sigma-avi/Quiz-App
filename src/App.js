import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./Home/Home";
import axios from "axios";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";

const App = () => {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    
    setQuestions(data.results);
    
  };

  return (
    <BrowserRouter>
      <div
        className="app"
        style={{
          backgroundImage: "url(/ques1.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Routes>
         
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route path="/result" element={<Result name={name} score={score}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
