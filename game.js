let circleY = [];
let score = 0;


let bg;
let y = 0;


function setup() {
    bg = loadImage('773309.jpg');
    createCanvas(1500, 800);
    let height = 200;
    for (let i = 0; i < 30; i++) {
        circleY[i] = random(height);
    }
}

function gameOn() {
    fill(255, 255, 255);
    text("score = " + score, 10, 50);
}

function draw() {
    //cursor('Unknown.png');
    circle(mouseX, mouseY, 500)
    ///background(0, 0, 0);
    background(bg);
    ///fill(97, 47, 22);
    fill(89, 52, 235);


    // line(width / 2, 0, width / 2, height);
    // line(0, height / 2, width, height / 2);
    // if (mouseX < 50 && mouseY < 50) {
    //     cursor(CROSS);
    // } else if (mouseX > 50 && mouseY < 50) {
    //     cursor('progress');
    // } else if (mouseX > 50 && mouseY > 50) {
    //     cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
    // } else {
    //     cursor('grab');
    // }



    cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
  


    for (let i = 0; i < circleY.length; i++) {
        let circleX = (width * i) / circleY.length;
        circle(circleX+1, circleY[i]+20, 25);

        if (dist(mouseX, mouseY, circleX, circleY[i]) < 12.5) {
            console.log("COLLIDED");
            score = score+1;
           // text("score = " + score, 10, 50);
            fill(255, 152, 0);
        }
        //add lives variable
        circleY[i]++;
       // score = score+1;

        if (circleY[i] > 300) {
            circleY[i] = 0;
        }
    }

    gameOn();
}