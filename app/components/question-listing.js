import Ember from 'ember';

export default Ember.Component.extend({
  sortedQuestionDates: ['date:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortedQuestionDates')
});
