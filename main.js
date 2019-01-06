(function() {
  'use strict';
  
  var pairs = 2;
  
  function init() {
    var i;
    for (i = 1; i <= pairs; i++) {
      document.getElementById('stage').appendChild(createCard(i));
      document.getElementById('stage').appendChild(createCard(i));
    }
  }
  
  function createCard(num) {
    var container;
    var card;
    var inner;
    inner = '<div class="card-front">' + num + '</div><div class="card-back">?</div>';
    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';
    card.addEventListener('click', function() {
      card.className = 'card open';
    });
    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);
    return container;
  }
  
  init();
})();