import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  sortedQuestionDates: ['date:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortedQuestionDates')
});
