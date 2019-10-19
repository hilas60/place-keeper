'use strict'
const USER_DATA_KEY = 'userData';

function doSubmit(name, dob, bgColor, txtColor) {
    var userData = {
        name, dob,
    }
    userData.bgColor = (!bgColor) ? 'white' : bgColor;
    userData.txtColor = (!txtColor) ? 'black' : txtColor;
    savePrefsToStorage(USER_DATA_KEY, userData)
}

function savePrefsToStorage(key, value) {
    saveToLocalStorage(key, value);
}

function getUserData() {
    return loadFromLocalStorage(USER_DATA_KEY)
}

// function getZodiacSign(day, month) {
//     var zodiacSigns = {
//       'capricorn':'Capricorn ' + U+2651,
//       'aquarius':'Aquarius U+2652',
//       'pisces':'Pisces U+2653',
//       'aries':'Aries U+2648',
//       'taurus':'Taurus U+2649',
//       'gemini':'Gemini U+264A',
//       'cancer':'Cancer U+264B',
//       'leo':'Leo U+264C',
//       'virgo':'Virgo U+264D',
//       'libra':'Libra U+264E',
//       'scorpio':'Scorpio U+264F',
//       'sagittarius':'Sagittarius U+2650'
//     }

//     if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
//       return zodiacSigns.capricorn;
//     } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
//       return zodiacSigns.aquarius;
//     } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//       return zodiacSigns.pisces;
//     } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
//       return zodiacSigns.aries;
//     } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
//       return zodiacSigns.taurus;
//     } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
//       return zodiacSigns.gemini;
//     } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
//       return zodiacSigns.cancer;
//     } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
//       return zodiacSigns.leo;
//     } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
//       return zodiacSigns.virgo;
//     } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
//       return zodiacSigns.libra;
//     } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
//       return zodiacSigns.scorpio;
//     } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
//       return zodiacSigns.sagittarius;
//     }
//   }


// IF Will decide to get specific userData
// function createSpecUserKey(name) {
//     return USER_DATA_KEY + name;    
// }



// doSubmit with destructuring
// function doSubmit {
// destructuring object
// var {bgColor, textColor} = gUserPrefs
// console.log(bgColor, textColor);
// var {bgColor, textColor} = {bgColor: newBgColor, textColor: newTxtColor}
// console.log(bgColor, textColor);
// gUserPrefs.bgColor = newBgColor;
// gUserPrefs.textColor = newTxtColor;
// var name = inputs.name;
// console.log(name);
// }