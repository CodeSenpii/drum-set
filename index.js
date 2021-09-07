// document.querySelector('button').addEventListener("click", handleClick);
// using Annonimous funtion
// Page addEventListener for the Page/ event gets the key

var btn = document.querySelectorAll('button');

function playKey(key){
  switch(key){
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kick_bass.play();
      break;
    default:
      break;
  }
}

// btn[0].addEventListener("click", function (){alert("Button1 pressed");});
// btn[1].addEventListener("click", function (){alert("Button2 pressed");});
// btn[2].addEventListener("click", function (){alert("Button3 pressed");});
// btn[3].addEventListener("click", function (){alert("Button4 pressed");});
// btn[4].addEventListener("click", function (){alert("Button5 pressed");});
// btn[5].addEventListener("click", function (){alert("Button6 pressed");});
// btn[6].addEventListener("click", function (){alert("Button7 pressed");});

// or
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick_bass = new Audio("sounds/kick-bass.mp3");

for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function () {

    playKey(this.innerHTML);
    buttonAnimation(this.innerHTML);
    // switch(this.innerHTML){
    //   case "w":
    //     tom1.play();
    //     break;
    //   case "a":
    //     tom2.play();
    //     break;
    //   case "s":
    //     tom3.play();
    //     break;
    //   case "d":
    //     tom4.play();
    //     break;
    //   case "j":
    //     snare.play();
    //     break;
    //   case "k":
    //     crash.play();
    //     break;
    //   case "l":
    //     kick_bass.play();
    //     break;
    //   default:
    //     break;
    // }
  });

}
document.addEventListener("keydown", function(event){
  console.log(event);
  playKey(event.key);
  buttonAnimation(event.key);
});





function buttonAnimation(key){
  var activeButton = document.querySelector("." + key );
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 200);
}
