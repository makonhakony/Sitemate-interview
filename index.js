// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  // if (time === '0:00') {
  //   return 'midnight';
  // }

  dhour ={
    0: 'midnight',
    1: 'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'midday',
  }

  dmin = {
     15 : 'quarter',
     45 : 'quarter',
     30 : 'half',
     3 :'three',
     11: 'eleven',
     27: 'twenty seven',
     20: 'twenty',
     5: 'five',
  }

  let [hour, min] = time.split(':')

  if (min == '00'){
    if (dhour[hour] != 'midnight' || dhour[hour] != 'midday' ){
      return dhour[parseInt(hour)]
    }
      
    else {
      return dhour[parseInt(hour)] + " o'clock"
    }
      
  } 
  else if (min == '30') {
    return dmin[parseInt(min)]+ ' past ' + dhour[parseInt(hour)]
  }
  else if (min < 30) {
    return dmin[parseInt(min)] + " past " + dhour[parseInt(hour)]
  }
  else if (min > 30) {
    return dmin[60 - parseInt(min)] + " to " + dhour[parseInt(hour) + 1]
  }
  
  return '';


}

module.exports = { convertTimeToWords };


/*

time = hour , min

if min < 30 ==> past

if min > 30 ==> to min = 60 - min

if min = 15 45 ==> quater

30 ==> half

00 ==> o'clock
*/