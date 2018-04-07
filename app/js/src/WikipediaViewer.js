const API_RANDOM_URL = 'http://en.wikipedia.org/w/api.php?action=query&origin=*&generator=random&grnnamespace=0&prop=extracts&exchars=200&format=json';
const API_QUERY_URL = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=info&inprop=url&utf8=&format=json&list=search&srsearch=';
const WIKI_URL = 'https://en.wikipedia.org/?curid=';

function WikipediaViewer() {
  this.apiUrlRandom = API_RANDOM_URL;
  this.apiUrlQuery  = API_QUERY_URL;
  this.baseUrl      = WIKI_URL;
  this.articles = [];
}

WikipediaViewer.prototype.displayArticles = function() {
  let htmlArticles;
  let articleContainer = document.getElementById('article_container');
  for( let article of this.articles ){
    htmlArticles += '<div class="article">';
      htmlArticles += `<h2 class="article__title"><a target="_blank" href="${this.baseUrl + article.pageid}">${article.title}</a></h2>`;
      htmlArticles += `<p class="article__text">${article.formatSummary()}</p>`;
    htmlArticles += '</div>';
  }
  // Remove a string of "undefined" that is in this html string? Not sure whats causing it.
  articleContainer.innerHTML = htmlArticles.replace(undefined, '');
};

WikipediaViewer.prototype.getArticles = function(term) {
  const self = this;
  self.articles = [];
  fetch(this.apiUrlQuery + term)
  .then(res => res.json())
  .catch(e => console.error(e))
  .then(json => {
    let collection = json.query.search;
    for (let item of collection) {
      let newArticle = new WikiArticle(item);
      self.articles.push( newArticle );
    }
    self.displayArticles();
  })
};

WikipediaViewer.prototype.getRandom = function() {
  const self = this;
  self.articles = [];
  fetch(this.apiUrlRandom)
  .then(res => res.json())
  .catch(e => console.error(e))
  .then(json => {
    let page = json.query.pages;
    let key = Object.keys(page)[0];
    page = page[key];
    let newObj = Object.assign({}, {title: page.title, snippet: page.extract, pageid: page.pageid});
    let newArticle = new WikiArticle(newObj);
    self.articles.push( newArticle );
    self.displayArticles();
  })
}
