const tekst = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
const zoekterm = "an";

// Methode 1: indexOf
let tellerIndex = 0;
let pos = tekst.indexOf(zoekterm);
while (pos !== -1) {
    tellerIndex++;
    pos = tekst.indexOf(zoekterm, pos + 1);
}

// Methode 2: lastIndexOf
let tellerLastIndex = 0;
let lastPos = tekst.lastIndexOf(zoekterm);
while (lastPos !== -1) {
    tellerLastIndex++;
    lastPos = tekst.lastIndexOf(zoekterm, lastPos - 1);
}

// Resultaten weergeven in de HTML
document.getElementById('index-output').innerText = tellerIndex;
document.getElementById('last-index-output').innerText = tellerLastIndex;