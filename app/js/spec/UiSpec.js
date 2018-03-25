describe('Wikipedia App UI', function() {

  it('has an H1 element with class "main__title"', function() {
    const title = document.querySelector('.main__title');
    expect(title.textContent).toEqual("Wikipedia Viewer App");
  });
});
