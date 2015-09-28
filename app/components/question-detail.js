import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer: function(params) {
      this.sendAction('addAnswer', params);
    }
  }
});
