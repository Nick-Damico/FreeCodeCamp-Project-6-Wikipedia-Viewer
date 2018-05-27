
describe('Wikipedia App UI', function() {
  let form;
  beforeEach(function() {
    form = document.getElementById('search');
  });

  it('has an H1 element with class "main__title"', function() {
    const title = document.querySelector('.header__title');
    expect(title.textContent).toEqual("Wiki Viewer");
  });

  it('has an form element with id "main__form"', function () {

    expect(form.getAttribute("id")).toEqual("search");
  });

});
