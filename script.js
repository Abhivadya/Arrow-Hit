
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

// *...............Creatiing circles........

class Circle {
  constructor(xpos, ypos, radius, color) {
   this.xp = xpos;
   this.yp = ypos;
   this.rd = radius;
   this.color = color;
 }

   createcircle (context) {
     context.beginPath();
     context.fillStyle = this.color;
     context.arc(this.xp, this.yp, this.rd, 0, Math.PI*2, false);
     context.fill();
     context.stroke();
   }   

   changeCircleColor(newcolor) {
     this.color = newcolor;
     this.createcircle(context);
   }

   clickCircle(xmouse, ymouse) {
    const distance = Math.sqrt(((xmouse-this.xp) * (xmouse-this.xp)) + ((ymouse-this.yp) * (ymouse-this.yp)));
      if (distance < this.rd) {
        switch (this.yp) {
          case 125:
            moveArrow1();
            break;
          case 225:
            moveArrow2();
            break;
          case 325:
            moveArrow3();
            break;
          case 425:
            moveArrow4();      
            break;
        }
      }  
    }
  }

let circle1 = new Circle(100, 125, 40, "red");
let circle2 = new Circle(100, 225, 40, "yellow");
let circle3 = new Circle(100, 325, 40, "blue");
let circle4 = new Circle(100, 425, 40, "green");

circle1.createcircle(context);
circle2.createcircle(context);
circle3.createcircle(context);
circle4.createcircle(context);

// *...............Creatiing Arrows........

class Arrow {
    constructor(xposition, yposition, speed) {
      this.x = xposition;
      this.y = yposition;
      this.speed = speed;
    }

    createArrow(context) {
      context.beginPath();
      context.moveTo(this.x, this.y);
      context.lineTo(this.x-25, this.y+25);
      context.lineTo(this.x, this.y+50);
      context.lineTo(this.x, this.y+35);
      context.lineTo(this.x+75, this.y+35);
      context.lineTo(this.x+75, this.y+15);
      context.lineTo(this.x, this.y+15);
      context.lineTo(this.x, this.y);
      context.fillStyle = "brown";
      context.fill();
      context.stroke();
    }

    moveArrowPosition () {     
      context.clearRect(140, this.y-10, 800, 100);
    }
  }

let arrow1 = new Arrow(700, 100, 2);
let arrow2 = new Arrow(700, 200, 2);
let arrow3 = new Arrow(700, 300, 2);
let arrow4 = new Arrow(700, 400, 2);

arrow1.createArrow(context);
arrow2.createArrow(context);
arrow3.createArrow(context);
arrow4.createArrow(context);

//--------------------Adding Click Event to Circle Objects..............

canvas.addEventListener('click', (event) => {
const rect = canvas.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;
circle1.clickCircle(x, y);
circle2.clickCircle(x, y);
circle3.clickCircle(x, y);
circle4.clickCircle(x, y);
});

//--------------Arrow hits circle---------------

function moveArrow1() {  
  requestAnimationFrame(moveArrow1);
  arrow1.moveArrowPosition();
  arrow1.createArrow(context);
  const circleend = (circle1.xp + circle1.rd);
    if((arrow1.x-25) < circleend) {
      arrow1.x +=arrow1.dx; 
      circle1.changeCircleColor('#000000');     
    }
      arrow1.dx = 1 * arrow1.speed ;
      arrow1.x -=arrow1.dx;       
  }

  function moveArrow2() {  
    requestAnimationFrame(moveArrow2);
    arrow2.moveArrowPosition();
    arrow2.createArrow(context);
    const circleend = (circle2.xp + circle2.rd);
    if((arrow2.x-25) < circleend) {
      arrow2.x +=arrow2.dx;
      circle2.changeCircleColor('#000000');
    } 
      arrow2.dx = 1 * arrow2.speed ;
      arrow2.x -=arrow2.dx;    
  } 
    

    function moveArrow3() {  
      requestAnimationFrame(moveArrow3);
      arrow3.moveArrowPosition();
      arrow3.createArrow(context);
      const circleend = (circle3.xp + circle3.rd);
    if((arrow3.x-25) < circleend) {
      arrow3.x +=arrow3.dx;
      circle3.changeCircleColor('#000000');
    }    
      arrow3.dx = 1 * arrow3.speed ;
      arrow3.x -=arrow3.dx;    
  }

      function moveArrow4() {  
        requestAnimationFrame(moveArrow4);
        arrow4.moveArrowPosition();
        arrow4.createArrow(context);
        const circleend = (circle4.xp + circle4.rd);
    if((arrow4.x-25) < circleend) {
      arrow4.x +=arrow4.dx;
      circle4.changeCircleColor('#000000');
    }
      arrow4.dx = 1 * arrow4.speed ;
      arrow4.x -=arrow4.dx; 
  }

  //-----------------------Reset------------            
  
function resetCanvas() {
  window.location.reload();    
}