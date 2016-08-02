import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {

   /*
    mappings: this.store.findAll('mapping'),
    tactics: this.store.findAll('tactic'),
    patterns: this.store.findAll('pattern')
    */
    
    return this.store.findAll('mapping');
  }

});
