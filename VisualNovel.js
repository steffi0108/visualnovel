
//start button
//functions are a list of commands
document.querySelector(".start-btn").addEventListener("click", function(){
  //play audio
  yee.play();
  //story 1 text
  document.querySelector(".story-window").innerHTML = "<p> Oink Oink! Once upon a time, there was a gigantic pig. He fights with others a lot, and likes to roll in the mud. He's a nasty pig whom everyone hates; nobody wants to help him build his new house. He now faces with 2 options: find mommy for help, or work on his own.</p><img src = 'images/peppa.jpg'></img>";
  //erase old button  add dot in querySelector, but no dot in classList
  document.querySelector(".start-btn").classList.add("invisible");
  //show next button
  document.querySelector(".findmommy-btn").classList.remove("invisible");
  document.querySelector(".workbyyourself-btn").classList.remove("invisible");

})

document.querySelector(".findmommy-btn").addEventListener("click", function(){
  //play audio
  ohno.play();
  document.querySelector(".story-window").innerHTML = "<p>You decided to find your mom for help! However, she is not satisfied with your decision. She is currently sleeping, and you have just waked her up! &#128561; OINK OINK!!! How dare you! She now demands you to do one of the two options for her: </p><img src = 'images/angrypig.gif'></img>";
  //erase old button  add dot in querySelector, but no dot in classList
  document.querySelector(".findmommy-btn").classList.add("invisible");
  document.querySelector(".workbyyourself-btn").classList.add("invisible");
  //show next button
  document.querySelector(".buy-btn").classList.remove("invisible");
  document.querySelector(".chores-btn").classList.remove("invisible");

})

document.querySelector(".workbyyourself-btn").addEventListener("click", function(){
  //play Audio
  thunder.play();
  document.querySelector(".story-window").innerHTML = "<p>You decided to work by yourself! You work and work, and a lot of process has been made. Unfortunately, a big storm came and blew your unfinished house down! Plus, the other humongous pigs are laughing at you! Sad and despair, you have to decide what you want to do next &#128552; : </p><img src = 'images/storm.gif'></img>";

  document.querySelector(".findmommy-btn").classList.add("invisible");
  document.querySelector(".workbyyourself-btn").classList.add("invisible");

  document.querySelector(".keepworking-btn").classList.remove("invisible");
  document.querySelector(".rest-btn").classList.remove("invisible");

})

document.querySelector(".buy-btn").addEventListener("click", function(){
  mygod.play();
  document.querySelector(".story-window").innerHTML = "<p>Your mum is very satisfied with your decision! She is happy about the special gift you bought her. She forgives you and helps you build a beautiful house! :) Merry Christmas! &hearts; &hearts; </p><img src = 'images/snoopygift.gif'></img>";

  document.querySelector(".buy-btn").classList.add("invisible");
  document.querySelector(".chores-btn").classList.add("invisible");

  document.querySelector(".reset-btn").classList.remove("invisible");

})

document.querySelector(".chores-btn").addEventListener("click", function(){
  //play audio
  lose.play();
  document.querySelector(".story-window").innerHTML = "<p> Hmm...there isn't a house yet...how can you do house chores? You lose! Nobody is helping you to build your house. You are all on your own. Bye. Have fun in the mud.</p><img src = 'images/mud.gif'></img>";

  document.querySelector(".buy-btn").classList.add("invisible");
  document.querySelector(".chores-btn").classList.add("invisible");

  document.querySelector(".reset-btn").classList.remove("invisible");

})

document.querySelector(".keepworking-btn").addEventListener("click", function(){
  //play audio
  ohyea.play();
  document.querySelector(".story-window").innerHTML = "<p> Your perseverance has led you to finish building your house! Although you are exhausted, a grand house now awaits you! YAY !! </p><img src = 'images/house.jpg'></img>";

  document.querySelector(".keepworking-btn").classList.add("invisible");
  document.querySelector(".rest-btn").classList.add("invisible");

  document.querySelector(".reset-btn").classList.remove("invisible");

})

document.querySelector(".rest-btn").addEventListener("click", function(){
  //play audio
  scream.play();
  document.querySelector(".story-window").innerHTML = "<p>What a slacker! Nobody is helping you, and you still don't want to take time and build your own house? You deserve to be out there in the cold during winter! Serves you right! :p </p><img src = 'images/deadsnoopy.gif'></img>";

  document.querySelector(".keepworking-btn").classList.add("invisible");
  document.querySelector(".rest-btn").classList.add("invisible");

  document.querySelector(".reset-btn").classList.remove("invisible");

})

document.querySelector(".reset-btn").addEventListener("click", function(){
  //play audio
  cash.play();
  document.querySelector(".reset-btn").classList.add("invisible");

  document.querySelector(".start-btn").classList.remove("invisible");
  //story 1 text
  document.querySelector(".story-window").innerHTML = "<p> Oink Oink! Once upon a time, there was a gigantic pig. He fights with others a lot, and often steals other's food for survival. Everyone hates him; nobody wants to help him build his new house. He now faces with 2 options: find mommy for help, or work on his own.</p><img src = 'images/peppa.jpg'></img>";
  //erase old button  add dot in querySelector, but no dot in classList
  document.querySelector(".start-btn").classList.add("invisible");
  //show next button
  document.querySelector(".findmommy-btn").classList.remove("invisible");
  document.querySelector(".workbyyourself-btn").classList.remove("invisible");

})


//create audio object
var yee = new Audio('sounds/yee.mp3')
var cash = new Audio('sounds/cash.mp3')
var ohno = new Audio('sounds/ohno.mp3')
var mygod = new Audio('sounds/mygod.mp3')
var lose = new Audio('sounds/lose.mp3')
var ohyea = new Audio('sounds/ohyea.mp3')
var thunder = new Audio('sounds/thunder.mp3')
var scream = new Audio('sounds/scream.mp3')

//chnage bg container
//document.querySelector(".container").classList.add("scary-bg")
