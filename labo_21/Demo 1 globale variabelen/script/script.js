// Globale variabele om de teller bij te houden
let teller = 0;

// Element ophalen
const knop = document.getElementById("knop");
const tellerSpan = document.getElementById("teller");

// Eventlistener toevoegen aan de knop
knop.addEventListener("click", () => {
    teller++;
    tellerSpan.textContent = teller;
});
