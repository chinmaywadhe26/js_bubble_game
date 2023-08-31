var timer = 6;
var score = 0;
var hitrn = 0;
function makeBubble(){var clutter = "";
for(var i =1; i <= 60; i++){
    var rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function incScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
}
function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function runTimer(){
   var timerint = setInterval(function(){
        if(timer > 0){
        timer--; 
        document.querySelector("#timerval").textContent= timer; 
        }
        else{
            clearInterval (timerint);
            document.querySelector("#pbtm").innerHTML =
             `<h1>GAME OVER!!!!</h1> <br>
             <p>Your score is ${score} </p>
             `;
        }
    }, 1000)
}
document.querySelector("#pbtm").addEventListener("click", function(details){
var clickedNum = (Number(details.target.textContent));
if(clickedNum === hitrn){
    incScore();
    
    newHit();
}
})
runTimer();
makeBubble();
newHit();

