import Component from '@ember/component';

export default Component.extend({
  validDOI: true,
  validTitle: true,
  actions: {
    validateDOI() {
      const doi = this.get('model.doi');
      const newDOIRegExp = /^10.\d{4,9}\/[-._;()/:A-Z0-9]+$/i;
      const ancientDOIRegExp = /^10.1002\/[^\s]+$/i;
      this.set('validDOI', doi == null || newDOIRegExp.test(doi) || ancientDOIRegExp.test(doi));
    },
    validateTitle() {
      const title = this.get('model.title');
      this.set('validTitle', title == null || title.length > 5);
    }
  }
});
