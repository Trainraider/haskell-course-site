// define a function that creates the navigation pane
function createNavigation() {
  // create an array to store the header elements
  var headers = [];

  // find all the h1, h2, and h3 elements on the page and add them to the headers array
  headers = headers.concat(Array.from(document.querySelectorAll('h1')));
  headers = headers.concat(Array.from(document.querySelectorAll('h2')));
  headers = headers.concat(Array.from(document.querySelectorAll('h3')));

  // create a container element for the navigation pane
  var nav = document.createElement('div');
  nav.id = 'navigation';

  // add a shadow and rounded corners to the navigation pane
  nav.style.boxShadow = '2px 2px 5px 0px rgba(0,0,0,0.75)';
  nav.style.borderRadius = '5px 5px 0 0';

  // create a list element to hold the header links
  var navList = document.createElement('ul');

  // loop through the headers array and create a list item and link for each header
  for (var i = 0; i < headers.length; i++) {
    // create the list item and link elements
    var item = document.createElement('li');
    var link = document.createElement('a');

    // set the link's href attribute to the id of the header element
    link.href = '#' + headers[i].id;

    // set the link text to the header text
    link.innerText = headers[i].innerText;

    // append the link to the list item, and the list item to the navigation list
    item.appendChild(link);
    navList.appendChild(item);
  }

  // append the navigation list to the navigation pane
  nav.appendChild(navList);

  // insert the navigation pane into the page
  document.body.insertBefore(nav, document.body.firstChild);
}
