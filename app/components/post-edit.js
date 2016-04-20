import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var post = this.get('post')
      this.sendAction('save', post)
    },
    cancel: function() {
      this.sendAction('cancel')
    }
  }
});
