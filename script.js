console.log("sff")
//for changing background easier
let x = 0;
//determines what is the background, choices, etc based on what you chose
let path = -1;

let opt1=""
let opt2=""

  
  
//changes background based on path
function bg()
{
  const folder = "backG/"
let scene = ["house.jpg","road.jpg"];

 document.body.style.backgroundImage = "url("+folder+ scene[path]+")";
}



let text = document.getElementById("main_text")
document.getElementById("start").addEventListener("click", startGame )

let left = document.getElementById("left");
let right = document.getElementById("right");
let images = document.getElementById("images");

//when choices are clicked
left.addEventListener("click", () => pathChanger("left"))
right.addEventListener("click",() => pathChanger("right"))

//the start of the game
function startGame()
{
  path++;
  game()
  document.getElementById("start").style.visibility = "hidden";
  left.style.visibility = "visible";
  right.style.visibility = "visible";
  images.style.visibility = "visible";
 
}

//image box changes when hovering over button choices 
function changePix(choice)
{
  
  if(choice == "left")
  {
    images.src = "images/"+opt1+".jpg"
  }
  else if(choice == "right")
  {
     images.src = "images/"+opt2+".jpg"
  }
}

function game()
{
  bg()
  switch(path){
    case 0:
      text.innerHTML = "You start at home, what's your first move?";
      left.innerHTML = "Get in your car and drive"
        right.innerHTML = "Watch Tv for a bit"
      opt1="car";
      opt2="tv";
      break;
    case 1:
      text.innerHTML = "You hit the rode. You got in your car and were able to drive 10 miles before your car ran out of gas. What do you do now?";
        left.innerHTML = "call uber"
        right.innerHTML = "Call a close friend"
      opt1="uber";
      opt2="friend";
      break;
      
    default:
      text.innerHTML = "N/A";
      opt1="";
      opt2="";
      break;

  }
}

function pathChanger(choice)
{
  if(choice == "left")
  {
    path++;
    game();
  }
  else
  {
    path+=4;
    game();
  }
 console.log(path);
}

