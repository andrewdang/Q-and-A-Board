import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  user: DS.attr(),
  date: DS.attr(),
  details: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
