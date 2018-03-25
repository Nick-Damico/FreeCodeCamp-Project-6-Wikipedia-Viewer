console.log('wiki article connected');
let idCount = 0;

function WikiArticle(obj=null) {
  idCount += 1;
  this.id = idCount;
  if (obj) {
      const { title, pageid, snippet } = obj;
      this.summary = snippet;
      this.title = title;
      this.pageid = pageid;
  }
}

WikiArticle.prototype.formatSummary = function() {
  const self = this;
  let formattedSummary = self.summary;
  // Remove &amp; HTML entities
  formattedSummary = formattedSummary.replace(/&amp;/g, '&');
  // Remove HTML markup from string
  formattedSummary = formattedSummary.replace(/(<span|<\/span>|class="\w*"|>)/g, '');
  // Remove any 'double' whitespaces and trim whitepaces from ends of string, then return
  return formattedSummary.replace("  ", " ").trim();
};
