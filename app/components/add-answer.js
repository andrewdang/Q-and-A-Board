import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(question) {
      var params = {
        response: this.get('response'),
        user: this.get('user') ? this.get('user') : 'anonymous',
        question: question,
        date: new Date()
      };
      this.sendAction('addAnswer', params);
    }
  }
});
