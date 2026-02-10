// 1. Array aanmaken met minimaal 5 namen
const familieLeden = ["An", "Bert", "Chris", "Dirk", "Els"];

// 2. Aantal elementen in de console schrijven
console.log("Aantal familieleden:", familieLeden.length);

// 3. Eerste, derde en vijfde element uitschrijven
// Onthoud: arrays beginnen bij index 0
console.log("Eerste familielid:", familieLeden[0]);
console.log("Derde familielid:", familieLeden[2]);
console.log("Vijfde familielid:", familieLeden[4]);

// 4. Functie 'VoegNaamToe' met pass-by-reference
function VoegNaamToe(lijst) {
    const nieuweNaam = prompt("Voer een extra familienaam in:");
    if (nieuweNaam) {
        lijst.push(nieuweNaam);
    }
}

// De functie aanroepen
VoegNaamToe(familieLeden);
console.log("Resultaat na toevoeging:", familieLeden);

// 5. Array converteren naar een string en tonen
const familieString = familieLeden.join(", ");
console.log("Array als string:", familieString);