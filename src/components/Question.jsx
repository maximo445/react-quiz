import NextButton from "./NextButton";
import QuestionHeader from "./QuestionHeader";

function Question({ questions, index, dispatch, answer, userPoints }) {
  const numQuestions = questions.length;
  const question = questions.at(index);
  const questionPoints = questions.at(index).points;
  const options = question.options;

  const totalPoints = questions.reduce(
    (prev, curr) => (prev += curr.points),
    0
  );

  console.log({ questionPoints });

  return (
    <div className="question">
      <QuestionHeader
        numQuestions={numQuestions}
        index={index}
        totalPoints={totalPoints}
        userPoints={userPoints}
        answer={answer}
      />
      <div className="question-body">
        <h1>{question.question}</h1>
        <div className="options">
          {options.map((option, i) => (
            <button
              className={`single-option ${
                answer !== null
                  ? question.correctOption === i
                    ? "correct-answer"
                    : "wrong-answer"
                  : null
              } ${answer === i ? "user-choice" : ""}`}
              onClick={() =>
                dispatch({
                  type: "answer",
                  payload: {
                    choice: i,
                    points: questionPoints,
                    correct: question.correctOption === i,
                  },
                })
              }
              key={option}
              disabled={answer !== null}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="parameters">
          <button className="timer">9:49</button>
          <NextButton answer={answer} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default Question;
