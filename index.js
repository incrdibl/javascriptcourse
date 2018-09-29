/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
//    if (minutes + interval == 60 && hours < 23) {
//        minutes = 0;
//        hours = hours + 1;
    // }
    // else {
        // if (minutes + interval > 60 && hours < 23) {
            // minutes = minutes + interval - 60;
            // hours = hours + 1;
        // }
        // else {
    //         if (minutes + interval == 60 && hours == 23) {
    //             minures = 0;
    //             hourse = 0;
    //         }
    //         else {
    //             if (minutes + interval > 60 && hours == 23) {
    //                 minutes = minutes + interval - 60;
    //                 hours = 0;
    //             }
    //             else {
    //                 minutes = minutes + interval;
    //             }
    //         }
    //     }
    // }
    // if (minutes >= 10 && hours >= 10) {
    //     console.log(hours + ':' + minutes)
    // }
    // else {
    //     if (minutes >= 10 && hours < 10) {
    //         console.log('0' + hourse + ':' + minutes)
    //     }
    //     else {
    //         console.log('0' + hours + ':0' + minutes)
    //     }
    // }
 //   var newMinutes;
//    var finalMinutes;
//     var newHours
//     var finalHours;
//     var printMinutes;
//     var printHours;
    // newMimutes = minutes + interval;
    // if (newMinutes >= 60) {
    //     finalMinutes = newMinutes - 60;
    //     newHours = hours + 1;
    //     }
    // else {
    //     finalMinutes = newMinutes;
    //     newHours = hours;
    // }
    // if (newHours == 24) {
    //     finalHours = 0;
    // }
    // else {
    //     finalHours = newHours;
    // }
    // if (finalMinutes >= 10) {
    //     printMinutes = finalMinutes;
    // } else {
    //     printMinutes = '0' + finalMinutes;
    // }
    // if (finalHours >= 10) {
    //     printHours = finalHours;
    // } else {
    //     printHours = '0' + finalMinutes;
    // }
 //   console.log(printHours + ':' + printMinutes)
 var newMinutes = (minutes + interval) % 60;
  var newHours = (hours + Math.floor((minutes + interval)/60)) % 24;
  if (newMinutes == 0) {
      newMinutes = '00'
  }
  if (newMinutes <10 && newMinutes > 0) {
      newMinutes = '0' + newMinutes;
    };
    if (newHours == 0) {
        newHours = '00'
    }
  if (newHours < 10 && newHours > 0) {
      newHours = '0' + newHours;
    };
  return `${newHours}:${newMinutes}`;
};
