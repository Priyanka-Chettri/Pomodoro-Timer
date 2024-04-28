
const start= document.getElementById("start");
const pause=document.getElementById("pause");
const reset=document.getElementById("reset");
const timer=document.getElementById("timer")
//const count =document.getElementById("count");

let cycleCount=0;
let interval=1*60;
let breakInterval=5*60;
let isbreak=false;
let timerInterval;

start.addEventListener("click",()=>{
   
    timerInterval= setInterval(updateTimer, 1000);
   
})

function updateTimer(){

if(isbreak==false){
let minutes=Math.floor(interval/60);
let seconds=interval%60;
if(seconds<10) {
    seconds=`0${seconds}`
}

--interval;
timer.innerText=`${minutes}:${seconds}`

if(interval==0) {
    cycleCount++;
    const count=document.getElementById("count");
    count.innerText=cycleCount
    playAlarm();
    interval=1*60;
    isbreak=true;
    const message=document.getElementById("message")
    message.innerText="Woo Hoo break time "


}

}

else if(isbreak==true){
let minutes=Math.floor(breakInterval/60);
let seconds=breakInterval%60;
if(seconds<10) {
    seconds=`0${seconds}`
}

--breakInterval;
timer.innerText=`${minutes}:${seconds}`

if(breakInterval==0) {
   // count.innerText=cycleCount
    playAlarm();
    breakInterval=5*60;
    isbreak=false;
    const message=document.getElementById("message")
    message.innerText=""


}
}


pause.addEventListener("click",()=>{
 clearInterval(timerInterval);
})

reset.addEventListener("click",()=>{
    timer.innerText="0:00"
    interval=25*60
    clearInterval(timerInterval)
})
}


function playAlarm(){
    const alarmSound = new Audio('sound.mp3'); // Replace 'path_to_your_alarm_sound.mp3' with your audio file path
    alarmSound.play();
}







 /*const date=new Date();
    const minutesToAdd=25;
    const actualTime=date.toLocaleTimeString();
    const d= new Date(date.getTime()+minutesToAdd*60000);
    const newTime=d.toLocaleTimeString();
    console.log(newTime)
    console.log(actualTime)
    setInterval(()=>{
    const currentTime= new Date();
     const timeElpased=currentTime.toLocaleTimeString();
     const remainingTime=newTime-timeElpased;
     console.log(timeElpased);
     console.log(remainingTime)
    }, 1000)*/