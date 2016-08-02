import Ember from 'ember';

export default Ember.Component.extend({
  // open and close are action in the purchase modal
  actions:{
    open(){
      //reload the model every time a user opens the modal (get any updates form the DB)
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
        this.get('blurBackground')(true);
      });
    },
    close(){
      this.set('isShowingModal', false);
      this.get('blurBackground') (false);
    }
}
});
