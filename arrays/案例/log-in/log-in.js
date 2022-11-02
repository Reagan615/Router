'use strict';

let logIn = document.querySelector('.log-in');
let form = document.querySelector('.form');
let send = document.querySelector('.send');
let respond = document.querySelector('.respond');

let flag = 0;
logIn.addEventListener('click', function() {
    
    if(flag == 0) {
        form.style.visibility = 'visible';
        flag = 1;
    } else {
        form.style.visibility = 'hidden';
        flag = 0;
    }
});

/* send.addEventListener('click', function() {
    respond.style.visibility = 'visible';
    form.style.visibility = 'hidden';
}) */


send.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    respond.classList.add('move');
    setTimeout(() => {
        respond.classList.remove('move');
    }, 3000);
});

