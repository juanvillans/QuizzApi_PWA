import React from "react";
import "./App.css";
import Question from "./components/Question";
import blop_limon from "./img/bloblimon.png";
import blop_blue from "./img/blobblue.png";
import SpinLoader from "./components/SpinLoader";

let render = 0;

//img
function App() {
  render++;
  const [quizzData, setQuizzData] = React.useState(() => []);
  const [selectedAnswers, setSelectedAnswers] = React.useState({
    isFilled: false,
    answers: Array(5).fill(""),
  });
  const [allowResults, setAllowResults] = React.useState({
    isAllow: false,
    results: "",
  });
  const [showAllert, setShowAlert] = React.useState(false);
  const [newGame, setNewGame] = React.useState(0);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => {
    if (newGame > 0) {
      setIsloading(true);
      fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
        .then((resp) => resp.json())
        .then((data) => {
          setIsloading(false);
          setQuizzData(() => data.results);
        });
      setSelectedAnswers({ isFilled: false, answers: Array(5).fill("") });
      setAllowResults({ isAllow: false, results: "" });
      setShowAlert(false);
    }
  }, [newGame]);

  function toggleAnswer(id_question, answer_value) {
    if (!allowResults.isAllow) {
      setSelectedAnswers((prev) => {
        const newAnswers = prev.answers.map((ans, i) =>
          i == id_question ? `${answer_value}` : ans
        );
        return {
          isFilled: !newAnswers.some((str) => str == ""),
          answers: newAnswers,
        };
      });
    }
  }

  function checkAnswers() {
    if (selectedAnswers.isFilled) {
      let n_correct = 0;
      selectedAnswers.answers.forEach((answer, i) => {
        let true_answer = quizzData[i].correct_answer;
        if (answer === quizzData[i].correct_answer) n_correct++;
      });
      setAllowResults({
        isAllow: true,
        results: `You score is ${n_correct}/${quizzData.length}`,
      });
    } else {
      setShowAlert(true);
    }
  }

  const questionPackEl = quizzData.map((question, i) => {
    return (
      <Question
        key={i}
        title={question.question}
        incorrect={question.incorrect_answers}
        correct={question.correct_answer}
        id={i}
        toggleAnswer={toggleAnswer}
        selected={selectedAnswers.answers}
        allowResults={allowResults.isAllow}
      />
    );
  });

  return (
    <div className=" w-full  flex justify-center items-center">
      {quizzData.length > 0 && (
        <div className="overflow-hidden relative my-5 w-11/12 max-w-3xl p-7 md:px-12 bg-slate-100">
          {!isLoading && questionPackEl}
          <div className="flex relative z-50 gap-4 mt-5 font-bold items-center justify-center">
            {showAllert && !selectedAnswers.isFilled && (
              <p className="text-red-500 text-md">
                You must answer all the questions
              </p>
            )}

            {allowResults.isAllow && (
              <p className="text-md ">{allowResults.results}</p>
            )}

            {allowResults.isAllow ? (
              <button
                onClick={() => setNewGame((prev) => ++prev)}
                className="min-w-[100px] bg-color1 py-3 px-7 rounded-lg text-white font-bold"
              >
                play again
              </button>
            ) : (
              <button
                onClick={checkAnswers}
                className="min-w-[100px] bg-color2 py-3 px-7 rounded-lg text-white font-bold"
              >
                {isLoading ? <SpinLoader /> : "Check answers"}
              </button>
            )}
          </div>
          <img
            src={blop_limon}
            className="absolute z-0  w-56 -top-24 -right-24"
            alt=""
          />
          <img
            src={blop_blue}
            className="absolute z-0  w-56 -bottom-12 -left-20"
            alt=""
          />
        </div>
      )}
      {quizzData.length == 0 && (
        <div className="overflow-hidden relative bg-slate-100 flex flex-col items-center justify-center aspect-square w-[500px] mt-10">
          <h1 className="z-10 font-bold text-3xl mb-2">Quizzical</h1>
          <p className="z-10 text-color1">
            Prove your knowledge with this game
          </p>
          <button
            onClick={() => setNewGame((prev) => ++prev)}
            className="z-10 bg-color2 relative top-10 py-3 px-12 rounded-lg text-white font-medium"
          >
            {newGame == 1 ? <SpinLoader /> : "Start quizz"}
          </button>
          <img
            src={blop_limon}
            className="absolute w-56  -top-24 -right-24"
            alt=""
          />
          <img
            src={blop_blue}
            className="absolute w-56  -bottom-12 -left-20"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default App;

/*
data = {
  response_code: 0;
  results: array(5) [
    {category:  "Animals"
    correct_answer:  "Drone"
    difficulty:  "medium"
    incorrect_answers:  (3) ['Soldier', 'Worker', 'Male']
    question:  "What is the name for a male bee that comes from an unfertilized egg?"
    type:  "multiple"},
    {}
  ]
}
*/
