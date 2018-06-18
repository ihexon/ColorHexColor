(function() {
  'use strict';

  function displayHexClock() {
    // Get the current time
    var clock = new Date(),
        h = clock.getHours(),
        m = clock.getMinutes(),
        s = clock.getSeconds();

    // Make sure that hours, minutes, and seconds are all 2 digits each
    if(h.toString().length < 2) { h = '0' + h; }
    if(m.toString().length < 2) { m = '0' + m; }
    if(s.toString().length < 2) { s = '0' + s; }

    var time = h + ':' + m + ':' + s;
    var color = '#' + h + m + s;

    // Change the background color to the hex color of the current time
    document.body.style.background = color;

    // Insert and update the current time
    document.getElementById('time').innerHTML = time;

    // Insert and Uupdate the current hex value
    document.getElementById('hexColor').innerHTML = 'HEXCOLOR:' + color;
  }

  window.onload = function() {
    // Update the clock every second
    displayHexClock();
    setInterval(displayHexClock, 1000);
  };
})();
