// set functions
import { randomColor } from "./canvasScripts.js";
import { randomIntNegative } from "./canvasScripts.js";

function drawCircle (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

function Ball () {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = Math.floor(Math.random() * 9 + 2);
    this.xSpeed = randomIntNegative();
    this.ySpeed = randomIntNegative();
    this.color = randomColor(colorArr);
    this.move = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };
    this.draw = function () {
        ctx.fillStyle = this.color;
        drawCircle(this.x, this.y, this.radius, true);
    };
    this.checkCollision = function () {
        if (this.x < 0 || this.x > width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > height) {
            this.ySpeed = -this.ySpeed;
        }
    };
    
}

function ballsCreator (howManyBalls) {
    for (let i = 0; i < howManyBalls; i++) {
        ballsArray.push(new Ball());
    }
}

// set canvas and parameters
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const colorArr = ["Red", "Green", "Blue", "Purple", "Magenta", "Yellow"];
const frameSpeed = 15;
var ballsArray = []; 
ballsCreator(80); // how many balls to draw

// set function for interval and start interval
function redrawBalls() {
    ctx.clearRect(0, 0, width, height);
    ballsArray.forEach(element => {element.draw()});
    ballsArray.forEach(element => {element.move()});
    ballsArray.forEach(element => {element.checkCollision()});
    ctx.strokeRect(0, 0, width, height);
}

let intervalId = setInterval(() => redrawBalls(), frameSpeed);