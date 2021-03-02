// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

window.onscroll=function(){changeBackground()}

function changeBackground()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

    // At specific position do what you want 
    if(scrollBarPosition > 500) {
        var body = document.getElementById('mainBody');
        body.classList.add('backgroundSecond');
    }
    else {
      var body = document.getElementById('mainBody');
      body.classList.remove('backgroundSecond');
    }
}

