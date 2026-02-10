// 1. De Alert (geen return value nodig)
alert("Dit is de alert popup. Klik op OK om door te gaan naar de confirm.");

// 2. De Confirm
const confirmResultaat = confirm("Wil je op 'OK' of 'Annuleren' klikken?");
console.log("De return value van confirm is:", confirmResultaat);

// 3. De Prompt
const promptResultaat = prompt("Typ hier iets in en klik op OK of Annuleren:", "Standaard tekst");
console.log("De return value van prompt is:", promptResultaat);