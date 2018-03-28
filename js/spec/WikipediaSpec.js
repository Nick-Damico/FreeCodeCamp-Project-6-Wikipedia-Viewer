
describe('Wikipedia Viewer', function() {
  let wikipediaViewer;

  beforeEach(function(){
    wikipediaViewer = new WikipediaViewer();
  })


  it('instance can be created', function() {

    expect(wikipediaViewer).toBeDefined();
  });

  it("has property 'apiKeyRandom' on instantiation for fetching random article", function() {

    expect(wikipediaViewer.apiUrlRandom).toBeDefined();
    expect(wikipediaViewer.apiUrlRandom).toEqual(API_RANDOM_URL)
  });

  it("has property 'apiKeyQuery' on instantiation for fetching articles with query string", function() {

    expect(wikipediaViewer.apiUrlQuery).toBeDefined();
    expect(wikipediaViewer.apiUrlQuery).toEqual(API_QUERY_URL);
  })

  it("has property baseUrl for linking to article page", function() {

    expect(wikipediaViewer.baseUrl).toBeDefined();
    expect(wikipediaViewer.baseUrl).toEqual(WIKI_URL);
  });

});
