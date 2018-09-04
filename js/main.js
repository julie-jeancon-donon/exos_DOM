        // EXERCICE 1


// document.getElementById("button").onclick = function(){
//   background();
// }
//
// function background(){
//   document.getElementById("p1").style.backgroundColor = "red";
// }

    //    EXERCICE 2

// document.getElementById("button").onclick = function(){
//   attribut();
// }
// var att="";
// var elem = "";
//
// function attribut(){
//   att = document.getElementById("google").attributes;
//   for (var i = 0; i < att.length; i++) {
//     elem += att[i].name+" ";
//   }
//   document.getElementById("p1").innerHTML = elem;
// }


          // EXERCICE 3

// document.getElementById("text").addEventListener("mouseover",function(){
//   document.getElementById("text").innerHTML = "Bienvenue";
//   document.getElementById("text").style.backgroundColor = "white";
//   }
// );
//
//
// document.getElementById("text").addEventListener("mouseout",function(){
//   document.getElementById("text").innerHTML = "Survolez-moi!";
//   document.getElementById("text").style.backgroundColor = "lightgrey";
//   }
// );




        // EXERCICE 4

// function time(){
//   document.getElementById("heure").innerHTML = Date();
// }


        // EXERCICE 5
//
// var seconde = 0;
// var minute = 0;
// var heure = 0;
// var switchtarace = "tourne";
// var display = document.getElementById("time");
// time.innerHTML = "Vous êtes sur le site depuis " +heure+ " heure(s) " + minute + " minute(s) " + seconde + " seconde(s).";
//
// currentTime();
// var int = setInterval(myTimer, 1000);
//
// function myTimer(){
//   seconde++;
//   time.innerHTML = "Vous êtes sur le site depuis " + heure + " heure(s) " + minute + " minute(s) " + seconde + " seconde(s).";
//
//   if (minute === 59 && seconde === 60){
//     heure ++;
//     minute = 0;
//     seconde = 0;
//
//   }
//
//   else if (seconde === 60) {
//     seconde = 0;
//     minute ++;
//   }
//
// time.innerHTML = "Vous êtes sur le site depuis " + heure + " heure(s) " + minute + " minute(s) " + seconde + " seconde(s).";
//
// }
//
// function currentTime (){
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//
//   document.getElementById("displayCurrentTime").innerHTML = h + " h " + m + " m " + s + " s.";
// }
//
// document.getElementById("button").onclick =
// function stop(){
//   if(switchtarace === "tourne"){
//     clearInterval(int);
//     switchtarace = "stop";
//   }
//   else if (switchtarace === "stop"){
//     int = setInterval(myTimer,1000);
//     switchtarace = "tourne";
//   }
//
// }

// var setCurrentTime = setInterval(currentTime,1000);


      // EXERCICE 6
// var color = "";
// var button = document.getElementById("button");
// button.onclick =
// function colorChange(){
//   if (color === ""){
//     button.style.backgroundColor = "red";
//     color = "red";
//   }
//   else if (color === "red"){
//     button.style.backgroundColor = "green";
//     color = "green";
//   }
//
//   else if(color === "green"){
//     button.style.backgroundColor = "yellow";
//   }
// }


      // EXERCICE 7

   
