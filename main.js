canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_wid=120;
car1_hei=70;
car1_img="car1.png";
car1_x=10;
car1_y=100;

car2_wid=120;
car2_hei=70;
car2_img="car2.png";
car2_x=10;
car2_y=300;

background_image="racing.jpg";


function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_wid,car1_hei);
}
function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_wid,car2_hei);
}

windows.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed == '38'){
        car1_up();
    }
    if(keyPressed == '40'){
        car1_down();
    }
    if(keyPressed == '37'){
        car1_left();
    }
    if(keyPressed == '39'){
        car1_right();
    }
    if(keyPressed == '87'){
        car2_up();
    }
    if(keyPressed == '83'){
        car2_down();
    }
    if(keyPressed == '65'){
        car2_left();
    }
    if(keyPressed == '68'){
        car2_right();
    }
}