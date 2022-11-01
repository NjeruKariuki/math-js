const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 -1.5;
    }
    update() {
        this.x = this.speedX;
        this.y = this.speedY;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for(let i = 0; i < 100; i++) {
        particlesArray.push(new Particle())
    }
}

init();

function handleParticles() {
    
}

window.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    animate();
})


function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}
