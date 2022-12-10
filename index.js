// define a function that creates the navigation pane
function createNavigation() {
  // create a container element for the navigation pane
  var nav = document.createElement('div');
  nav.id = 'navigation';

  // add a shadow and rounded corners to the navigation pane
  nav.style.boxShadow = '2px 2px 5px 0px rgba(0,0,0,0.75)';
  nav.style.borderRadius = '15px 15px 15px 0';

  // create a list element to hold the header links
  var navList = document.createElement('ul');

  // loop through all of the elements on the page
  var elements = document.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    // check if the current element is a header (h1, h2, or h3)
    if (elements[i].tagName.match(/^h[1-3]$/i)) {
      // create a list item and link for the header element
      var item = document.createElement('li');
      var link = document.createElement('a');

      // set the link's href attribute to the id of the header element
      link.href = '#' + elements[i].id;

      // set the link text to the header text
      link.innerText = elements[i].innerText;

      // add a style attribute to the list item to indent it based on the header level
      item.style.paddingLeft = (elements[i].tagName.match(/^h[1-3]$/i)[0][1] - 1) * 20 + 'px';

      // if the header is an h1, set the font weight to bold
      if (elements[i].tagName.toLowerCase() === 'h1') {
        item.style.fontWeight = 'bold';
        item.style.textDecoration = 'underline';
      }

      // append the link to the list item, and the list item to the navigation list
      item.appendChild(link);
      navList.appendChild(item);
    }
  }

  // append the navigation list to the navigation pane
  nav.appendChild(navList);

  // insert the navigation pane into the page
  document.body.insertBefore(nav, document.body.firstChild);
}
