'use strict';





// ------------------------------------------------------------------------------------------------

//                                    ----- GRAVITY -----
// ------------------------------------------------------------------------------------------------
// gravity version 1. 完成版 ---

// const body = document.querySelector('body');
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;


// class Ball {
//   constructor(x, y, radius, color, dy, gravity) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dy = dy;
//   this.gravity = gravity;
//   this.friction = 0.7;
//   this.eventHandler();
//   }
//   eventHandler() {  // gravity switch event
//     window.addEventListener('click', (e) => {
//       if(e.clientY < 100 &&  // 1G
//         e.clientX > 150 && e.clientX < canvas.width - 150) {
//         canvas.classList.remove('blank');
//       } 
//       if(e.clientY < canvas.height - 85  // 1/2G
//       && e.clientY > canvas.height - 130 && 
//         e.clientX > 150 && e.clientX < canvas.width - 150) {
//         canvas.classList.add('blank');
//       }
//     });
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();
//   }
//   movement() {
//     this.y += this.dy
//   }
//   colDetect() {
//     if(this.y + this.radius > canvas.height) {
//       if(this.dy < 0) {
//         // this.y = canvas.height - this.radius
//         // this.dy = '';
//       } else {
//         this.dy = -this.dy * this.friction;
//       }
//     } 
//     else {  // * gravity inside else process * //
//       this.dy += this.gravity;
//     }
//   }
//   update() {
//     this.draw();
//     this.colDetect();
//     this.movement();
//   }
// }

// // -------------------------------------------------------------------------

//   const ballArray = [];
// function createBalls(gravity) {
//   if(canvas.classList.contains('blank')) 
//     {gravity = 0.1} else {gravity = 1}
//   for (let i = 0; i < 500; i++) {
//     ballArray.push(new Ball(
//     Math.random() * (canvas.width - 80) + 40, 
//     // Math.random() * canvas.width, // ballsOverCvsWidth
//     Math.random() * canvas.height * 2 - 1500,  
//     Math.random() * 30 + 10, 
//     `hsla(${Math.random() * 360}, 80%, 50%, 0.5)`, 
//     Math.random() * 12, gravity));
//   }
// } createBalls();

// function popBalls(gravity) {
//   if(canvas.classList.contains('blank')) 
//     {gravity = 0.1} else {gravity = 1}
//   for (let i = 0; i < 500; i++) {
//       ballArray.push(new Ball(
//       Math.random() * (canvas.width - 80) + 40, 
//       // Math.random() * canvas.width, // ballsOverCvsWidth
//       Math.random() * canvas.height - 50,    
//       Math.random() * 30 + 10, 
//       `hsla(${Math.random() * 360}, 80%, 50%, 0.5)`, 
//       Math.random() * -12, gravity));
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ballArray.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();


// // event ------------------------------------------------------------------

// canvas.addEventListener('click', (e) => {
//   if(e.clientY < 100 && e.clientX < 100) {
//     ballArray.splice(0);
//     createBalls(); // new ball
//   } else if(e.clientY < 100 && e.clientX > canvas.width - 100) {
//       createBalls(); // add ball
//       if(ballArray[1001]) {ballArray.splice(0, 500)} 
//     // canvas color switch
//   } else if(e.clientY > canvas.height / 2 - 25 
//       && e.clientY < canvas.height / 2 + 25) {
//     canvas.classList.toggle('js_bgColorBlack');
//     body.classList.toggle('js_bgColorBlack');
//   } 
//   // click & pop bottom balls
//   if(e.clientY > canvas.height - 50) {
//     ballArray.splice(0);
//     popBalls();
//   }
// });

// window.addEventListener('resize', () => {
//   window.location.reload();
// });


// ------------------------------------------------------------------------------------------------
// gravity version 2. colDetect 改良参考版 ---


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

// class Ball {
//   constructor(x, y, radius, color, dy) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dy = dy;
//   this.gravity = 1;
//   this.friction = 0.5;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();
//   }
//   movement() {
//     this.y += this.dy
//     // console.log(this.dy);
//   }
//   colDetect() {
//     if(this.dy < 0) {  
//       if(this.y + this.radius > canvas.height) {
//         this.dy = -this.dy * this.friction;
//       } else {
//           this.dy += this.gravity;
//       }
//     } else {
//       if(this.y + this.radius + this.dy > canvas.height) {
//         this.dy = -this.dy * this.friction;
//       } else {
//           this.dy += this.gravity;
//       }
//     }
//   }
//   update() {
//     this.colDetect();
//     this.movement();
//     this.draw();
//   }
// }

