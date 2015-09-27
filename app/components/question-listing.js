import Ember from 'ember';

export default Ember.Component.extend({
  sortedQuestionDates: ['date:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortedQuestionDates')
});
