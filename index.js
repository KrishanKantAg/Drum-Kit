const a = document.querySelectorAll(".drum");
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
   
  
    });
   

  
   
}
document.addEventListener("keydown",function(e){
    makeSound(e.key);
    btnAnimation(e.key);
});

function makeSound(Key){
    switch(Key){
        case 'w': new Audio("sounds/tom-1.mp3").play();
        break;
        case 'a': new Audio("sounds/tom-2.mp3").play();
        break;
        case 's': new Audio("sounds/tom-3.mp3").play();
        break;
        case 'd': new Audio("sounds/tom-4.mp3").play();
        break;
        case 'j': new Audio("sounds/snare.mp3").play();
        break;
        case 'k': new Audio("sounds/crash.mp3").play();
        break;
        case 'l': new Audio("sounds/kick-bass.mp3").play();
        break;
    }
}
function btnAnimation (crntKey){
document.querySelector("."+ crntKey).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+crntKey).classList.remove("pressed");
},100);

}