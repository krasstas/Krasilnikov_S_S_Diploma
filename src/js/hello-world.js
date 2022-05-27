"use strict";

(() => {
  let h = document.querySelector('.hello-word');
  let iteration = 1;

  const interval = setInterval(() => {
    if (iteration === 4) {
      clearInterval(interval);
    }

    if (iteration <= 3) {
      h.innerHTML += '.'; 
    }

    if (iteration === 4) {
      h.innerHTML = h.innerHTML.replaceAll('.', '!');
    }

    ++iteration;


  }, 300);

})();