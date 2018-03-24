console.log('wikipedia.js connected');
const API_RANDOM_URL = 'https://en.wikipedia.org/wiki/Special:Random';
const API_QUERY_URL = 'https://en.wikipedia.org/w/api.php';
const WIKI_URL = 'https://en.wikipedia.org/wiki/Main_Page';

function WikipediaViewer() {
  this.apiUrlRandom = API_RANDOM_URL;
  this.apiUrlQuery  = API_QUERY_URL;
  this.baseUrl      = WIKI_URL;
}
