// Unieke key om data van deze pagina te identificeren
const STORAGE_KEY = "VIVES.be.demoLocalStorage.teller";

// Elementen ophalen
const knop = document.getElementById("knop");
const tellerSpan = document.getElementById("teller");

// Bij het laden: lees de bewaarde waarde uit local storage
let teller = 0;
const bewaardeWaarde = localStorage.getItem(STORAGE_KEY);
if (bewaardeWaarde !== null) {
    teller = parseInt(bewaardeWaarde, 10);
    tellerSpan.textContent = teller;
}

// Bij klik: verhoog teller en bewaar in local storage
knop.addEventListener("click", () => {
    teller++;
    tellerSpan.textContent = teller;
    localStorage.setItem(STORAGE_KEY, teller.toString());
});
