function preload() {
}

function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";

}

function draw() {
    image(video ,  0, 0 , 640 , 480);
    fill(240, 7, 240);
    stroke(240, 7, 240);
    circle(50, 50, 70);
    circle(550, 50, 70);
    circle(450, 50, 70);
    circle(350, 50, 70);
    circle(250, 50, 70);
    circle(150, 50, 70);
    circle(50, 150, 70);
    circle(50, 250, 70);
    circle(50, 350, 70);
    circle(50, 450, 70);
    circle(50, 550, 70);
    
    

    
    tint(tint_color);
}

function take_snapshot(){
  save('My_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}