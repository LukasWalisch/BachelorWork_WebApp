import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  info: DS.attr('string'),
  parentTacticId: DS.belongsTo('tactic'),
  childTacticIds: DS.hasMany('tactic'),
  mappingIds: DS.hasMany('mapping')

});
