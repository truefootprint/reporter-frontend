class AnswerQuestion {
  constructor(projectQuestionId, value) {
    this.action = "AnswerQuestion";
    this.projectQuestionId = projectQuestionId;
    this.value = value;
  }

  process(appState) {
    const response = { project_question_id: this.projectQuestionId, value: this.value };
    const responses = [response].concat(appState.responses);

    appState = this.updateCurrentActivity(response, appState);

    return {...appState, responses };
  }

  updateCurrentActivity(response, appState) {
    let project = appState.projects[0];

    let completionQuestion = project.completion_questions.find(cq => (
      cq.project_question_id === response.project_question_id
    ));

    if (completionQuestion && completionQuestion.completion_value === response.value) {
      let projectActivity = project.project_activities.find(pa => {
        return pa.project_questions.by_topic.find(t => {
          return t.project_questions.find(pq => {
            return pq.id === response.project_question_id;
          });
        });
      });

      let index = project.project_activities.indexOf(projectActivity);
      let nextActivity = project.project_activities[index + 1];

      if (!nextActivity) {
        return appState;
      }

      let { id, name } = nextActivity;
      let newCurrentProjectActivity = { id, name };
      let newProject = {...project, current_project_activity: newCurrentProjectActivity };
      let newAppState = {...appState, projects: [newProject] };

      return newAppState;
    }

    return appState;
  }
}

export default AnswerQuestion;
