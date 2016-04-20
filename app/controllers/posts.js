import Ember from 'ember';
import DS from 'ember-data'

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var self = this
      var title = self.get('title');
      var body = self.get('body');

      // Make User 1 the default author
      var user = this.store.peekRecord('user', 1)
      var newPost = this.store.createRecord('post', {
        title: title,
        body: body,
        user: user
      })
      // visit localhost/post/5 to confirm
      newPost.save();

    }
  }
});
