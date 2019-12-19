let array = [];
let y = -10, k = 0;
let h = 0;
let ct = 8;
let len = 0, scr = 0;

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
c.height = window.innerHeight*0.98;
c.width = window.innerWidth*0.996;

let selectColor = ["#DB291D",'#F85F68','#77B1AD','#F0B99A','#E1CF79','#F5998E','#B16774',"#FAB301",
       "#F85F68","#4FAA6D","orange","green","#58A8C9","#CDD6D5","#ECD2A2","white"];
  
let theme = ["google","youtube","hike","fb","eyes","smile","anjali","jain",'patna','zoo','orange','dog','pen'];

function Balloon(x, y, r, color, dy, text, word){ 
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.dy = dy;
  this.text = text;
  this.word = word;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.fillStyle=this.color;
    ctx.fill();
    ctx.stroke();
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(this.text, this.x - 25, this.y + 3);
  }
  this.update = function(){
    this.type();
    this.y += this.dy;
  }
  this.type = function(){
    ctx.font = '40px Arial';
    ctx.strokeStyle = 'lightgrey';
    ctx.strokeText(this.word, 670, 580);
  }
}

for (let i = 0; i < 12; i++){
  let x = Math.random()*(c.width-60)+30;
  y -= 60;
  let r = 30;
  let dy = 1;
  let color = selectColor[Math.floor(Math.random()*(selectColor.length-1))];
  let text = theme[k];
  k++;
  array.push(new Balloon(x, y, r, color, dy, text, ''));
}
 
animate();

function animate(){
	requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth,innerHeight);
  ctx.font = "18px Arial";
  ctx.fillStyle = 'black';
  ctx.fillText("SCORE:", 1200, 20);

  ctx.fillText(scr, 1280, 20);
  ctx.font = "40px Arial";
  ctx.strokeStyle = 'lightgrey';
  ctx.strokeText("TYPE TYPE", 10, 40);
  ctx.beginPath();
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(c.width/2-20, c.height-50, 50, 50);
  ctx.fill();
  for (let m = 0; m < array.length; m++){
    array[m].draw();
  }
  for (let p = 0; p < array.length; p++){
    array[p].update();
    if (array[p].y >= c.height){
      if(array[p].r > 0){
      alert("Game over!!");
    } 
  }}
}

window.addEventListener("keyup", function(event){
  let char = String.fromCharCode(event.keyCode).toLowerCase();
  if (ct == 8){
    for (let g = 0; g < array.length; g++){
      if (array[g].y >= 0 && array[g].text.substring(0, 1) === char){
        h = g;
        len = array[h].text.length;
        break;
      }
    }}
  if (array[h].text.substring(0, 1) === char){
    let word = array[h].text.substring(0, 1);
    array[h].word = word;
    array[h].text = (array[h].text).replace(word, "");
    ct--;
    if (array[h].text.length == 0){ 
      ct += len;
      array[h].r = 0;
      array[h].y = 0;
      scr++;
      array[h].word = ''; 
    }
    }

});


