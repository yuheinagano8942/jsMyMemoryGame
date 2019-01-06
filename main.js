(function() {
  'use strict';
  
  var pairs = 4;
  
  function init() {
    var i;
    for (i = 1; i <= pairs; i++) {
      document.getElementById('stage').appendChild(createCard(i));
      document.getElementById('stage').appendChild(createCard(i));
    }
  }
  
  init();
})();