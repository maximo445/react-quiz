function QuizStarter({ numQuestions, dispatch }) {
  return (
    <div className="quizStarter">
      <h1>Welcome to The React Quiz!</h1>
      <h4>{`${numQuestions} questions to test your React mastery`}</h4>
      <button onClick={() => dispatch({ type: "begin-quiz" })}>
        Let's start!
      </button>
    </div>
  );
}

export default QuizStarter;
