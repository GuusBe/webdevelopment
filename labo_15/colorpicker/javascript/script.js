function update() {
    // 1. De waarden van de sliders ophalen
    let r = document.getElementById('r').value;
    let g = document.getElementById('g').value;
    let b = document.getElementById('b').value;

    // 2. De getallen in de tekst bijwerken
    document.getElementById('r-val').innerText = r;
    document.getElementById('g-val').innerText = g;
    document.getElementById('b-val').innerText = b;

    // 3. De RGB-string samenstellen
    let rgbKleur = "rgb(" + r + "," + g + "," + b + ")";

    // 4. De achtergrondkleur van het vakje aanpassen
    document.getElementById('kleur-vak').style.backgroundColor = rgbKleur;
}