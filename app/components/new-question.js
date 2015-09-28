import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,

  actions: {
    showQuestionForm() {
      this.set('newQuestionForm', true);
    },

    hideQuestionForm() {
      this.set('newQuestionForm', false);
    },

    saveQuestion() {
      var params = {
        query: this.get('query'),
        user: this.get('user') ? this.get('user') : 'anonymous',
        date: new Date(),
        details: this.get('details'),
      };
      this.set('newQuestionForm', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
