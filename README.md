# apostrophe-pubmed

Simple `apostrophe-pieces` subclass with extra editor modal interface that uses one of your schema fields as a sync input from the PubMed API.

Use in conjunction with [`apostrophe-pubmed-import`](https://github.com/punkave/apostrophe-pubmed-import) to double your fun.

## in app.js

```javascript
modules: {
  'my-module-that-extends-pieces': {
    pubmed: {
      enhanceField: 'pubmedid',
      // required, it is one of your schema field names where the editor will paste in a PubMed ID
      // this field will be enhanced with a Sync from PubMed button in the editor modal
      mapFields: {
        'title' : 'title',
        'abstractPiece' : 'abstract',
        'authors' : 'authors',
        'pubDate' : 'pubDate'
      },
      // required, key is Piece field name, value is pubmed document key
      // pubmed keys are `abstract`, `authors`, `doi`, `pmid`, `pubDate`, `title`, `raw`
      // these fields will be autopopulated when a valid response is returned
    }
  }
}
```