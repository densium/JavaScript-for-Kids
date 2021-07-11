// set functions

export function randomColor (colorArr) {
    let max = colorArr.length;
    return colorArr[randomInt(max)];
}

export function randomInt (max) {
    return Math.floor(Math.random() * max);
}

export function randomIntNegative (max) {
    return ((Math.random() < 0.5) ? -1 : 1) * ((Math.random() * 4) + 1);
}