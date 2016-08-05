import Ember from 'ember';

export default Ember.Component.extend({
  // Using Ember's dependency injection to access the store from within a component
  store: Ember.inject.service(),

  actions: {
    submitUserBook(){
      const newTitle = this.get('title');
      const newAuthor = this.get('author'); // not currently used
      const newPublisher = this.get('publisher');  // not currently used
      const newPrice = this.get('price');


      // Fetch reference to store as a property on this component
      var storeReference = this.get('store');

      // author ID is hardcoded as "4" for now.  TODO: Add feature to get this from the DB
      storeReference.findRecord('author', 4).then(function(foundAuthor) {

        const newBook = storeReference.createRecord('book', {
          title: newTitle,
          price: newPrice,
          author: foundAuthor,
          publisher: foundAuthor
        });

        newBook.save();
      });
    }
  }

});
