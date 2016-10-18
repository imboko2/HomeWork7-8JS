/*
function speak(kind) {
    var defaultSound = "PIDAR";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}
var pet = prompt("Enter a type of pet: ");
speak(pet);*/



// function calculateArea(r) {
//     var area;
//     if (r <= 0) {
//         return 0;
//     } else {
//         area = Math.PI * r * r;
//         return area;
//     }
// }
// var radius = 5.2;
// var theArea = calculateArea(radius);
// console.log("The area is: " + theArea);




// function playTurn(player, location) {
//     points = 0;
//     if (location == 1) {
//         points = points + 100;
//     }
//     return points;
// }
// var total = playTurn("Jai", 1);
// alert(points);




// var x = 32;
// var y = 44;
// var radius = 5;
// var centerX = 0;
// var centerY = 0;
// var width = 600;
// var height = 400;
// function setup(width, height) {
//     centerX = width/2;
//     centerY = height/2;
// }
// function computeDistance(x1, y1, x2, y2) {
//     var dx = x1 - x2;
//     var dy = y1 - y2;
//     var d2 = (dx * dx) + (dy * dy);
//     var d = Math.sqrt(d2);
//     return d;
// }
// function circleArea(r) {
//     var area = Math.PI * r * r;
//     return area;
// }
// setup(width, height);
// var area = circleArea(radius);
// var distance = computeDistance(x, y, centerX, centerY);
// alert("Area: " + area);
// alert("Distance: " + distance);




// function clunk(times) {
//     var num = times;
//     while (num > 0) {
//         display("clunk");
//         num = num - 1;
//     }
// }
// function thingamajig(size) {
//     var facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky = facky * size;
//             size = size - 1;
//         }
//         clunk(facky);
//     }
// }
// function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(4);
// console.log(clunkCounter);





// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }
// var amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");




// function makePhrases() {
//     var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//     var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//     var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//     var rand1 = Math.floor(Math.random() * words1.length);
//     var rand2 = Math.floor(Math.random() * words2.length);
//     var rand3 = Math.floor(Math.random() * words3.length);
//     var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
// }
// makePhrases();

//                           ****BUBBLES****

// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// var output;
// var i = 0;
// while (i < scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     i = i + 1;
// }





// for (var i = 0; i < scores.length; i = i + 1) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
// }





// var scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// for (var i = 0; i < scores.length; i++) {
//     var output = "Bubble solution #" + i +
//         " score: " + scores[i];
//     console.log(output);
// }



// var scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// var highScore = 0;
// var output;
// for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     if (i > highScore) {
//         highScore = scores[i];
//     }
// }
// console.log("Bubbles tests: " + i);
// console.log("Highest bubble score: " + highScore);

// var aString = {value: 'I’m a string!!!'};
// console.log(typeof aString);

// var result = 5 + '5' - 0;
// console.log(typeof result);

// console.log(1 === '1');

// var a = 1;
// var increment = function(a) { ++a };
// increment(a);
// console.log(a);

// var obj = {a: 1};
// var increment = function(obj ) { obj.a++ };
// increment(obj);
// console.log(obj.a);

// var obj = {a: 1};
// var increment = function(obj ) { obj = {a: 2} };
// increment(obj);
// console.log(obj.a);

//                      ***BUBLES***


// var scores = [60, 50, 60, 58, 54, 54,
//               58, 50, 52, 54, 48, 69,
//               34, 55, 51, 52, 44, 51,
//               69, 64, 66, 55, 52, 61,
//               46, 31, 57, 52, 44, 18,
//               41, 53, 55, 61, 51, 44];
// var highScore = 0;
// var output;
// for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
// }
// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble score: " + highScore);
// var bestSolutions = [];
// for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//         bestSolutions.push(i);
//     }
// } console.log("Solutions with the highest score: " + bestSolutions);



