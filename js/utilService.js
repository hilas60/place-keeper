'use strict'

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromLocalStorage(key) {
    var str = localStorage.getItem(key);
    var value = JSON.parse(str)
    return value;
}