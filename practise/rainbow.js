context.rect(0, 0, canvas.width, canvas.height);
var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
grd.addColorStop(0.14, '#FF0000');
grd.addColorStop(0.285714286, '#FF7F00');
grd.addColorStop(0.428571429, '#FFFF00');
grd.addColorStop(0.571428571, '#00FF00');
grd.addColorStop(0.714285714, '#0000FF');
grd.addColorStop(0.857142857, '#4B0082');
grd.addColorStop(1.0, '#8F00FF');
context.fillStyle = grd;
context.fill();