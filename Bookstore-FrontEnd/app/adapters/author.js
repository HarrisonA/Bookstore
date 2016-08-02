import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  /* since authors rarely publish new books, we will override
  shouldReloadRecord and shouldBackgroundReloadRecord to only
  refresh the model if more than an hour has passed since loading it
  */

  shouldReloadRecord(store, snapshot) {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("Calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');

    // if it was loaded more than an hour ago
    if (Date.now() - loadedAt > 3600000) {
      return true;
    } else {
      return false;
    }
  }
});
