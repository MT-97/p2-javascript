// verkrijg het div-element met het ID 'tafelVanTien'
const container = document.getElementById('tafelVanTien');

// for-loop van 1 tot 10
for (let i = 1; i <= 10; i++) {

    // bereken het product van i en 10
    const resultaat = i *10;

    container.innerHTML += i + " x 10 = " + resultaat + "<br>";
}

