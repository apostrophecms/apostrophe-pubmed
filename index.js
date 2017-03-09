module.exports = {
  name: 'apostrophe-pubmed',
  alias: 'pubmed',
  label: 'PubMed',
  extend: 'apostrophe-pieces',

  beforeConstruct: function(self, options) {

  },

  afterConstruct: function(self, callback) {
    self.pubmedAddRoute();
    return setImmediate(callback);
  },

  construct: function(self, options) {

    var superGetCreateSingletonOptions = self.getCreateSingletonOptions;
    self.getCreateSingletonOptions = function(req) {
      var browserOptions = superGetCreateSingletonOptions(req);
      browserOptions.pubmedConfig = self.options.pubmed
      return browserOptions;
    };

    self.pubmedAddRoute = function() {
      require('./lib/routes.js')(self, options);
    };

    self.pushAsset('script', 'editor-modal', { when: 'user' });
    self.pushAsset('stylesheet', 'user', { when: 'user' });
  }
}