Crafty.init(winX, winY, document.getElementById('game'));

var winX                    = window.innerWidth;
var winY                    = window.innerHeight;
var maxEat                  = 20;
var index                   = 0;
var speed                   = 200;
var del                     = false;


Crafty.background('url(back.jpg)');

var player = Crafty.e('2D, DOM, Color, Fourway')
  .attr({x: 0, y: 0, w: 100, h: 100})
  .color('black')
  .fourway(speed);



Crafty.c("eat", {
  init: function() {
      this.addComponent("2D, DOM, Color");
      this.x = Crafty.math.randomNumber(0,winX);
      this.y = Crafty.math.randomNumber(0,winY);
      this.w = 40;    // width
      this.h = 40;    // height
      this.color("green");
      this.bind("EnterFrame", function () {
        if (this.x < player.x + player.w &&
            this.x + this.w > player.x &&
            this.y < player.y + player.h &&
            this.h + this.y > player.y) {
            // collision detected!
                this.destroy();
                player.w = player.w + 20;
                player.h = player.h + 20;
                speed = speed - 2;
                console.log("Its okkk");
                del = true;
        }
    })
   }
});

 var mass                    = player.w;

  
  Crafty.c("text", {
    init: function() {
    this.addComponent("2D, DOM, Text");
    this.x = 40;
    this. y = 900;
    this.text = mass;
    this.bind("EnterFrame", function(){
      if (del == true) {
        this.destroy();
      }
    })
    }
  });
  Crafty.e("text").text;
  del = false;



function drawEat(){
  Crafty.e("eat").eat;
};

console.log('ok');
var timerId = setInterval(function() {
  console.log('ok')
  drawEat();
}, 2000);

  //   eat.bind("EnterFrame", function () {
  //     if (eat.x < player.x + player.w &&
  //         eat.x + eat.w > player.x &&
  //         eat.y < player.y + player.h &&
  //         eat.h + eat.y > player.y) {
  //         // collision detected!
  //         this.color("green");
  //     } else {
  //         // no collision
  //         this.color("blue"); 
  //     }
  // });
// через 10 сек остановить повторы
setTimeout(function() {
  clearInterval(timerId);
  console.log('stopped');
}, 50000);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

