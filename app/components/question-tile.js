import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  answerCount: Ember.computed('question.answers', function() {
    var countOfAnswers = this.get('question.answers').get('length');
    if (countOfAnswers === 0) {
      return ' nobody has answered this yet';
    }
    else {
      return 'this answer has been answered ' + countOfAnswers + ' times';
    }
  })
});
