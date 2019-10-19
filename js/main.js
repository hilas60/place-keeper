'use strict'
init()

function init() {
    renderStyle()
}

function onSubmit(ev) {
    var name = document.querySelector('#name').value;
    var dob = document.querySelector('#dob').value;
    var bgColor = document.querySelector('#bgColor').value;
    var txtColor = document.querySelector('#txtColor').value;
    doSubmit(name, dob, bgColor, txtColor);
    renderStyle();
    renderHoroscope();
    ev.preventDefault();
}

function renderStyle() {
    var userData = getUserData();
    var elBodyStyle = document.querySelector('body').style;
    if (userData) {
        elBodyStyle.color = userData.txtColor;
        elBodyStyle.background = userData.bgColor;
    } else {
        elBodyStyle.color = 'black'
        elBodyStyle.background = 'lightBlue';
    }
}

function renderHoroscope() {
    hideHoroscope();
    var num = getRandomIntInclusive(1, 4);
    var horoscopeNum;
    switch (num) {
        case 1:
            horoscopeNum = 'horoscope1'
            break;

        case 2:
            horoscopeNum = 'horoscope2'
            break;

        default: horoscopeNum = 'horoscope3'
            break;
    }
    document.querySelector(`.${horoscopeNum}`).classList.remove('hide')
}

function hideHoroscope() {
    var elsHoroscope = document.querySelectorAll(`.horoscope`);
    for (let i = 0; i < elsHoroscope.length; i++) {
        const element = elsHoroscope[i];
        element.classList.add('hide');
    }
}