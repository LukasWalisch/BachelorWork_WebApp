import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    testAction(){
      this.get('network').moveTo({
        position: {x:100, y:50},
        scale: 10,
        offset: {x: 500, y: 500},
        locked: false,
        animation: false
      })
  }},

  options: {
    height: '400px',
    width: '100%',
    nodes: {
      fixed: true,
      color: '#ff4000'
    },
    layout: {
      hierarchical: {
        enabled: true
      }
    },
    physics: {
      enabled: false
    },
    manipulation: {
      enabled: false
    }
  },
});
