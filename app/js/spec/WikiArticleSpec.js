

describe('Wiki Article', function() {

  const article_1 = {
    ns: 0,
    title: "Critical Role",
    pageid: 49082473,
    size: 34118,
    worldcount: 3100,
    snippet: "<span class=\"searchmatch\">Critical</span> <span class=\"searchmatch\">Role</span> is an American web series produced by Geek &amp; Sundry in which a group of professional voice actors play Dungeons &amp; Dragons. The series is",
    timestamp: "2018-03-20T07:30:33Z"
  }

  it('can be instantiated', function() {
    const wikiArticle = new WikiArticle();

    expect(wikiArticle).toBeDefined();
    expect(wikiArticle).toEqual(jasmine.any(WikiArticle));
  });

  it('has a unique id property', function() {
      const wikiArticle_2 = new WikiArticle();
      const wikiArticle_3 = new WikiArticle();

      expect(wikiArticle_2.id).toEqual(2);
      expect(wikiArticle_3.id).toEqual(3);
  })

  it('can be instantiated with an object', function() {
    const wikiArticle = new WikiArticle(article_1);

    expect(wikiArticle.title).toEqual("Critical Role");
    expect(wikiArticle.title).not.toEqual('Some Random Title');
    expect(wikiArticle.pageid).toEqual(49082473)
    expect(wikiArticle.summary).toBeDefined();
  });

  it('has properties, "title", "pageid", "summary", if instantiated with object', function() {
    const wikiArticle = new WikiArticle(article_1);

    expect(wikiArticle.title).toBeTruthy();
    expect(wikiArticle.pageid).toBeTruthy();
    expect(wikiArticle.summary).toBeTruthy();
    expect(wikiArticle.numer).not.toBeTruthy();
  })
})


describe('Wiki Article Summary', function() {

  const article_1 = {
    ns: 0,
    title: "Critical Role",
    pageid: 49082473,
    size: 34118,
    worldcount: 3100,
    snippet: "<span class=\"searchmatch\">Critical</span> <span class=\"searchmatch\">Role</span> is an American web series produced by Geek &amp; Sundry in which a group of professional voice actors play Dungeons &amp; Dragons. The series is",
    timestamp: "2018-03-20T07:30:33Z"
  }

  it('is formatted for output with html markup removed', function() {
    const wikiArticle = new WikiArticle(article_1);

    expect(wikiArticle.formatSummary()).toEqual("Critical Role is an American web series produced by Geek & Sundry in which a group of professional voice actors play Dungeons & Dragons. The series is");
  });
});
