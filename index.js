// const buttons = document.querySelectorAll(".drum");
// buttons.forEach((button)=>{
//     button.addEventListener('click',function(){
//         alert("i am clicked");
//     })
// });

//Another method of doing it in simple for loop
//  var numberofDrumbuttons = document.querySelectorAll(".drum").length;
//  for(var i=0; i< numberofDrumbuttons; i++){
//     document.querySelectorAll(".drum").addEventListener('click',function(){
//         alert("I am clicked")
//     })
//  }

//Play sounds in JS when drums clicked
// const buttons = document.querySelectorAll(".drum");
// buttons.forEach((button,i)=>{
//     button.addEventListener('click',function(){
//         var audio = new Audio('sounds/tom-' +(i+1)+ '.mp3');
//         audio.play();
//     })
// });

//  var numberofDrumbuttons = document.querySelectorAll(".drum").length;
//  console.log(numberofDrumbuttons)
//  for(var i=0; i< numberofDrumbuttons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        // console.log(this.innerHTML);
//         switch(this.innerHTML){
//         case 'w' : 
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//         break;

//         case 'a' : 
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play();
//         break;

//         case 's' : 
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play();
//         break;

//         case 'd' : 
//         var audio = new Audio('sounds/tom-4.mp3');
//         audio.play();
//         break;
        
//         case 'j' : 
//         var audio = new Audio('sounds/snare.mp3');
//         audio.play();
//         break;

//         case 'k' : 
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//         break;

//         case 'l' : 
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//         break;
//         }
//     }
//     )
//  }

//   }
//Detecting Button press
var BtnLength = document.querySelectorAll(".drum").length;
for(var i = 0; i<BtnLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        var buttonInnerHTML = this.innerHTML;
        checkForKeys(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
//Detecting keyboard press

document.addEventListener('keypress',function(event){
    checkForKeys(event.key);
    buttonAnimation(event.key);
});

function checkForKeys(key){
    // console.log(key);
    switch(key){
       case 'w' : 
       var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
       break;

       case 'a' : 
       var audio = new Audio('sounds/tom-2.mp3');
       audio.play();
       break;

       case 's' : 
       var audio = new Audio('sounds/tom-3.mp3');
       audio.play();
       break;

       case 'd' : 
       var audio = new Audio('sounds/tom-4.mp3');
       audio.play();
       break;
       
       case 'j' : 
       var audio = new Audio('sounds/snare.mp3');
       audio.play();
       break;

       case 'k' : 
       var audio = new Audio('sounds/kick-bass.mp3');
       audio.play();
       break;

       case 'l' : 
       var audio = new Audio('sounds/crash.mp3');
       audio.play();
       break;
       } 
    }

//Animation & setTimeout for the buttons
 function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed"); 
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);

 }
