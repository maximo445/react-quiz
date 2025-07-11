function QuestionHeader({
  index,
  numQuestions,
  totalPoints,
  userPoints,
  answer,
}) {
  return (
    <header className="questions-header">
      <progress
        value={answer !== null ? index + 1 : index}
        max={numQuestions}
        className="progress"
      ></progress>
      <div className="questions-stat">
        <p>{`Question ${index + 1}/${numQuestions}`}</p>
        <p>{`${userPoints}/${totalPoints} points`}</p>
      </div>
    </header>
  );
}

export default QuestionHeader;
