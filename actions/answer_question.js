class AnswerQuestion {
  constructor(questionId, value) {
    this.action = "AnswerQuestion";
    this.questionId = questionId;
    this.value = value;
  }

  process(appState) {
    const response = { question_id: this.questionId, value: this.value };
    const responses = appState.responses.concat(response);

    return {...appState, responses };
  }
}

export default AnswerQuestion;
