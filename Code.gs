function doGet(e) {
  Route.match('home', home);
  
  Route.match('about', about);
  
  return Route.run(e.parameter.v);
}

function home() {
  let args = {
    title: "Home page",
    pageContent: include('home'),
  };
  
  return Route.render(args);
}

function about() {
  let args = {
    title: "About",
    pageContent: include('about'),
  };
  
  return Route.render(args);
  
}

/**
 *  Allows the web page to add style or JS scripts.
 */

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
         .getContent();
}

function log(data) {
  console.log(data);
}
