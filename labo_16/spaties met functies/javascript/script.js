/**
 * Bouwt een string op waarbij karakters gescheiden worden door spaties,
 * zonder dubbele spaties te creëren als de originele tekst al spaties bevat.
 */
const maakMetSpaties = (inputText) => {
    let result = "";

    // Stap 1: Verwijder alle bestaande spaties uit de invoer.
    // We gebruiken een loop die blijft zoeken zolang er een spatie gevonden wordt.
    let tekstZonderSpaties = inputText;
    while (tekstZonderSpaties.indexOf(" ") !== -1) {
        tekstZonderSpaties = tekstZonderSpaties.replace(" ", "");
    }

    // Stap 2: Bouw de nieuwe string op met de '+' operator.
    for (let i = 0; i < tekstZonderSpaties.length; i++) {
        let karakter = tekstZonderSpaties.charAt(i);

        // Voeg het karakter toe. Als het niet het laatste karakter is, voeg een spatie toe.
        result += karakter;

        if (i < tekstZonderSpaties.length - 1) {
            result += " ";
        }
    }

    return result;
};

// Event listener die de functie aanroept en het resultaat op de console zet
document.addEventListener("DOMContentLoaded", () => {
    const knop = document.getElementById("verwerkKnop");
    const inputVeld = document.getElementById("userInput");

    knop.addEventListener("click", () => {
        const invoer = inputVeld.value;

        // Roep de functie aan en vang de return value op
        const resultaat = maakMetSpaties(invoer);

        // Toon het resultaat op de console
        console.log(resultaat);
    });
});