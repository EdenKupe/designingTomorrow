anchors.add('h3');
generateTableOfContents(anchors.elements);

// External code for generating a simple dynamic Table of Contents
function generateTableOfContents(els) {
	var anchoredElText,
  		anchoredElHref,
			ul = document.createElement('UL');

  document.getElementById('table-of-contents').appendChild(ul);

	for (var i = 0; i < els.length; i++) {
  	anchoredElText = els[i].textContent;
		anchoredElHref = els[i].querySelector('.anchorjs-link').getAttribute('href');
  	addNavItem(ul, anchoredElHref, anchoredElText);
  }
}

function addNavItem(ul, href, text) {
    var listItem = document.createElement('LI');
    var anchorItem = document.createElement('A');
  	var textNode = document.createTextNode(text);
  
  anchorItem.href = href;
  ul.appendChild(listItem);
  listItem.classList.add('anchorItem');
  listItem.appendChild(anchorItem);
  anchorItem.appendChild(textNode);
}