// iffe function call
(function IIFE(){
  // Instantiate Wikipedia Viewer Object.
  const WikiViewer = new WikipediaViewer();
  const searchForm = document.getElementById('search');
  const searchInput = document.getElementById('search__input');
  const articleContainer = document.getElementById('article_container');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const term = searchInput.value;
    searchInput.value = '';
    articleContainer.appendChild = '<span class="loading">Loading&amp;</span>';
    WikiViewer.getArticles(term);
  });


})();
