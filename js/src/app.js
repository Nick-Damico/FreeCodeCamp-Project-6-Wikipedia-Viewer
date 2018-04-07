// iffe function call
(function IIFE(){
  // Instantiate Wikipedia Viewer Object.
  const WikiViewer = new WikipediaViewer();
  const searchForm = document.getElementById('search');
  const searchInput = document.getElementById('search__input');
  const searchBtnRandom = document.getElementById('search__btn--random');
  const articleContainer = document.getElementById('article_container');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (searchInput.value.length > 2) {
      const term = searchInput.value;
      searchInput.value = '';
      articleContainer.appendChild = '<span class="loading">Loading&amp;</span>';
      WikiViewer.getArticles(term);
    }
  });

  searchBtnRandom.addEventListener('click', function() {
    WikiViewer.getRandom();
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
