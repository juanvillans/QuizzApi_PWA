// import React from "react";
// import blop_limon from "../img/bloblimon.png";
// import blop_blue from "../img/blobblue.png";
// import SpinLoader from "./SpinLoader";


// export default function Game(props){
//     function toggleAnswer(id_question, answer_value) {
//         if (!allowResults.isAllow) {
//           setSelectedAnswers((prev) => {
//             const newAnswers = prev.answers.map((ans, i) =>
//               i == id_question ? `${answer_value}` : ans
//             );
//             return {
//               isFilled: !newAnswers.some((str) => str == ""),
//               answers: newAnswers,
//             };
//           });
//         }
//       }

//     function checkAnswers() {
//         if (selectedAnswers.isFilled) {
//           let n_correct = 0;
//           selectedAnswers.answers.forEach((answer, i) => {
//             let true_answer = quizzData[i].correct_answer;
//             console.log({ true_answer, answer });
//             if (answer === quizzData[i].correct_answer) n_correct++;
//           });
//           setAllowResults({
//             isAllow: true,
//             results: `You score is ${n_correct}/${quizzData.length}`,
//           });
//         } else {
//           setShowAlert(true);
//         }
//       }

//     const questionPackEl = quizzData.map((question, i) => {
//         return (
//           <Question
//             key={i}
//             title={question.question}
//             incorrect={question.incorrect_answers}
//             correct={question.correct_answer}
//             id={i}
//             toggleAnswer={toggleAnswer}
//             selected={selectedAnswers.answers}
//             allowResults={allowResults.isAllow}
//           />
//         );
//       });



//     return ( 
//         <div className="overflow-hidden relative my-5 w-11/12 max-w-3xl p-7 md:px-12 bg-slate-100">
//           {questionPackEl}
//           <div className="flex relative z-50 gap-4 mt-5 font-bold items-center justify-center">
//             {showAllert && !selectedAnswers.isFilled && (
//               <p className="text-red-500 text-md">
//                 You must answer all the questions
//               </p>
//             )}

//             {allowResults.isAllow && (
//               <p className="text-md ">{allowResults.results}</p>
//             )}

//             {allowResults.isAllow ? (
//               <button
//                 onClick={() => setNewGame((prev) => ++prev)}
//                 className=" bg-color1 py-3 px-7 rounded-lg text-white font-bold"
//               >
//                 play again
//               </button>
//             ) : (
//               <button
//                 onClick={checkAnswers}
//                 className=" bg-color2 py-3 px-7 rounded-lg text-white font-bold"
//               >
//                 Check answers
//               </button>
//             )}
//           </div>
//           <img
//           src={blop_limon}
//           className="absolute z-0  w-56 -top-24 -right-24"
//           alt=""
//         />
//         <img
//           src={blop_blue}
//           className="absolute z-0  w-56 -bottom-12 -left-20"
//           alt=""
//         />
//         </div>
//     )
// }