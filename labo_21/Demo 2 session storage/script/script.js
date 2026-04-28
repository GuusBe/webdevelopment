// Unieke key om data van deze pagina te identificeren
const STORAGE_KEY = "VIVES.be.demoSessionStorage.teller";

// Elementen ophalen
const knop = document.getElementById("knop");
const tellerSpan = document.getElementById("teller");

// Bij het laden: lees de bewaarde waarde uit session storage
let teller = 0;
const bewaardeWaarde = sessionStorage.getItem(STORAGE_KEY);
if (bewaardeWaarde !== null) {
    teller = parseInt(bewaardeWaarde, 10);
    tellerSpan.textContent = teller;
}

// Bij klik: verhoog teller en bewaar in session storage
knop.addEventListener("click", () => {
    teller++;
    tellerSpan.textContent = teller;
    sessionStorage.setItem(STORAGE_KEY, teller.toString());
});
