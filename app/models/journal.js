import DS from 'ember-data';

export default DS.Model.extend({
  /**
   * Name of the journal (REQUIRED)
   */
  name: DS.attr('string'),
  nlmta: DS.attr('string'),
  pmcParticipation: DS.attr('string'/* , { defaultValue: 'B' } */), // default value for debugging pmc mechanism
  isMethodA: Ember.computed('pmcParticipation', function () {
    debugger
    return this.get('pmcParticipation').toLowerCase() === 'a';
  }),
  isMethodB: Ember.computed('pmcParticipation', function () {
debugger
    return this.get('pmcParticipation').toLowerCase() === 'b';
  })
  // issns: ...     Need to support array of strings in fedora-adapter
});
