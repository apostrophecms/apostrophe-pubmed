var ncbi = require('node-ncbi');
var moment = require('moment');

module.exports = function(self, options) {
	// sync route
  self.route('get', 'pubmed/:id', function(req, res) {
    if (req.params.id) {
      var id = req.params.id;
      ncbi.pubmed.summary(id).then((summary) => {
        doc = summary;
        ncbi.pubmed.abstract(id).then((abstract) => {
          // node-ncbi gives us a really stripped down version of the document
          // but includes the raw one as its own object
          // lets combine the best of both of these
          var full = doc.raw;
          full.authors = doc.authors;
          full.abstract = abstract;
          full.doi = doc.doi;
          full.pmid = doc.pmid;
          full.pubDate = moment(new Date(doc.pubDate)).format('YYYY-MM-DD');
          full.pubmedLink = 'https://www.ncbi.nlm.nih.gov/pubmed/' + doc.pmid;
          full.year = moment(new Date(full.pubDate)).format('YYYY');
          full.published = moment(new Date(full.pubDate)).format('LL');
          res.status(200).send({status: 'okay', body: full});
        }).catch((err) => {
          res.status(200).send({status: 'error', body: 'Could not find a matching PMID', error: true});
        });
      });
    } else {
      res.status(500).send('API Call to PubMed Failed');
    }
  });
}
