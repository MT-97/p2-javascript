const MovingDiv = document.getElementById("MovingDiv");
const screenwidth = window.innerWidth;
const divwidth = 50;
const speed = 2;
let moveRight = true;

function MoveDiv() {
    const currentPositionX = parseInt(MovingDiv.style.left) || 0;
    if (currentPositionX < 0 || currentPositionX > screenwidth - divwidth) {
        moveRight = !moveRight;
    } 

const newPositionX = currentPositionX + (moveRight ? speed : -speed);
MovingDiv.style.left = newPositionX + 'px' ;
}

const intervalid = setInterval(MoveDiv,0.01);