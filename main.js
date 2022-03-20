function setup(){

c1=createCanvas(400,300);
c1.center();
v1=createCapture(VIDEO);
v1.hide();

}

function draw(){

image(v1,0,0,400,300);

}

function takephoto(){

save("moustache.png");

}