// put <script src="indexTest.js"></script> in body after canvas1


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// Setting the color of the rectangle
ctx.fillStyle = 'blue';
// First parameter is the starting x position on the canvas
// an x value of 0 would start drawing all the way to the left
// Second parameter is the starting y position on the canvas
// a y value of 0 would start drawing all the way to the top
// The third and fourth parameters are for the width and height of the rectangle
ctx.fillRect(50, 50, 20, 20);