var button1 = document.querySelector("#player1");
var button2 = document.querySelector("#player2");
var span1 = document.getElementById("tag2");
var span2 = document.getElementById("tag3");
var span3 = document.getElementById("tag1");
var input = document.getElementById("num");
var input1=0;
var score1 =0;
var score2 =0;
button1.disabled=true;
button2.disabled=true;
var reset = document.getElementById("refresh");
input.addEventListener("click",function(){
  button1.disabled=false;
  button2.disabled=false;
  input1 = input.value;
  span3.textContent = input1;
 
});
button1.addEventListener("click",function(){
  score1=score1 + 1;
  span1.textContent = score1;
  check();
});
button2.addEventListener("click",function(){
  score2=score2 + 1;
  span2.textContent = score2;
  check();
});

function check(){
 if(score1 + score2 < input1){
    if(score1 > input1 / 2){
    button1.disabled=true;
    button2.disabled=true;
    span1.style.color="green";
  }
  if(score2 > input1 / 2){
    button1.disabled=true;
    button2.disabled=true;
    span2.style.color="green";
  }
 }
  else {
    button1.disabled=true;
    button2.disabled=true;
  }
}

reset.addEventListener("click",function(){
  button1.disabled=false;
  button2.disabled=false;
  span1.textContent =0;
  span2.textContent =0;
  span3.textContent ="__";
  input.textContent ="";
  input.value ="";
  input1 =0;
  score1 =0;
  score2 =0;
  score1.textContent =0;
  score2.textContent =0;
  span1.style.color="black";
  span2.style.color="black";

});