canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width = 120
car1_height = 70
car1_image =  "images.jpg";
car1_x = 10;
cat1_y = 10;

car2_width = 120
car2_height = 70
car2_image =  "download-2.jpg";
car2_x = 10;
cat2_y = 100;

background_img="racing.jpg"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground
    background_imgTag.src = background_img;


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2
    car2_imgTag.src = car2_img;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {
        car1_up();
        console.log("up arrow key")
    } 
    if(keyPressed == "40")
    {
        car1_down();
        console.log("down arrow key")

    } 

    if(keyPressed == "37")
    {
        car1_left();
        console.log("left arrow key")
    } 
    
    if(keyPressed == "39")
    {
        car1_rightc();
        console.log("right arrow key")
    } 
    
    if(keyPressed == "87")
    {
        car2_up();
        console.log("key w")
    } 
   
    if(keyPressed == "83")
    {
        car2_down();
        console.log("key s")
    } 

    if(keyPressed == "65")
    {
        car2_left();
        console.log("key a")
    } 

    if(keyPressed == "68")
    {
        car2_right();
        console.log("key d")
    } 
}
function car1_up(){
    if(car1_y >=10)
    {
        car1_y = car1_y - 10
        console.log("When up arrow is pressed, x =  " + car1_x + " | y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
}

function car1_down(){
    if(car1_y >=500)
    {
        car1_y = car1_y + 10
        console.log("When down arrow is pressed, x =  " + car1_x + " | y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
}

function car1_left(){
    if(car1_x >=0)
    {
        car1_x = car1_x - 10
        console.log("When left arrow is pressed, x =  " + car1_x + " | y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
}

function car1_up(){
    if(car1_x >=500)
    {
        car1_x = car1_x + 10
        console.log("When right arrow is pressed, x =  " + car1_x + " | y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
