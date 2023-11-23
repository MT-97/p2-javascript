function MoveDiv() {
    const MovingDiv = document.getElementById("MovingDiv");
    const currentPosition = parseInt(MovingDiv.style.left) || 0;
    const newPosition = currentPosition + 1;
    MovingDiv.style.left = newPosition + "px";

    const screenwidth = window.innerWidth;
    if (newPosition + 50 > screenwidth) {
        clearInterval(intervalid);
    }

}

const intervalid = setInterval(MoveDiv,1);