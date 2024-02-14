console.log("sff")
//for changing background easier
let x = -1;
//determines what is the background, choices, etc based on what you chose
let path = 0;

//changes background based on path
function bg()
{
  x++;
  const folder = "backG/"
let scene = ["house.jpg","nn"];

 document.body.style.backgroundImage = "url("+folder+ scene[x]+")";
}

let text = document.getElementById("main_text")
document.getElementById("start").addEventListener("click", startGame )

let left = document.getElementById("left");
let right = document.getElementById("right");
let images = document.getElementById("images");

right.addEventListener("click", pathChanger)
left.addEventListener("click",pathChanger)


function startGame()
{
  bg();
  document.getElementById("start").style.visibility = "hidden";
  left.style.visibility = "visible";
  right.style.visibility = "visible";
  images.style.visibility = "visible";
  text.innerHTML = "You start at home, what's your first move?";
 
}

function changePix(choice)
{
  if(choice == "left")
  {
    images.src = "images/car.jpg"
  }
  else if(choice == "right")
  {
     images.src = "images/tv.jpg"
  }
}

function game()
{
  switch(x){
    case 0:
      text.innerHTML = "it worked";
      left.innerHTML = "bla bla bla"
        right.innerHTML = "dododo:"
      bg();
      break;
    default:
      text.innerHTML = "it didn't work";
      break;

  }
}

