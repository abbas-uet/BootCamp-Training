var context;
var canvas;

var gameLoop;
var player;


//Borders array

var borders=[]



//Input Varaibles

var leftKey;
var rightKey;
var upKey;
var downKey;


var playerImage;
var borderImage;
var backgroundImage;




//Score 
var score=0;
var htmlScore;

document.addEventListener('DOMContentLoaded',function() {

   canvas= document.getElementById('game-canvas');
   context=canvas.getContext('2d');
   htmlScore=document.getElementById('score');
   
  

   player=new Player(130,30);

   //bottom border
   for (let i = 0; i< 30; i++) {
      borders.push(new Border(0 + 10* i, 130, 10, 20,1));
   }

   //top Border
   for (let i = 0; i< 30; i++) {
      borders.push(new Border(0 + 10* i,0 , 10, 20,1));
   }

  
   //left border
   for (let i = 0; i< 30; i++) {
      borders.push(new Border(0,0 + 10* i , 10, 10,1));
   }

   //right Border
   for (let i = 0; i< 30; i++) {
      borders.push(new Border(290,0 + 10* i , 10, 10,1));
   }


   //hurdles
   borders.push(new Border(50,50,20,20,1));
   borders.push(new Border(140,100,20,30,1));
   borders.push(new Border(170,30,20,20,1));
   borders.push(new Border(180,90,20,20,1));
   borders.push(new Border(30,100,20,20,1));
   borders.push(new Border(210,40,20,20,1));
   borders.push(new Border(30,40,10,10,1));
   borders.push(new Border(21,40,10,10,1));
   borders.push(new Border(10,40,10,20,1));
   borders.push(new Border(110,140,20,20,1));
   borders.push(new Border(210,140,20,20,1));


   //Fruits
   borders.push(new Border(50,40,10,10,2));
   borders.push(new Border(21,30,10,10,2));
   borders.push(new Border(200,90,10,10,2));
   borders.push(new Border(210,30,10,10,2));
   borders.push(new Border(10,100,10,10,2));
   borders.push(new Border(130,120,10,10,2));


   
      


   gameLoop=setInterval(step,1000/30);


});



function step() {

   player.step();


   //Drawing Here
   
   drawEverything();

}


function drawEverything() {
   backgroundImage=new Image();
   backgroundImage.src="Logic/background.jpg";
   context.drawImage(backgroundImage,0,0,300,150);
   
   htmlScore.innerHTML=score;
   for(let i=0;i<borders.length;i++){
      borders[i].draw()
   }
   player.draw()
   
}



//Taking Input from User

document.addEventListener('keydown',function (event) {

   if(event.key==='w'|| event.key==='ArrowUp'){
      upKey=true;
   }else if(event.key==='a'|| event.key==='ArrowLeft'){
      leftKey=true;
   }else if(event.key==='s'|| event.key==='ArrowDown'){
      downKey=true;
   }else if(event.key==='d'|| event.key==='ArrowRight'){
      rightKey=true;
   }
   
});

document.addEventListener('keyup',function (event) {

   if(event.key==='w'|| event.key==='ArrowUp'){
      upKey=false;
   }else if(event.key==='a'|| event.key==='ArrowLeft'){
      leftKey=false;
   }else if(event.key==='s'|| event.key==='ArrowDown'){
      downKey=false;
   }else if(event.key==='d'|| event.key==='ArrowRight'){
      rightKey=false;
   }
   
});




//Checking the Intersection of the Boundries
function checkInterSection(r1, r2) {
   if (r1.x >= r2.x + r2.width) {
     return false;
   } else if (r1.x + r1.width <= r2.x) {
     return false;
   } else if (r1.y >= r2.y +r2.height) {
     return false;
    } else if (r1.y + r1.height <= r2.y) {
     return false;
   } else {
     return true;
   }
}