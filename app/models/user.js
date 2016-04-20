import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  createdAt : DS.attr('date'),
  posts : DS.hasMany('post')
});
