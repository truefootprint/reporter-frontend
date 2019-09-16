class AnswerQuestion {
  constructor(questionId, value) {
    this.questionId = questionId;
    this.value = value;
  }

  process(appState) {
    const newResponses = appState.responses.concat({
      question_id: this.questionId,
      value: this.value,
    });

    return {...appState, responses: newResponses };
  }
}

export default AnswerQuestion;
