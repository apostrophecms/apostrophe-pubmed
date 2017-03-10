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
{ uid: '28277220',
  pubdate: '2017 Mar 2',
  epubdate: '',
  source: 'Euro Surveill',
  authors: 'Peters T, Bertrand S, Björkman JT, Brandal LT, Brown DJ, Erdõsi T, Heck M, Ibrahem S, Johansson K, Kornschober C, Kotila SM, Le Hello S, Lienemann T, Mattheus W, Nielsen EM, Ragimbeau C, Rumore J, Sabol A, Torpdahl M, Trees E, Tuohy A, de Pinna E',
  lastauthor: 'de Pinna E',
  title: 'Multi-laboratory validation study of multilocus variable-number tandem repeat analysis (MLVA) for Salmonella enterica serovar Enteritidis, 2015.',
  sorttitle: 'multi laboratory validation study of multilocus variable number tandem repeat analysis mlva for salmonella enterica serovar enteritidis 2015',
  volume: '22',
  issue: '9',
  pages: '',
  lang: [ 'eng' ],
  nlmuniqueid: '100887452',
  issn: '1025-496X',
  essn: '1560-7917',
  pubtype: [ 'Journal Article' ],
  recordstatus: 'PubMed - in process',
  pubstatus: '4',
  articleids: 
   [ { idtype: 'pubmed', idtypen: 1, value: '28277220' },
     { idtype: 'doi',
       idtypen: 3,
       value: '10.2807/1560-7917.ES.2017.22.9.30477' },
     { idtype: 'pii', idtypen: 4, value: '30477' },
     { idtype: 'rid', idtypen: 8, value: '28277220' },
     { idtype: 'eid', idtypen: 8, value: '28277220' } ],
  history: 
   [ { pubstatus: 'received', date: '2016/01/14 00:00' },
     { pubstatus: 'accepted', date: '2016/05/10 00:00' },
     { pubstatus: 'entrez', date: '2017/03/10 06:00' },
     { pubstatus: 'pubmed', date: '2017/03/10 06:00' },
     { pubstatus: 'medline', date: '2017/03/10 06:00' } ],
  references: [],
  attributes: [ 'Has Abstract' ],
  pmcrefcount: '',
  fulljournalname: 'Euro surveillance : bulletin Europeen sur les maladies transmissibles = European communicable disease bulletin',
  elocationid: 'pii: 30477. doi: 10.2807/1560-7917.ES.2017.22.9.30477',
  doctype: 'citation',
  srccontriblist: [],
  booktitle: '',
  medium: '',
  edition: '',
  publisherlocation: '',
  publishername: '',
  srcdate: '',
  reportnumber: '',
  availablefromurl: '',
  locationlabel: '',
  doccontriblist: [],
  docdate: '',
  bookname: '',
  chapter: '',
  sortpubdate: '2017/03/02 00:00',
  sortfirstauthor: 'Peters T',
  vernaculartitle: '',
  abstract: 'Multilocus variable-number tandem repeat analysis (MLVA) is a rapid and reproducible typing method that is an important tool for investigation, as well as detection, of national and multinational outbreaks of a range of food-borne pathogens. Salmonella enterica serovar Enteritidis is the most common Salmonella serovar associated with human salmonellosis in the European Union/European Economic Area and North America. Fourteen laboratories from 13 countries in Europe and North America participated in a validation study for MLVA of S. Enteritidis targeting five loci. Following normalisation of fragment sizes using a set of reference strains, a blinded set of 24 strains with known allele sizes was analysed by each participant. The S. Enteritidis 5-loci MLVA protocol was shown to produce internationally comparable results as more than 90% of the participants reported less than 5% discrepant MLVA profiles. All 14 participating laboratories performed well, even those where experience with this typing method was limited. The raw fragment length data were consistent throughout, and the inter-laboratory validation helped to standardise the conversion of raw data to repeat numbers with at least two countries updating their internal procedures. However, differences in assigned MLVA profiles remain between well-established protocols and should be taken into account when exchanging data.',
  doi: '10.2807/1560-7917.ES.2017.22.9.30477',
  pmid: 28277220,
  pubDate: '2017/03/02 00:00',
  pubmedLink: 'https://www.ncbi.nlm.nih.gov/pubmed/28277220',
  year: '2017',
  published: 'March 2, 2017' }
```