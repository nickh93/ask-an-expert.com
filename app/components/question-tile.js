import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  answerCount: Ember.computed('question.answers', function() {
    var countOfAnswers = this.get('question.answers').get('length');
    if (countOfAnswers === 0) {
      return ' no answers have been submitted yet';
    }
    else {
      return 'this answer has been answered ' + countOfAnswers + ' times';
    }
  })
});
