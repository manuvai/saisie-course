function doGet(e) {
  log(e);
  log(new Article("banane", "barrCode"));
  return HtmlService.createHtmlOutputFromFile("home");
}

function log(data) {
  console.log(data);
}
