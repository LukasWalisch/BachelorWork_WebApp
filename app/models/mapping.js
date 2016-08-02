import DS from 'ember-data';

export default DS.Model.extend({

  patternId: DS.belongsTo('pattern'),
  tacticId: DS.belongsTo('tactic'),
  info: DS.attr('string')

});
