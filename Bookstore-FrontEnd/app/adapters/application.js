import DS from 'ember-data';

// from tutorial - Deprecated???
//import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';



export default DS.JSONAPIAdapter.extend({
  // override a function called pathForType that will
  // underscore (and pluralize) the type
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },

  
});
