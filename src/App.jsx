import { useFetch } from "./hooks/useFetch";
import { useReducer } from "react";
import Container from "./components/Container";
import Header from "./components/header";
import QuizStarter from "./components/QuizStarter";
import Question from "./components/Question";

const initialState = {
  status: "loading",
  index: 0,
  numQuestions: 0,
  userPoints: 0,
  choice: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "begin-quiz":
      return { ...state, status: "quiz-started" };
    case "next-question":
      return { ...state, index: state.index + 1, choice: null };
    case "answer":
      return {
        ...state,
        choice: action.payload.choice,
        userPoints: action.payload.correct
          ? state.userPoints + action.payload.points
          : state.userPoints,
      };
    default:
      state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, dataState } = useFetch("http://localhost:4000/questions");

  return (
    <div className="app">
      <Header />
      <Container>
        {dataState === "loading" && <h1>Loading</h1>}
        {dataState === "error" && <h1>Error getting data 👎🏽</h1>}
        {dataState === "ready" && state.status !== "quiz-started" && (
          <QuizStarter numQuestions={questions.length} dispatch={dispatch} />
        )}
        {state.status === "quiz-started" && (
          <Question
            questions={questions}
            index={state.index}
            dispatch={dispatch}
            answer={state.choice}
            userPoints={state.userPoints}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
