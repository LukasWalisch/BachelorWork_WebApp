import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  info: DS.attr('string'),
  relatedPatternIds: DS.hasMany('pattern'),
  mappingIds: DS.hasMany('mapping')
});
