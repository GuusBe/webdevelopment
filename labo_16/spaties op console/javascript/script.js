document.addEventListener("DOMContentLoaded", function() {
    const knop = document.getElementById("verwerkKnop");
    const inputVeld = document.getElementById("userInput");

    knop.addEventListener("click", function() {
        // 1. Haal de waarde op uit het veld
        let tekst = inputVeld.value;

        // 2. Verwijder alle bestaande spaties om dubbele spaties te voorkomen
        // We gebruiken een reguliere expressie / /g om alle spaties te vervangen door niets
        let tekstZonderSpaties = tekst.replace(/ /g, "");

        // 3. Maak een nieuwe string waarbij elk karakter gevolgd wordt door een spatie
        let resultaat = "";
        for (let i = 0; i < tekstZonderSpaties.length; i++) {
            // Voeg het karakter toe + een spatie met de '+' operator
            resultaat += tekstZonderSpaties[i] + " ";
        }

        // 4. Toon het resultaat in de console (getrimmed om de laatste spatie te verwijderen)
        console.log(resultaat.trim());
    });
});