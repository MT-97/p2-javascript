const winkelmandje = ["Bananen","Whiskey","Chips", "Bonen", "Aardappelen"];
//const winkelmandje = ["Bananen","Whiskey","Chips", "Bonen", "Drop"];

// Opdracht 1
//
var Aantal = winkelmandje.length;
document.getElementById("opdracht1").innerHTML = "Aantal producten in het winkelmandje" + Aantal;

// Opdracht 2
document.getElementById("opdracht2").innerHTML = winkelmandje.join("<br>");

// OPdracht 3
document.getElementById("opdracht3").innerHTML = "Het 4e product is:" + winkelmandje[3];

// Opdracht 4
winkelmandje[1] = "Bier";
document.getElementById("opdracht4").innerHTML = "Whiskey is vervangen door bier " + winkelmandje.join(', ');

// Opdracht 5 
function addProduct(){
const nieuwProduct = prompt ("Voer het nieuwe product in");
winkelmandje.push(nieuwProduct);
document.getElementById("opdracht5").innerHTML = winkelmandje;
}

// Opdracht 6 
if (winkelmandje.length > 0) {
    document.getElementById("opdracht6").innerHTML = "<p>U heeft genoeg producten om te tonen</p>" + winkelmandje.join("<br>");
} else {
    document.getElementById("opdracht6").innerHTML = "<p>U heeft niet genoeg producten om te tonen</p>";
}

// Opdracht 7 
if (winkelmandje == "Drop") {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft drop</p>";
} else {
    document.getElementById("opdracht7").innerHTML = "<P>U heeft geen drop</P>";
}

// Opdracht 8 
document.getElementById("opdracht8").innerHTML = "<P>Producten met spaties</P>" + winkelmandje.join(' ');


// OPdracht 9 
document.getElementById("opdracht9").innerHTML = "Oude winkelmand" + winkelmandje.join(', ');

winkelmandje.splice(0,2);
document.getElementById("Nieuwewinkelmand").innerHTML = "Nieuwe winkelmand" + winkelmandje.join(', ');

// Opdracht 10
const winkelmand = ["Bananen","Whiskey","Chips","Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById("opdracht10").innerHTML = "Gesorteerde array:" + winkelmand.join(', ');

