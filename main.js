canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_img_array =["nasa_img_1.png","nasa_img_2.png","nasa_img_3.png","nasa_img_4.png","nasa_img_5.png"];
random_number = Math.floor(Math.random() * 5 );
console.log(random_number);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = nasa_mars_img_array[random_number] ;
console.log("Background = "+ background_image)
rover_image = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload()= uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '37') {
        left();
        console.log("Left is pressed");
    }

    if (keyPressed == '38') {
        up();
        console.log("Up is pressed");
    }

    if (keyPressed == '39') {
        right();
        console.log("Right is pressed");
    }

    if (keyPressed == '40') {
        down();
        console.log("Down is pressed");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When Up Arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When Down Arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When Left Arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When Right Arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}