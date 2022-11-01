const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillStyle = 'white';
    ctx.fillRect(10, 20, 100, 50);

});

const mouse = {
    x: null,
    y: null,
}

window.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}

drawCircle();

