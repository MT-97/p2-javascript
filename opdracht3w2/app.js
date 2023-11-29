const MovingDiv = document.getElementById("MovingDiv");
const screenwidth = window.innerWidth;
const divwidth = 50;
const speed = 2;
let moveRight = true;

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


function MoveDiv() {
    const currentPositionX = parseInt(MovingDiv.style.left) || 0;
    if (currentPositionX < 0 || currentPositionX > screenwidth - divwidth) {
        moveRight = !moveRight;
    } 

const newPositionX = currentPositionX + (moveRight ? speed : -speed);
MovingDiv.style.left = newPositionX + 'px' ;
}

MovingDiv.addEventListener('click', function() {
    MovingDiv.style.backgroundColor = getRandomColor();
});


const intervalid = setInterval(MoveDiv,16);