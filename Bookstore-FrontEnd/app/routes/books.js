import Ember from 'ember';

/* Notes on limiting the amount of books to display:
Our case is similar. We are going to limit the book listing to 5 books – unless a specific amount of books is requested.

As we want to have a “Show All” button below the (limited) book
listing, we need to know the total amount of books in advance. The
API will have to send our client metadata telling us the total
number of books in the database.
*/

/* What’s
this queryParams business? It’s Ember’s implementation of
query parameters. Query parameters are good fit for passing
around UI state.
*/

export default Ember.Route.extend({
  queryParams: {
    limit: {  // when limit is supplied the model() hook will be called.
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('book', params);
    // we changed findAll for query! As findAll does not
    // accept query parameters for the XHR request.
  },

  actions: {

    addABook() {
      var storeCopy = this.store;  // needed so we this.store doesn't lose its reference inside the callback

      // author and book and book values are hardcoded for testing purposes
      this.store.findRecord('author', 4).then(function(foundAuthor) {

        const newBook = storeCopy.createRecord('book', {
          title: "****** 2nd added book from Sola",
          price: 75.00,
          author: foundAuthor,
          publisher: foundAuthor
        });

        newBook.save();
      });
    },
    //
    showAll() {
      const total = this.controllerFor('books').get('total');
      this.transitionTo({ queryParams: { limit: total }});
      // total comes from the books controller
      //   /app/controller/books.js
      // SEE controller NOTE at the VERY bottom
    },
    /* An action handler that came with extra lines of code! What’s
    this queryParams business? It’s Ember’s implementation of
    query parameters. Query parameters are good fit for passing
    around UI state.
    */
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }

});

/* but we are creating a controller… (our first one) the BooksController! This dude is required for making queryParams work.

Controllers are being deprecated yet we create one?

As we mentioned earlier, the idea behind controllers is one: to keep the state behind templates. And, at the moment of writing, indispensable to work with query parameters.

When routable component arrive the refactoring will be super easy. Instead of Ember.Controller.extend() we’ll be Ember.Component.extend()‘ing!
*/