// // const ball = new Ball(canvas.width / 2, canvas.height / 2, 30, 'red', 2);

// const balls = [];
// function createBalls() {
//   for (let i = 0; i < 500; i++) {
//     balls.push(new Ball(
//     Math.random() * canvas.width, 
//     Math.random() * canvas.height - 100,  
//     // 30, 
//     Math.random() * 30 + 10, 
//     `hsla(${Math.random() * 360}, 80%, 50%, 0.5)`, 2));
//   }
// } createBalls();


// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // ball.update()
//   balls.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();

// canvas.addEventListener('click', (e) => {
//   if(e.clientY > canvas.height - 50) {
//     balls.splice(0);
//     for (let i = 0; i < 500; i++) {
//       balls.push(new Ball(
//         Math.random() * canvas.width, 
//         Math.random() * canvas.height - 50,    // slowOne +300
//         Math.random() * 30 + 10, 
//         `hsla(${Math.random() * 360}, 80%, 50%, 0.5)`, Math.random() * 12))
//     }
//   }
// });

// window.addEventListener('resize', () => {
//   window.location.reload();
// });


// ------------------------------------------------------------------------------------------------
// gravity version 3. bounce balls 完成版 ---


// const colors = ['#2185c5','#7ecefd','#fff6e5','#ff7f66'];
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;


//   function randomColor(colorsArr) {
//     return colorsArr[Math.floor(Math.random() * colors.length)];
//   }
//   function randomMinMax(min, max) {
//     return Math.random() * (max - min) + min;
//   }


// class Ball {
//   constructor(x, y, radius, color, dx, dy) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dx = dx;
//   this.dy = dy;
//   this.gravity = 1;
//   this.friction = 0.98;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.stroke()
//     ctx.closePath();
//   }
//   movement() {
//     this.x += this.dx;
//     this.y += this.dy;
//     // console.log(this.dy);
//   }
//   colDetect() {
//     if(this.dy < 0) {  // detect ground
//       if(this.y + this.radius > canvas.height) {
//         this.dy = -this.dy * this.friction;
//       } else {
//         this.dy += this.gravity;
//       }
//     } else {
//       if(this.y + this.radius + this.dy > canvas.height) {
//         this.dy = -this.dy * this.friction;
//       } else {
//         this.dy += this.gravity;
//       }
//     }
//     // detect x coordinate
//     if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     // delate dx value
//     if(this.y + this.radius > canvas.height - 3 
//     && this.y - this.radius > canvas.height - 65) {
//       this.dx *= 0.9;
//     } else {this.dx = this.dx}
//   }
//   update() {
//     this.colDetect();
//     this.movement();
//     this.draw();
//   }
// }


// // const ball = new Ball(canvas.width / 2, canvas.height / 2, 30, 'red', 0, 2);
// // --------------------------------------------------------------------------------

// const ballArr = [];
// function createBalls() {
//   for (let i = 0; i < 500; i++) {
//     ballArr.push(new Ball(
//     randomMinMax(40, canvas.width - 40), 
//     randomMinMax(0, canvas.height - 100),  
//     randomMinMax(10, 30), 
//     randomColor(colors), 
//     Math.random() < 0.5 ? 5 : -5, Math.random() * -12));
//   }
// } createBalls();


// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // ball.update()
//   ballArr.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();


// // event ---------------------------------------------------------------

// canvas.addEventListener('click', (e) => {
//   if(e.clientY > canvas.height - 50) {
//     ballArr.splice(0);
//     for (let i = 0; i < 500; i++) {
//       ballArr.push(new Ball(
//         randomMinMax(40, canvas.width - 40), 
//         randomMinMax(50, canvas.height - 100),  
//         randomMinMax(10, 30),
//         randomColor(colors), 
//         Math.random() < 0.5 ? 5 : -5, Math.random() * -12));
//     }
//   }
// });

// window.addEventListener('resize', () => {
//   window.location.reload();
// });


