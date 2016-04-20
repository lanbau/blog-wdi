import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
    // Alternative Method
    // return this.store.find('post', params.post_id)
  }
});
