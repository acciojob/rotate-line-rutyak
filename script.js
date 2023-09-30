//your JS code here. If required.
const line = document.getElementById('line');
let rotationAngle = 0;

function rotateLine() {
    rotationAngle += 2; 
    line.style.transform = `translateX(-50%) rotate(${rotationAngle}deg)`;
    requestAnimationFrame(rotateLine);
}

rotateLine();