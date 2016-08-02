import Ember from 'ember';
const { computed } = Ember;

// See Side note on controllers: AT THE VERY BOTTOM

export default Ember.Controller.extend({
  queryParams: ['limit'],
  limit: 5,

  total: computed('model.meta', function() {
    return this.get('model.meta').total;
  }),

  showAll: computed('total', 'model', function() {
    return this.get('total') > this.get('model.length');
  })
});
  /* Explanation of above:
    First, add our queryParams and their state as controller properties. Check.
    Second, use computed properties to bind the model’s
    metadata (via model.meta) to our missing variable total!
    */


/*  SIDE NOTE on controllers
We are creating a controller… (our first one) the BooksController!
This dude is required for making queryParams work.

Controllers are being deprecated yet we create one?

As we mentioned earlier, the idea behind controllers is one: to keep
the state behind templates. And, at the moment of writing,
indispensable to work with query parameters.

When routable component arrive the refactoring will be super
easy. Instead of Ember.Controller.extend() we’ll
be Ember.Component.extend()‘ing!
*/
