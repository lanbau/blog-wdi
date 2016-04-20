import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      this.sendAction('edit')
    }
  }
});