// -------------------------------------------------------------------------------------------------------
// gravity version 4. mouse popping balls ---  POPPING BALLS


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  function randomMinMax(min, max) {
    return Math.random() * (max - min) + min;
  }

  const mouse = {
    x: undefined,
    y: undefined
  }

class Ball {
  constructor(x, y, radius, color, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.dx = dx;
  this.dy = dy;
  this.gravity = 1;
  this.frictionX = 0.93;
  this.frictionY = 0.3;
  this.eventHandler();
  }
  eventHandler() {  // gravity switch to 0G
    canvas.addEventListener('click', (e) => {
      if(e.clientY < 100 && e.clientX > canvas.width - 100) {
        canvas.classList.add('blank');
      }
      if(e.clientY < 100 && e.clientX < 100) {
        canvas.classList.remove('blank');
        this.radius = randomMinMax(20, 30);
      } 
    });
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  movement() {
    this.x += this.dx;
    this.y += this.dy;
  }
  wallColDetect() {
    this.reposition();
    if(this.x + this.radius + this.dx > canvas.width 
    || this.x - this.radius + this.dx < 0) {
      this.dx = -this.dx;
    } 
    if(this.y - this.radius + this.dy < 0) {
      this.dy = -this.dy
    }
    if(this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * this.frictionY;
      this.dx = this.dx * this.frictionX; 
    } else {this.dy += this.gravity}
  }
  mouseColDetect() {
    const distance = Math.hypot(mouse.x - this.x, mouse.y - this.y);
    if(distance - this.radius < 0) {
      if(canvas.classList.contains('blank')) {
        if(this.radius < 100) {this.radius += 3}
        else if(this.radius >= 100) {this.radius = 20}
      }
      this.dx = (Math.random() - 0.5) * 20; 
      this.dy = Math.floor(Math.random() * -35);  
      setTimeout(() => {
        [mouse.x, mouse.y] = [null, null];
      }, 100);
    } 
  }
  reposition() {
    if(this.x > canvas.width) {
      this.x = canvas.width - this.radius;
    } else if(this.x < 0) {
      this.x = 0 + this.radius;
    }
    if(this.y + this.radius > canvas.height + 1) {
      this.y = canvas.height - this.radius;
    }
  }
  update() {
    this.draw();
    this.movement();
    this.wallColDetect();
    this.mouseColDetect()
  }
}

// --------------------------------------------------------------------------------

const ballArr = [];
function createBalls() {
  for (let i = 0; i < 30; i++) {
    ballArr.push(new Ball(
    randomMinMax(30, canvas.width - 30), 
    randomMinMax(30, canvas.height - 100),  
    randomMinMax(20, 30), 
    // '#2b2b2bdb', 
    // '#e11f1fa3', 
    // '#940de2cf', 
    // '#87cfebcf', 
    `hsla(${Math.random() * 360}, 80%, 50%, 0.8)`, 
    (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5));
  }
} createBalls();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballArr.forEach(ball => {
    ball.update();
  });
  requestAnimationFrame(animate);
}
animate();


// event ---------------------------------------------------------------

canvas.addEventListener('click', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
  window.location.reload();
});

