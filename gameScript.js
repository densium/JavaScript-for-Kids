
//functions

    var clearRecto = function () {
        ctx.clearRect(0, 0, width, height);
    };
    
    var drawBorder = function () {
        ctx.fillStyle = "Gray";
        ctx.fillRect(0, 0, width, blocksize);
        ctx.fillRect(0, height - blocksize, width, blocksize);
        ctx.fillRect(0, 0, blocksize, height);
        ctx.fillRect(width - blocksize, 0, blocksize, height);
    };

    var drawScore = function () {
        ctx.font = "20px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Cчет" + score, blocksize, blocksize);
    };

    var gameOver = function () {
        clearInterval(intervalId);
        ctx.font = "60 px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Конец игры", width / 2, height / 2);
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

    function Block(col, row) {
        this.col = col;
        this.row = row;

        this.drawSquare = function (color, size = "small") {
            let x = this.col * blocksize;
            let y = this.row * blocksize;
            ctx.fillStyle = color;
            switch (size) {
                case "big":
                    ctx.fillRect(x - 1, y - 1, blocksize + 3, blocksize + 3);
                    break;
                default:
                    ctx.fillRect(x, y, blocksize, blocksize);
                    break;
            }
            
        };

        this.drawCircle = function (color) {
            var centerX = this.col * blocksize + blocksize / 2;
            var centerY = this.row * blocksize + blocksize / 2;
            ctx.fillStyle = color;
            circle(centerX, centerY, blocksize / 2, true);
        };

        this.equal = function (otherBlock) {
            return this.col === otherBlock.col && this.row === otherBlock.row;
        };
        
    }

    function Snake() {
        this.direction = "right";
        this.nextDirection = "right";
        
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5),
        ];

        this.draw = function () {
            this.segments.forEach(element => {
                element.drawSquare("Blue");
            });
            this.segments[0].drawSquare("Green", "big");
        };

        this.checkCollision = function(head) {
            let leftCollision = (head.col === 0);
            let topCollision = (head.row === 0);
            let rightCollision = (head.col === widthInBlocks - 1);
            let bottomCollision = (head.row === heightInBlocks - 1);

            let wallCollision = leftCollision || rightCollision || topCollision || bottomCollision;

            let selfCollision = false;

            for (let i = 0; i < this.segments.length; i++) {
                if (head.equal(this.segments[i])) {
                    selfCollision = true;
                } 
            }

            return wallCollision || selfCollision;
        };

        this.move = function () {
            var head = this.segments[0];
            var newHead;
            
            this.direction = this.nextDirection;

            switch (this.direction) {
                case "right":
                    newHead = new Block(head.col + 1, head.row);
                    break;
                case "down":
                    newHead = new Block(head.col, head.row + 1);
                    break;
                case "left":
                    newHead = new Block(head.col - 1, head.row);
                    break;
                case "up":
                    newHead = new Block(head.col, head.row - 1);
                    break;
                default: 
                    console.log("Key is not defined");
                    break;
            }

            if (this.checkCollision(newHead)) {
                gameOver();
                return;
            }
            
            this.segments.unshift(newHead);

            if (newHead.equal(apple.position)) {
                score++
                apple.move();
            } else {
                this.segments.pop();
            }
        };
        
    }

    Snake.prototype.setDirection = function (newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }
        
        this.nextDirection = newDirection;
    };

    function Apple() {
    this.position = new Block(10, 10);

    this.draw = function () {
    this.position.drawCircle("LimeGreen");
    }

    this.move  = function () {
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
    }
    }
