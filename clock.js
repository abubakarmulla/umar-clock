var canvas = document.querySelector("Canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "red";
// c.border;
// c.fillRect(100, 100, 100, 100);
// console.log(canvas);

// c.beginPath();
// c.moveTo(200, 300);
// c.lineTo(600, 300);
// c.strokeStyle = "white";
// c.stroke();

for (var i = 0; i < 25; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  // // window.alert("Entered for loop");

  c.beginPath();
  for (var j = 0; j < 6; j++) {
    c.strokeStyle = "greenyellow";
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();
  }
}

// function animate(){
//     requestAnimationFrame(animate);
//     console.log("abcd");
// }
// animate();