// function  add () {
//     var b = document.body;
//     var c = document.createElement('input');
//     c.setAttribute('type', 'checkbox');
//     b.appendChild(c);
//     for (var i = 0; i <5; i++){
//         d = c.cloneNode(true);
//         d.setAttribute('id', 'ch'+i);
//         b.appendChild(d);
//     }
// }
// add();




//                           *****OBJECTS****


// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
// };
//
// var cadi ={
//     make: "Cadi",
//     model:" GM Cadillac",
//     year: 1955 ,
//     color: 'tan',
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };

// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000
// };
// fiat.mileage = 10000;
// console.log(fiat.mileage);




// var dog ={
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
// };
// var bark;
// if(dog.weight > 20){
//     bark = " WOOF WOOF!!";
// }else{
//     bark = "woof woof";
// }
// var speak = dog.name + " says" + bark + "when he wants to " + dog.activity;
// console.log(speak);




// function prequal(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }
// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// };
// var cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };
// prequal(cadi);
// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
// };
// prequal(chevy);
// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000
// };
// prequal(fiat);
// var worthALook = prequal(cadi);
// if (worthALook) {
//     console.log("You gotta check out this " + cadi.make + " " + cadi.model);
// } else {
//     console.log("You should really pass on the " + cadi.make + " " + cadi.model);
// }



// function timeOn() {
//     var sec = 0;
//     var min = 0;
//     var hour = 0;
//     document.getElementById('time').innerHTML = hour + ":0" + min + ":0" + sec;
//     setInterval ( function() {
//             sec++;
//             if ( sec==60 ) {
//                 sec = 0;
//                 min++;
//             } else if (min==60) {
//                 min = 0;
//                 hour++;
//             }
//             document.getElementById("time").innerHTML =  hour + ":0" + min + ":" + sec;
//         },1000 );
// }
// timeOn();


// start.addEventListener("click",start_click);
// pause.addEventListener("click",pause_click);
// stp.addEventListener("click",stp_click);
//
//
//
// var obj={
//     s: "start",
//     p: "pause",
//     st: "stop"
// }
//
// var count=0, timerId, go=false;
//
// function start_click(){
//     console.log("start");
//     if (go==false){
//         timerId = setInterval(function() {
//             count++;
//             var msek=count%100;
//
//             if (msek<10) {msek = ""+msek;}
//             if ((msek>=10)&&(msek<100)) {msek = ""+msek;}
//
//             var sek=Math.floor(count/100)%60;
//             if (sek<10) {sek = "0"+sek;}
//
//             var min = Math.floor(count/6000)%60;
//             if (min<10) {min = "0"+min;}
//
//             var hours = Math.floor(count/360000)%24;
//             if (hours<10) {hours = "0"+hours;}
//
//             var str = hours+":"+min+":"+sek+":"+msek;
//             for_count.innerHTML=str;
//         }, 10);
//         go=true;
//     }
// }
//
// function pause_click(){
//     clearInterval(timerId);
//     go=false;
//     console.log("pause");
// }
//
// function stp_click(){
//     console.log("stop");
//     clearInterval(timerId);
//     go=false;
//     count = 0;
//     for_count.innerHTML=count +"0:00:00:00";
//     for_text.innerHTML="";
// }


// console.log(jQuery);
// console.log($);


// $(document).ready(function () {
//
// });


// $(function () {
//     var $links = $('.menu a');
//     $links.on('click', function (e) {
//         var $submenu = $(this).siblings('.submenu');
//         e.preventDefault();
//         console.log('submenu', $submenu)
//         $submenu.slideToggle();
//     })
// });




$('.button_number_one').click(function(){ $('.first_text').removeClass("hidden");$('.second_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_two').click(function(){ $('.second_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.third_text').addClass("hidden");});
$('.button_number_three').click(function(){ $('.third_text').removeClass("hidden");$('.first_text').addClass("hidden");$('.second_text').addClass("hidden");});




























