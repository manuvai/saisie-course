var Route = {};

Route.match = function(url, callback) {
  Route[url] = callback;
}

Route.render = function(args) {
  let template = HtmlService.createTemplateFromFile(MAIN_PAGE);
  
  if (args) {
    let keys = Object.keys(args);
    
    keys.forEach(function(key) {
      template[key] = args[key];
    });
  }
  
  return template.evaluate();
}

Route.run = function(url) {
  if (Route[url]) {
    return Route[url]();
  } else {
    return Route.render();
  }
}