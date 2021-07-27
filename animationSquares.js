// set functions            
import { randomColor } from "./canvasScripts.js";
import { randomInt } from "./canvasScripts.js";

// set canvas and parameters
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const colorArr = ["#5E2E2C", "#A81B16", "#DB231D", "#F54F49", "#5C0F0C"];
const blocksize = 40;
const shift = canvas.height - blocksize;

var color = randomColor(colorArr);
var positionX = 0;
var positionY = randomInt(shift);

// set function for interval and start interval
function redrawSquare() {
    // ctx.clearRect(0, 0, 200 ,200);
    ctx.fillStyle = color;
    ctx.fillRect(positionX, positionY, blocksize, blocksize);

    positionX += 3;
    if (positionX > canvas.width) {
        positionX = 0;
        positionY = randomInt(shift);
        color = randomColor(colorArr);
    }
}

let intervalId = setInterval(() => redrawSquare(), 16);