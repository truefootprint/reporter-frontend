class AnswerQuestion {
  constructor(questionId, value) {
    this.questionId = questionId;
    this.value = value;
  }

  process(appState) {
    appState.responses.push({
      question_id: this.questionId,
      value: this.value,
    });
  }
}

export default AnswerQuestion;
