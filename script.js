var hitrn = 0;
var score=0;
var timer=60;


function runTimer(){
    var timeStop = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timeval").textContent = timer;
        }
        else{
            clearInterval(timeStop);
            document.querySelector("#pbtm").innerHTML = `<div id = "js"><h1>Your Score is ${score}</h1></div>`;
        }     
    },1000);
}
function hitNumber(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hitrn;
}
function scoreCard(){
    score+=10;
    document.querySelector(".scoreval").textContent = score;
}
function makeBubble(){
    var clutter = "";
    for(var i = 1;i<=100;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);
    if(clicked === hitrn){
        scoreCard();
        makeBubble();
        hitNumber();
    }

})

runTimer();
makeBubble();
hitNumber();