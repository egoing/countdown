var timerStart = true;
var duration;
var passtime=0;

self.addEventListener("message", function(event) {
    console.log('pass data : '+ event.data);
    duration = event.data;
}, false);

function bgTimer()
{
    var remained = Math.floor((duration - passtime)/1000);
    var m = Math.floor(remained/60);
    var s = remained%60;
    if (m === 0){
        postMessage(s);
    } else if (m < 0){
        postMessage((m+1));
    }else {
        postMessage(m);
    }
}
              
if (timerStart){
   myVar=setInterval(function(){
    bgTimer()
    passtime += 100;
    },100);
   timerStart = false;
} 
