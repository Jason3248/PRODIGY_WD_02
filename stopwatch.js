
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let displayHrs = hours;
let displayMins = hours;
let displaySecs = hours;
let displayMillisecs = hours;

let watchStatus = 'stopped';

let interval = null;
let lapNow = null;



function start(){
  milliSeconds+= 1;
  if(milliSeconds / 100 === 1){
    seconds++;
    milliSeconds = 0;
    if(seconds / 60 === 1){
      minutes++;
      seconds = 0;
      if(minutes / 60 === 1){
        hours++;
        minutes = 0;

      }
    }
  }

  if(milliSeconds < 10){
    displayMillisecs = '0' + milliSeconds;
  }
  else{
    displayMillisecs = milliSeconds
  }

  if(seconds < 10){
    displaySecs = '0' + seconds;
  }
  else{
    displaySecs = seconds;
  }

  
  if(minutes < 10){
    displayMins= '0' + minutes;
  }
  else{
    displayMins = minutes;
  }

  if(hours < 10){
    displayHrs= '0' + hours;
  }
  else{
    displayHrs = hours;
  } 

  document.getElementById('timerhrs').innerHTML = displayHrs;
  document.getElementById('timermins').innerHTML = displayMins;
  document.getElementById('timersecs').innerHTML = displaySecs;
  document.getElementById('timermillisecs').innerHTML = displayMillisecs;
}
function startStop(){
  if(watchStatus === 'stopped'){
    interval = window.setInterval(start, 10);
    watchStatus = 'started';
    document.getElementById('startButton').innerHTML = 'Stop';
  }
  else{
    window.clearInterval(interval);
    watchStatus = 'stopped';
    document.getElementById('startButton').innerHTML = 'Start';
  }
}

function reset(){
  
 hours = 0;
 minutes = 0;
 seconds = 0;
 milliSeconds = 0;

 displayHrs = 0;
 displayMins = 0;
 displaySecs = 0;
 displayMillisecs = 0
 
 document.getElementById('timerhrs').innerHTML = '00';
 document.getElementById('timermins').innerHTML = '00';
 document.getElementById('timersecs').innerHTML = '00';
 document.getElementById('timermillisecs').innerHTML = '00';
 document.getElementById('lapRecords').innerHTML = '';
 watchStatus = 'stopped';


}

function lap(){
  lapNow = displayHrs  + ':' + displayMins + ":" + displaySecs + ':' + displayMillisecs;
  document.getElementById('lapRecords').innerHTML += '<p>' + lapNow + '</p>';
} 