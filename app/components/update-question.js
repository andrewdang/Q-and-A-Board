import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    showEditForm() {
      this.set('editQuestionForm', true);
    },

    hideEditForm() {
      this.set('editQuestionForm', false);
    },

    destroyQuestion(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    updateQuestion(question) {
      var params = {
        query: this.get('query'),
        user: this.get('user'),
        date: this.get('date'),
        details: this.get('details'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
