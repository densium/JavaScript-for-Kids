// animating balls

var randomColor = function () {
    let colorArr = ["Red", "Green", "Blue", "Purple", "Magenta", "Yellow"];
    return colorArr[Math.floor(Math.random() * colorArr.length)];
};

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var randomInt = function () {
    return ((Math.random() < 0.5) ? -1 : 1) * ((Math.random() * 4) + 1);
};

var Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = Math.floor(Math.random() * 9 + 2);
    this.xSpeed = randomInt();
    this.ySpeed = randomInt();
    this.color = randomColor();
    this.move = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };
    this.draw = function () {
        ctx.fillStyle = this.color;
        circle(this.x, this.y, this.radius, true);
    };
    this.checkCollision = function () {
        if (this.x < 0 || this.x > width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > height) {
            this.ySpeed = -this.ySpeed;
        }
    };
    
};

var ballsCreator = function (howManyBalls) {     
    for (let i = 0; i < howManyBalls; i++) {
        ballsArray.push(new Ball());
    }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var ballsArray = [];

// start parameters
var frameSpeed = 15;
ballsCreator(80); // how many balls to draw

setInterval(function () {
    ctx.clearRect(0, 0, width, height);

    ballsArray.forEach(element => {element.draw()});
    ballsArray.forEach(element => {element.move()});
    ballsArray.forEach(element => {element.checkCollision()});

    ctx.strokeRect(0, 0, width, height);
}, frameSpeed);