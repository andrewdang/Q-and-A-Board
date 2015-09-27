import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,

  actions: {
    showQuestionForm: function() {
      this.set('newQuestionForm', true);
    },

    hideQuestionForm: function() {
      this.set('newQuestionForm', false);
    }
  }
});
