
//determines what is the background, choices, etc based on what you chose
let path;

let opt1=""
let opt2=""

let text = document.getElementById("main_text")
document.getElementById("start").addEventListener("click", startGame )

/*left is the top button
* right is the bottom button
* The buttons apeared on top of each other and I was too lazy to 
* change it :P
*/
let left = document.getElementById("left");
let right = document.getElementById("right");
let images = document.getElementById("images");
let end = document.getElementById("end");

//when choices are clicked path is changed
left.addEventListener("click", () => pathChanger("left"))
right.addEventListener("click",() => pathChanger("right"))


//changes background based on path
function bg()
{
  const folder = "backG/"
let scene = ["house","road","traffic","mexico","fbi","police","jam"];
if(path>6)
{
  document.body.style.backgroundImage = "url("+folder+"jail.jpg)";
}
  else{
 document.body.style.backgroundImage = "url("+folder+ scene[path]+".jpg)";
  }
}

//the start of the game
function startGame()
{
  path=0;
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


//changes path based on choice
function pathChanger(choice)
{
  if(choice == "left" && (path == 0 || path == 1))
  {
    path++;
  }
  else if(choice == "right" && (path == 2 || path == 8))
  {
    path++;
  }
  else{
    path+=4;
  }
  game();
 console.log(path);
}



//the main game. Changes based on path value
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
      text.innerHTML = "You hit the road. You got in your car and were able to drive 10 miles before your car ran out of gas. What do you do now?";
        left.innerHTML = "call Uber"
        right.innerHTML = "Call a close friend"
      opt1="uber";
      opt2="friend";
      break;


    case 2:
      text.innerHTML = "You call an uber. You made it near the airport, but the traffic is causing you to stop moving. What do you do?";

      left.innerHTML = "Take the bus"
      right.innerHTML = "Walk to the airport"
      opt1="bus";
      opt2="run";
      break;

      //perfect win
    case 3:
      win();

      break;

    case 4:
      text.innerHTML = "You watched tv for a while. You wasted time and the FBI is at your door now. Now what do you want to do?";

      left.innerHTML = "Run to the attic, and escape on the roof quietly"
      right.innerHTML = "Leave through your backyard quietly"
      opt1="roof";
      opt2="backyard";
      break;

    case 5:
      lose();
      break;

    case 6:
      lose();
      break;

    case 8:
      lose();
      break;


    default:
      text.innerHTML = "N/A";
      opt1="";
      opt2="";
      break;

  }
}

function win()
{
  //if (path==3)
  text.innerHTML = "You sprint to the airport as fast as you can. You should be in the olympics cause you catched your flight! Now you won’t have to worry about the FBI. At least for now… \n YOU WIN!";

  left.style.visibility = "hidden";
  right.style.visibility = "hidden";
  images.style.visibility = "hidden";
  end.style.visibility = "visible";
  
 
  
  console.log("You Win!")
}

function lose()
  {
    
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";
    images.style.visibility = "hidden";
    end.style.visibility = "visible";
    if(path==5)
    {
  text.innerHTML = "Apparently your “close friend” is part of the IRS AND the FBI. You friend is driving toward the police station to get you arrested and take your house, since you didn’t do your taxes either. \n GAME OVER";
      end.src= "images/betrayed.jpg";
    }
    else if (path ==6)
    {
       text.innerHTML = "I just said there was traffic. You hopped on the bus and missed your flight. Better luck next time. \n GAME OVER";
      end.src= "images/angry.jpg";
    }
    else
    {
      text.innerHTML= "The FBI caught you. You are not that sneaky..\n GAME OVER"
      end.src= "images/criminal.jpg";
    }
    //end.src= "images/criminal.jpg";
  }

