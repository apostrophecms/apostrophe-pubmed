# apostrophe-pubmed

Simple `apostrophe-pieces` subclass with extra editor modal interface that uses one of your schema fields as a sync input from the PubMed API.

Use in conjunction with [`apostrophe-pubmed-import`](https://github.com/punkave/apostrophe-pubmed-import) to double your fun.

![img](https://dl.dropboxusercontent.com/content_link/8tAc0pIgeGjbGki36znUcy34rSInc5WBdd3DlTVAxE9Z0TJXGDj8XzWLfmdtZtWX/file?dl=0&duc_id=uVQ6USkWIEkfzkYFLE8c92PthO2woRIochjAwSQCaDbrx8Q1vQgK2MhuSBbrGQwo&raw=1&size=2048x1536&size_mode=3)

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
    }
  }
}
```

## Example PubMed object
```javascript
{
  "uid": "28265654",
  "pubdate": "2017 Mar 7",
  "epubdate": "",
  "source": "Ann Intern Med",
  "authors": "Briatore L, Pozzi I",
  "lastauthor": "Pozzi I",
  "title": "Annals Graphic Medicine - Something Strange.",
  "sorttitle": "annals graphic medicine something strange",
  "volume": "166",
  "issue": "5",
  "pages": "W5-W6",
  "lang": [
    "eng"
  ],
  "nlmuniqueid": "0372351",
  "issn": "0003-4819",
  "essn": "1539-3704",
  "pubtype": [
    "Journal Article"
  ],
  "recordstatus": "PubMed - in process",
  "pubstatus": "4",
  "articleids": [
    {
      "idtype": "pubmed",
      "idtypen": 1,
      "value": "28265654"
    },
    {
      "idtype": "pii",
      "idtypen": 4,
      "value": "2607783"
    },
    {
      "idtype": "doi",
      "idtypen": 3,
      "value": "10.7326\/G16-0026"
    },
    {
      "idtype": "rid",
      "idtypen": 8,
      "value": "28265654"
    },
    {
      "idtype": "eid",
      "idtypen": 8,
      "value": "28265654"
    }
  ],
  "history": [
    {
      "pubstatus": "entrez",
      "date": "2017\/03\/08 06:00"
    },
    {
      "pubstatus": "pubmed",
      "date": "2017\/03\/08 06:00"
    },
    {
      "pubstatus": "medline",
      "date": "2017\/03\/08 06:00"
    }
  ],
  "references": [
    
  ],
  "attributes": [
    
  ],
  "pmcrefcount": "",
  "fulljournalname": "Annals of internal medicine",
  "elocationid": "doi: 10.7326\/G16-0026",
  "doctype": "citation",
  "srccontriblist": [
    
  ],
  "booktitle": "",
  "medium": "",
  "edition": "",
  "publisherlocation": "",
  "publishername": "",
  "srcdate": "",
  "reportnumber": "",
  "availablefromurl": "",
  "locationlabel": "",
  "doccontriblist": [
    
  ],
  "docdate": "",
  "bookname": "",
  "chapter": "",
  "sortpubdate": "2017\/03\/07 00:00",
  "sortfirstauthor": "Briatore L",
  "vernaculartitle": "",
  "abstract": null,
  "doi": "10.7326\/G16-0026",
  "pmid": 28265654,
  "pubDate": "2017\/03\/07 00:00"
}
```