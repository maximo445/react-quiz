function NextButton({ dispatch, answer }) {
  if (answer !== null)
    return (
      <button
        className="next-button"
        onClick={() => dispatch({ type: "next-question" })}
      >
        Next Question
      </button>
    );

  return null;
}

export default NextButton;
