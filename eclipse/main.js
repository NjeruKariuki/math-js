window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        centerX = width / 2, 
        centerY = height / 2,
        xRadius = 150,
        yRadius = 200,
        angle = 0,
        //for lojaissures curve
        xAngle = 0,
        yAngle = 0,
        //speed = .01,
        xSpeed = .1,
        ySpeed = .131,
        x, y;


    render();

    function render() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(xAngle) * xRadius; //use xAngle and yAngle for lojaissures
        y = centerY + Math.sin(yAngle) * yRadius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        //angle += speed;
        xAngle += xSpeed;
        yAngle += ySpeed;
        requestAnimationFrame(render);
    }

}