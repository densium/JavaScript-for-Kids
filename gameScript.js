// animating game

var blocksize = 10;
var widthInBlocks = width / blocksize;
var heightInBlocks = height / blocksize;
var score = 0;

function drawBorder() {
    ctx.fillStyle = "Gray";
    ctx.fillRect =(0, 0, width, blocksize);
    ctx.fillRect =(0, height - blocksize, width, blocksize);
    ctx.fillRect =(0, 0, blocksize, height);
    ctx.fillRect =(width - blocksize, 0, blocksize, height);
};

function drawScore() {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    сtx.textBaseline = "top";
    ctx.fillText("Cчет" + score, blocksize, blocksize);
};

function gameOver() {
    clearInterval(intevalId);
    ctx.font = "60 px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
};

/*
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
    this.radius = 8; // random radius // Math.floor(Math.random() * 9 + 2)
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
        if (this.x < 0) {
            this.x = width;
        } else if (this.x > width) {
            this.x = 0;
        } else if (this.y < 0) {
            this.y = height;
        } else if (this.y > height) {
            this.y = 0;
        }
    };
    this.setDirection = function (direction) {
        switch (direction) {
            case 38: // up
                this.xSpeed = 0;
                this.ySpeed = -5;
                break;
            case 40: // down
                this.xSpeed = 0;
                this.ySpeed = 5;
                break;
            case 37: // left
                this.xSpeed = -5;
                this.ySpeed = 0;
                break;
            case 39: // right
                this.xSpeed = 5;
                this.ySpeed = 0;
                break;
            case 32: // space, stop
                this.xSpeed = 0;
                this.ySpeed = 0;
                break;
        
            default:
                console.log("Key is not defined");
                break;
        }
    };
    
};
*/