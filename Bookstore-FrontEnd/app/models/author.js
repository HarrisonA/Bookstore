// Original
/* import DS from 'ember-data';
/
export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book')
}); */
import Ember from 'ember';

import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  books: hasMany('book', { async: true }),

  // we somehow need to know when this record was loaded. Since
  // Ember Data still doesn’t support per-record metadata, which would
  // be ideal for this case, we are going to use a property on the model
  // that is set upon loading:
  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
});
