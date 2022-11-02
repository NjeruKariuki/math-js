const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];
let hue = 0;
let radius = 50;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const centerX  = canvas.width / 2;
const centerY = canvas.height / 2; 


window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillStyle = 'white';
    ctx.fillRect(10, 20, 100, 50);

});

const mouse = {
    x: undefined,
    y: undefined,
}

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
       // this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 -1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function circularMotion() {
    //get x and y for vector circularMotion
    x = centerX + Math.cos(xAngle) * xRadius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
    requestAnimationFrame(render);
}

function handleParticles() {
    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        particlesArray[i].size-=0.02;
        console.log(particlesArray[i].size)
        //remove particles from array that are smaller than 0.3
        if(particlesArray[i].size < 1 ) {
            particlesArray.splice(i, 1);
            console.log(particlesArray.length);
            i--;
        }
    }
}

window.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i< 5; i++) {
        particlesArray.push(new Particle());
    }
})

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i< 5; i++) {
        particlesArray.push(new Particle());
    }
})


function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //clear rectangle to create trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    hue++;
    handleParticles();
    requestAnimationFrame(animate);
}

animate();