// --------------------------------------------------------------------------------
// wallColDetect()
// if(this.y + this.radius + this.dy > canvas.height) {
//   if(this.dy < 0) {this.dy = -this.dy * this.frictionY} 
//   else {this.dx = this.dx * this.frictionX}
// } else {this.dy += this.gravity}
// --------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// gravity version 5. mouse interactive floating popping balls ---  ZERO GRAVITY


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   function randomMinMax(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   const mouse = {
//     x: undefined,
//     y: undefined
//   }


// class Ball {
//   constructor(x, y, radius, color, dx, dy, gravity) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dx = dx;
//   this.dy = dy;
//   this.gravity = gravity;
//   this.frictionY = 0.3;
//   this.frictionX = 0.3;
//   this.eventHandler();
//   }
//   eventHandler() {  // gravity switch to 0G
//     canvas.addEventListener('click', (e) => {
//       if(e.clientY < 100 && e.clientX < 100) {
//         canvas.classList.remove('blank');
//         this.gravity = 0;
//         this.dx = (Math.random() - 0.5) * 5;
//         this.dy = (Math.random() - 0.5) * 5;
//       } 
//     });
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
//   }
//   movement() {
//     this.x += this.dx;
//     this.y += this.dy;
//   }
//   wallColDetect() {
//     this.reposition();
//     if(this.x + this.radius + this.dx > canvas.width 
//     || this.x - this.radius + this.dx < 0 ) {
//       this.dx = -this.dx * this.frictionX;
//     } 
//     if(this.y - this.radius + this.dy < 0) {
//       this.dy = -this.dy
//     }
//     if(this.y + this.radius + this.dy > canvas.height) {
//       if(this.dy > 0) {
//         this.dy = -this.dy * this.frictionY;
//       } else {
//         [this.dx, this.dy] = [this.dx * this.frictionX, this.dy * this.frictionY]; 
//       }
//     } else {this.dy += this.gravity}
//   }
//   mouseColDetect() {
//     const distance = Math.hypot(mouse.x - this.x, mouse.y - this.y);
//     if(distance - this.radius < 0) {
//       this.dx = (Math.random() - 0.5) * 20; 
//       this.dy = (Math.random() - 0.5) * 40; 
//       setTimeout(() => {
//         [mouse.x, mouse.y] = [null, null];
//       }, 0);
//     } 
//     // if(mouse.x - this.x < this.radius && mouse.x - this.x > -this.radius
//     //   && mouse.y - this.y < this.radius && mouse.y - this.y > -this.radius) {
//     //   this.dx = (Math.random() - 0.5) * 20; 
//     //   this.dy = (Math.random() - 0.5) * 40; 
//     //   setTimeout(() => {
//     //     [mouse.x, mouse.y] = [null, null];
//     //   }, 0);
//     // }
//   }
//   reposition() {
//     if(this.x + this.radius - 1 > canvas.width) {
//       this.x = canvas.width - this.radius;
//     } else if(this.x - this.radius + 1 < 0) {
//       this.x = 0 + this.radius;
//     }
//     if(this.y + this.radius > canvas.height + 1) {
//       this.y = canvas.height - this.radius;
//     } else if(this.y - this.radius + 1 < 0) {
//       this.y = 0 + this.radius;
//     }
//   }
//   update() {
//     this.draw();
//     this.movement();
//     this.wallColDetect();
//     this.mouseColDetect()
//   }
// }


// // --------------------------------------------------------------------------------

// const ballArr = [];
// function createBalls(gravity) {
//   if(canvas.classList.contains('blank')) 
//     {gravity = 1} else {gravity = 0}
//   for (let i = 0; i < 120; i++) {  // SP 60 // PC 120 //
//     ballArr.push(new Ball(
//     randomMinMax(30, canvas.width - 30), 
//     randomMinMax(30, canvas.height - 30),  
//     randomMinMax(10, 30), 
//     // '#2b2b2bdb', 
//     // '#e11f1fa3', 
//     // '#940de2cf', 
//     // '#87cfebcf', 
//     '#87cfeb',
//     // `hsla(${Math.random() * 360}, 80%, 50%, 0.8)`, 
//     (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, gravity));
//   }
// } createBalls();


// function animate() {
//   // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ballArr.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();


// // event ---------------------------------------------------------------

// // gravity switch to 1G
// canvas.addEventListener('click', (e) => {
//   if(e.clientY < 100  
//   && e.clientX > canvas.width - 100) {
//     if(canvas.classList.contains('blank')) return;
//     canvas.classList.add('blank');
//     ballArr.splice(0);
//     createBalls();
//   }
// });

// canvas.addEventListener('touchmove', (e) => {
//   mouse.x = e.touches[0].clientX;
//   mouse.y = e.touches[0].clientY;
// });

// canvas.addEventListener('mousemove', (e) => {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// window.addEventListener('resize', () => {
//   window.location.reload();
// });


// ------------------------------------------------------------------------------------------------
// gravity version 6. mouse glow floating balls --- 


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   function randomMinMax(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   const mouse = {
//     x: undefined,
//     y: undefined
//   }


// class Ball {
//   constructor(x, y, radius, color, dx, dy, gravity) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dx = dx;
//   this.dy = dy;
//   this.gravity = gravity;
//   this.frictionY = 1;
//   this.frictionX = 1;
//   this.eventHandler();
//   }
//   eventHandler() {  // gravity switch to 0G
//     canvas.addEventListener('click', (e) => {
//       if(e.clientY < 100 &&  
//         e.clientX < 100) {
//         canvas.classList.remove('blank');
//         this.gravity = 0;
//         this.dx = (Math.random() - 0.5) * 5;
//         this.dy = (Math.random() - 0.5) * 5;
//       } 
//     });
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
//   }
//   movement() {
//     this.x += this.dx;
//     this.y += this.dy;
//   }
//   wallColDetect() {
//     this.reposition();
//     if(this.x + this.radius + this.dx > canvas.width 
//     || this.x - this.radius + this.dx < 0 ) {
//       this.dx = -this.dx * this.frictionX;
//     } 
//     if(this.y - this.radius + this.dy < 0) {
//       this.dy = -this.dy
//     }
//     if(this.y + this.radius + this.dy > canvas.height) {
//       if(this.dy > 0) {
//         this.dy = -this.dy * this.frictionY;
//       } else {
//         [this.dx, this.dy] = [this.dx * this.frictionX, this.dy * this.frictionY]; 
//       }
//     } else {this.dy += this.gravity}
//   }
//   mouseColDetect() {
//     const distance = Math.hypot(mouse.x - this.x, mouse.y - this.y);
//     if(distance - this.radius < 0) {
//       this.radius += 1;
//       if(this.radius > 100) {
//         this.radius = this.radius * 0.1;
//       }
//       setTimeout(() => {
//         [mouse.x, mouse.y] = [null, null];
//       }, 0);
//     } 
//   }
//   reposition() {
//     if(this.x + this.radius - 1 > canvas.width) {
//       this.x = canvas.width - this.radius;
//     } else if(this.x - this.radius + 1 < 0) {
//       this.x = 0 + this.radius;
//     }
//     if(this.y + this.radius > canvas.height + 1) {
//       this.y = canvas.height - this.radius;
//     } else if(this.y - this.radius + 1 < 0) {
//       this.y = 0 + this.radius;
//     }
//   }
//   update() {
//     this.draw();
//     this.movement();
//     this.wallColDetect();
//     this.mouseColDetect()
//   }
// }


// // --------------------------------------------------------------------------------

// const ballArr = [];
// function createBalls(gravity) {
//   if(canvas.classList.contains('blank')) 
//     {gravity = 1} else {gravity = 0}
//   for (let i = 0; i < 120; i++) {
//     ballArr.push(new Ball(
//     randomMinMax(30, canvas.width - 30), 
//     randomMinMax(30, canvas.height - 30),  
//     randomMinMax(30, 30), 
//     // '#2b2b2b', 
//     // '#e11f1fa3', 
//     // '#940de2cf', 
//     '#940de2', 
//     // '#87cfebcf', 
//     // '#87cfeb',
//     // `hsla(${Math.random() * 360}, 80%, 50%, 0.8)`, 
//     (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, gravity));
//   }
// } createBalls();


// function animate() {
//   // ctx.fillStyle = 'rgba(26, 26, 26, 0.1)'
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ballArr.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();


// // event ---------------------------------------------------------------

// // gravity switch to 1G
// canvas.addEventListener('click', (e) => {
//   if(e.clientY < 100  
//   && e.clientX > canvas.width - 100) {
//     if(canvas.classList.contains('blank')) return;
//     canvas.classList.add('blank');
//     ballArr.splice(0);
//     createBalls();
//   }
// });

// canvas.addEventListener('mousemove', (e) => {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// window.addEventListener('resize', () => {
//   window.location.reload();
// });


// ------------------------------------------------------------------------------------------------
// gravity version 6+. mouse interactive floating glow balls version 2.--- 


// let RANDOM_COLOR;
// const colors = ['#F2E635','#F2D43D','#F2E7AC','#26211D','#F2F2F2']; // opacity cf
// const colors1 = ['#BF60A6','#B8D5D9','#BCD952','#F28B30','#F24130'];
//   const canvas = document.querySelector('canvas');
//   const ctx = canvas.getContext('2d');
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;

//   function randomMinMax(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   const mouse = {
//     x: undefined,
//     y: undefined
//   }


// class Ball {
//   constructor(x, y, radius, dx, dy, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.dx = dx;
//   this.dy = dy;
//   this.gravity = 0;
//   this.frictionY = 1;
//   this.frictionX = 1;
//   this.eventHandler();
//   }
//   eventHandler() {  // gravity switch 
//     canvas.addEventListener('click', (e) => {
//       if(e.clientY < 100  
//         && e.clientX > canvas.width - 100) {
//           this.gravity = 1;  // 1G
//       }
//       if(e.clientY < 100 && e.clientX < 100) {
//         this.gravity = 0;    // 0G
//         this.dx = (Math.random() - 0.5) * 5;
//         this.dy = (Math.random() - 0.5) * 5;
//       } // resize
//       if(e.clientY > canvas.height / 2 - 25 
//         && e.clientY < canvas.height / 2 + 25) {
//         this.radius = randomMinMax(1, 5); 
//       }  // down velocity
//       if(e.clientY > canvas.height - 100) {
//         this.dx = (Math.random() - 0.5) * 1;
//         this.dy = (Math.random() - 0.5) * 1;
//       }
//     });
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     // ctx.stroke();
//     ctx.closePath();
//   }
//   movement() {
//     this.x += this.dx;
//     this.y += this.dy;
//   }
//   wallColDetect() {
//     this.reposition();
//     if(this.x + this.radius + this.dx > canvas.width 
//     || this.x - this.radius + this.dx < 0 ) {
//       this.dx = -this.dx * this.frictionX;
//       // this.radius = Math.random() * 100; // * shrink version
//     } 
//     if(this.y - this.radius + this.dy < 0) {
//       this.dy = -this.dy
//     }
//     if(this.y + this.radius + this.dy > canvas.height) {
//       if(this.dy > 0) {
//         this.dy = -this.dy * this.frictionY;
//       } else {
//         [this.dx, this.dy] = [this.dx * this.frictionX, this.dy * this.frictionY]; 
//       }
//     } else {this.dy += this.gravity}
//   }
//   mouseColDetect() {
//     // if(mouse.x - this.x < 50 && mouse.x - this.x > -50  // SP //
//     //   && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//     if(mouse.x - this.x < 100 && mouse.x - this.x > -100  // PC //
//       && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
//       this.radius += 1;
//       // this.radius -= 1; // * shrink version 
//       // if(this.radius < 0){this.radius = 10} // *
//       setTimeout(() => {
//         [mouse.x, mouse.y] = ['null', null];
//       }, 0);
//     } 
//     // else if(this.radius > 70)  // SP //
//     else if(this.radius > 100)  // PC //
//     {this.radius = this.radius * 0.01} 
//     // else if(this.radius > 10){this.radius -= 1}  // auto shrink
//   }
//   reposition() {
//     if(this.x + this.radius - 1 > canvas.width) {
//       this.x = canvas.width - this.radius;
//     } else if(this.x - this.radius + 1 < 0) {
//       this.x = 0 + this.radius;
//     }
//     if(this.y + this.radius > canvas.height + 1) {
//       this.y = canvas.height - this.radius;
//     } else if(this.y - this.radius + 1 < 0) {
//       this.y = 0 + this.radius;
//     }
//   }
//   update() {
//     this.draw();
//     this.movement();
//     this.wallColDetect();
//     this.mouseColDetect()
//   }
// }


// // --------------------------------------------------------------------------------

// const ballArr = [];
// function createBalls() {
//   for (let i = 0; i < 120; i++) {  // * 920 glow 520
//     RANDOM_COLOR = colors[Math.floor(Math.random() * colors.length)];
//     ballArr.push(new Ball(
//     randomMinMax(30, canvas.width - 30), 
//     randomMinMax(30, canvas.height - 30),  
//     randomMinMax(3, 10), // glow 3,10
//     (Math.random() - 0.5) * 1,  
//     (Math.random() - 0.5) * 1,  
//     // RANDOM_COLOR,
//     '#940de2cf',
//     ));
//   }
// } createBalls();


// function animate() {
//   // ctx.fillStyle = 'rgba(26, 26, 26, 0.1)'
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ballArr.forEach(ball => {
//     ball.update();
//   });
//   requestAnimationFrame(animate);
// }
// animate();


// // event ---------------------------------------------------------------

// canvas.addEventListener('touchmove', (e) => {
//   mouse.x = e.touches[0].clientX;
//   mouse.y = e.touches[0].clientY;
// });

// canvas.addEventListener('mousemove', (e) => {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// window.addEventListener('resize', () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   // window.location.reload();
// });


// ------------------------------------------------------------------------------------------------



