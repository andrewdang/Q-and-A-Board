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
    }
  }
});
