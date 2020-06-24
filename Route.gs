var Route = {};

Route.match = function(url, view) {
  Route[url] = view;
}

Route.run = function(e) {
  if (Route[e]) {
    return Route[e]();
  } else {
    return HtmlService.createTemplateFromFile(HOME_PAGE).evaluate();
  }
}