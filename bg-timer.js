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
        postMessage(m+':'+s);
    } else if (m < 0){
        //초가 다 되었습니다.
        postMessage('-'+Math.abs(m+1)+':'+Math.abs(s));
    }else {
        // 1분일때
        postMessage(m+':'+s);
    }
}
              
if (timerStart){
   myVar=setInterval(function(){
    bgTimer()
    passtime += 100;
    },100);
   timerStart = false;
} 
