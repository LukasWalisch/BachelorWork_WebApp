import Ember from 'ember';


export default Ember.Controller.extend({

  network: false,
  actions: {
    moveIt: () => {
      this.graph.focus(1,{
        scale: 1.0,
        offset: {x: 0, y: -100},
        animation: true
      })
  }},

  options: {
    height: '400px',
    width: '100%',
    nodes: {
      color: '#ff4000'
    },
    physics: {
      enabled: false
    },
    manipulation: {
      enabled: true
    }
  },

  renderNetwork: () => {
    var nodes = [
      {id: 1, label: 'a'},
      {id: 2, label: 'b'},
      {id: 3, label: 'c'},
    ];
    var edges = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 3},
    ];

    var events = [
    ]

    var container =  document.getElementById('visual-container');
    var data = {
      nodes: nodes,
      edges: edges
    };

    var options = {
      height: '400px',
      width: '100%',
      nodes: {
        color: '#ff4000'
      },
      physics: {
        enabled: false
      },
      manipulation: {
        enabled: true
      }
    };

    let network = new vis.Network(container, data, options);

  },

  init(){
    this._super();
    Ember.run.schedule('afterRender', this, function() {
      this.renderNetwork();
    })
  },

  graph : {}

});
