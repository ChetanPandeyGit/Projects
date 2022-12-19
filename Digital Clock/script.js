// -------------Clock Section----------------

function clock(){
let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let meridian;

if(hours > 12){
  meridian = "PM";
  hours -= 12;
}
else{
  meridian = "AM";
}

if(hours < 10){
  hours = "0" + hours;
}
if(mins < 10){
  mins = "0" + mins;
}
if(secs < 10){
  secs = "0" + secs;
}
let hoursSlot = document.getElementById('hours');
hoursSlot.innerHTML = `${hours}`;
let minsSlot = document.getElementById('mins');
minsSlot.innerHTML = `${mins}`;
let secsSlot = document.getElementById('secs');
secsSlot.innerHTML = `${secs}`;
let meridianSlot = document.getElementById('meridian');
meridianSlot.innerHTML = `${meridian}`;

// --------------Images and Greets--------------

let greetDiv1 = document.getElementById('greetDiv1');
let greetDiv2 = document.getElementById('greetDiv2');
let heroImg = document.getElementById('heroImg');

if(hours >= 06 && hours < 12 && meridian === "AM"){
  greetDiv1.innerText = "GOOD MORNING !! WAKE UP !!";
  greetDiv2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  heroImg.src = "./images/wake_image.png";
}
if(hours >= 12 && hours < 04 && meridian === "PM"){
  greetDiv1.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
  greetDiv2.innerText = "LET`S HAVE SOME LUNCH!!";
  heroImg.src = "./images/nap_image.png";
}
if(hours >= 04 && hours < 08 && meridian === "PM"){
  greetDiv1.innerText = "GOOD EVENING !!";
  greetDiv2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  heroImg.src = "./images/nap_image.png";
}
if((hours >= 08 && meridian === "PM") || (hours < 06 && meridian === "AM")){
  greetDiv1.innerText = "GOOD NIGHT !!";
  greetDiv2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP!!";
  heroImg.src = "./images/night_image.png";
}
}

setInterval(() =>{
    clock();
},1000);

// -------------------Alarm Section----------------

let button = document.getElementById('btn');
button.addEventListener('click', setAlarm);

function setAlarm(){
let wake = document.getElementById('wakeTime').value;
let lunch = document.getElementById('lunchTime').value;
let nap = document.getElementById('napTime').value;
let night = document.getElementById('nightTime').value;
let wakeAlarm = document.getElementById('wakeAlarm');
let lunchAlarm = document.getElementById('lunchAlarm');
let napAlarm = document.getElementById('napAlarm');
let nightAlarm = document.getElementById('nightAlarm');

wakeAlarm.innerText = `${wake}`;
lunchAlarm.innerText = `${lunch}`;
napAlarm.innerText = `${nap}`;
nightAlarm.innerText = `${night}`;

}
