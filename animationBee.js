/**
 * TODO Можно сделать мини игру нарисовать стенки и двигать пчелу постепенно в сторону выхода
 *  */ 

// set functions
function drawCircle (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

function drawBee (x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    drawCircle(x, y, 8, true);
    drawCircle(x, y, 8, false);
    drawCircle(x - 5, y - 11, 5, false);
    drawCircle(x + 5, y - 11, 5, false);
    drawCircle(x - 2, y - 1, 2, false);
    drawCircle(x + 2, y - 1, 2, false);
  
};

function moveBee (coordinate) {
    var offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > 200) {
        coordinate = 200;
    }

    if (coordinate < 0) {
        coordinate = 0;
    }

    return coordinate;
};

// set canvas and parameters
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = canvas.height / 2;
var y = canvas.width / 2;

// set function for interval and start interval
function redrawBee() {
    ctx.clearRect(0, 0, 400, 400);
    drawBee(x, y);
    x = moveBee(x);
    y = moveBee(y);
    // ctx.strokeRect(0, 0, 400, 400);
}

let intervaId = setInterval(() => redrawBee(), 20);