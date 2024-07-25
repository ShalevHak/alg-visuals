let colors = [];
let w = 500;
let h = 500;
let cellSize;
let fr = 20;


// Other functions like initializeGenerations(), findNextGen(), getRuleSet(), drawGen(), etc. should follow here

function setup() {
    totalGens = Math.floor(h / cellSize);
    createCanvas(w, h);
    background(200);
    frameRate(fr);
    //colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]; // Example colors
}
