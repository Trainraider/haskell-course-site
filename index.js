async function loadPage() {
  await loadMarkdown();
  createNavigation();
  underlineHeaders();
}

// define a function that creates the navigation pane
function createNavigation() {
  // create a container element for the navigation pane
  var nav = document.createElement('div');
  nav.id = 'navigation';

  // add a shadow and rounded corners to the navigation pane
  nav.style.boxShadow = '2px 2px 5px 0px rgba(0,0,0,0.75)';
  nav.style.borderRadius = '15px 15px 15px 0';

  var headers = document.querySelectorAll('#content h1, #content h2, #content h3');

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
      var headerLevel = elements[i].tagName.match(/^h[1-3]$/i)[0][1] - 1;

      // set the link's href attribute to the id of the header element
      link.href = '#' + elements[i].id;

      // set the link text to the header text
      link.innerText = elements[i].innerText;
      wordWrapLPad(link, 180, headerLevel);
      //link.innerText = elements[i].innerText;

      // add a style attribute to the list item to indent it based on the header level
      // item.style.paddingLeft = (elements[i].tagName.match(/^h[1-3]$/i)[0][1] - 1) * 20 + 'px';

      // if the header is an h1, set the font weight to bold and underline
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

async function loadMarkdown () {
  return fetch('markdown.md')
  .then(response => response.text())
  .then(markdown => {
    // convert the Markdown content to HTML
    var html = marked.parse(markdown);

    // find the div element with id "content"
    var contentDiv = document.querySelector('#content');

    // add the HTML content to the div element
    contentDiv.innerHTML = contentDiv.innerHTML + html;
  })
}

function underlineHeaders () {
  // select all the h1 elements on the page
  var h1Elements = document.querySelectorAll('h1');

  // loop through the h1 elements
  for (var i = 0; i < h1Elements.length; i++) {
    // create a horizontal rule element
    var hr = document.createElement('hr');
    hr.style.color = 'rgb(30, 0, 100)';

    // insert the horizontal rule after the h1 element
    h1Elements[i].insertAdjacentElement('afterend', hr);
  }
}

function wordWrapLPad(element = HTMLElement, width, lPadSpaces) {
  // Get the text content of the element
  let text = element.textContent;
  element.style.whiteSpace = 'pre'
  
  
  // Split the text into words
  let words = text.split(' ');
  
  // Create a new array to store the wrapped text
  let wrappedText = [];
  
  // Initialize the current line to an empty string
  let currentLine = ' '.repeat(lPadSpaces);
  
  // Iterate over each word in the text
  for (let word of words) {
    // If the current line + the current word would be wider than the width
    // limit, add the current line to the wrapped text array and start a new line
    if (getTextWidth(currentLine + word, getCanvasFont(element)) > width) {
      wrappedText.push(currentLine);
      currentLine = ' '.repeat(lPadSpaces);
    }
    
    // Add the current word to the current line
    currentLine += word + ' ';
  }
  
  // Add the final line to the wrapped text array
  wrappedText.push(currentLine);
  
  // Set the element's text content to the wrapped text
  element.textContent = wrappedText.join('\n');
}

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  canvas.style.whiteSpace = "pre";
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

function getCanvasFont(el = document.body) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
  
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}
