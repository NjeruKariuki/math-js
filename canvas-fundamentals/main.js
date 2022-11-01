const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];
let hue = 0;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


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
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

/*
function init() {
    for(let i = 0; i < 100; i++) {
        particlesArray.push(new Particle()) //data structures stores particles
    }
}

init();
*/

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

/*
function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}
*/

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
