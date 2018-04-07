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

  function backToTopBtn() {
    const backTopBtn = document.querySelector('#backToTopbtn');
    console.log(backTopBtn);
    console.log(window.pageYOffset);
    if (pageYOffset > 360) {
      backTopBtn.setAttribute('class', 'back__btn--on');
    } else if (backTopBtn.getAttribute('class') === 'back__btn--on') {
      backTopBtn.removeAttribute('class', 'back__btn--on');
    }
  }

  window.addEventListener('scroll', backToTopBtn);


})();
