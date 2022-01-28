var canvas=document.querySelector("canvas")
var c=canvas.getContext("2d")

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

mouse={
    x: 10,
    y: 10
}

colorArray=[
    '#2E333D',
    '#07AED7',
    '#F58167',
    '#FB404D',
    '#F3F5F1'
]

window.addEventListener('mousemove',function(event) {
    mouse.x=event.x
    mouse.y=event.y
})

addEventListener('resize',function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})

function randomInt(start,end) {
    return Math.random()*end+start;
}

function Circle(x,y,radius,color) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=color;

    this.draw=function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=color;
        c.fill();
        c.closePath();

    }

}

function getDistance(x1,y1,x2,y2) {
    xD=x2-x1;
    yD=y2-y1;
    return Math.sqrt(Math.pow(xD,2)+Math.pow(yD,2))
}

var circle1;
var circle2;
function init() {
    circle1=new Circle(innerWidth/2,innerHeight/2,150,"#6196f2")
    circle2=new Circle(mouse.x,mouse.y,30,"#fc5d5d")
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    circle1.draw();
    circle2.draw();
    circle2.x=mouse.x;
    circle2.y=mouse.y;

    distance=getDistance(circle1.x,circle1.y,circle2.x,circle2.y);
    radii=circle1.radius+circle2.radius;
    if (distance<radii) {
        console.log("Colliding")
        circle1=new Circle(innerWidth/2,innerHeight/2,150,"#fc5d5d")
        circle1.draw()
    } else {
        circle1=new Circle(innerWidth/2,innerHeight/2,150,"#6196f2")
        circle1.draw()
    }
}

init();
animate();
