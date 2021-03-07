// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

window.onscroll = function(){
  changeBackground()
}

function changeBackground() {
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    var body = document.getElementById('mainBody');
    // At specific positions of the window scroll, change the images by adding
    // or removing the appropriate classes
    if (scrollBarPosition > 300 && scrollBarPosition < 800) {
        body.classList.add('backgroundSecond');
        body.classList.remove('backgroundThird');
    } else if (scrollBarPosition > 800) {
        body.classList.add('backgroundThird');
    } else if (scrollBarPosition < 300) {
      body.classList.remove('backgroundSecond');
      body.classList.remove('backgroundThird');
    }
}

