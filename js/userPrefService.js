'use strict'

var gUserPrefs = {
    bgColor:'white',
    textColor:'black'
}
function doSubmit(inputs){
    // destructuring object
    // var {bgColor, textColor} = gUserPrefs
    // console.log(bgColor, textColor);
    // var {bgColor, textColor} = {bgColor: newBgColor, textColor: newTxtColor}
    // console.log(bgColor, textColor);
    // gUserPrefs.bgColor = newBgColor;
    // gUserPrefs.textColor = newTxtColor;
    // savePrefsToStorage(prefs, gUserPrefs)
    // var name = inputs.name;
    // console.log(name);
    
}

function savePrefsToStorage(key, value) {
    saveToLocalStorage(key, value);
}