window.onload = function(){
  var buttonSearch = document.getElementById('button-search');
  var bookingForm = document.getElementById('booking-form');
  if (buttonSearch) {
    buttonSearch.onclick = function(){
      toggleClass(bookingForm, 'hidden');
    };
  }

  var guests = document.getElementsByClassName('guests');
  for(var i = 0; i < guests.length; i++) {
    (function(guest){
      var minus = guest.getElementsByClassName('button-minus')[0];
      var plus = guest.getElementsByClassName('button-plus')[0];
      var inp = guest.getElementsByTagName('input')[0];
      var inpMin = parseInt(inp.getAttribute('min'));
      var inpMax = parseInt(inp.getAttribute('max'));
      minus.onclick = function() {
        if(inp.value > inpMin) inp.value--;
      };
      plus.onclick = function() {
        if(inp.value < inpMax) inp.value++;
      };
    })(guests[i]);
  }

  var checkbox = document.getElementsByClassName('checkbox');
  for(var i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function(){
      toggleClass(this, 'checked');
    };
  }
};

function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}
