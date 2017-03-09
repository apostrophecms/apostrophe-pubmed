var ncbi = require('node-ncbi');

module.exports = function(self, options) {
	// sync route
  self.route('get', 'pubmed/:id', function(req, res) {
    if (req.params.id) {
      var id = req.params.id;
      ncbi.pubmed.summary(id).then((summary) => {
        doc = summary;
        ncbi.pubmed.abstract(id).then((abstract) => {
          doc.abstract = abstract;
          res.status(200).send({status: 'okay', body: doc});
        }).catch((err) => {
          res.status(200).send({status: 'error', body: 'Could not find a matching PMID', error: true});
        });
      });
    } else {
      res.status(500).send('API Call to PubMed Failed');
    }
  });
}