import Ember from 'ember';

export default Ember.Controller.extend({
  isInEditMode: false,
  actions: {
    edit: function() {
      this.set('isInEditMode', true)
    },
    save: function(post) {
      console.log('save', post)
      this.set('isInEditMode', false)
      post.save();

    },
    cancel: function() {
      console.log('cancelling')
      this.set('isInEditMode', false)
    }
  }
});
