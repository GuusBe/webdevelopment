function bereken() {
    // 1. Get all elements by their class names
    let prijzen = document.getElementsByClassName('prijs');
    let aantallen = document.getElementsByClassName('aantal');
    let btwTarieven = document.getElementsByClassName('btw');
    let subtotalen = document.getElementsByClassName('subtotaal');

    let totaalGeneraal = 0;

    // 2. Loop through the rows (they all have the same length)
    for (let i = 0; i < prijzen.length; i++) {
        // Parse the text into numbers
        let prijs = parseFloat(prijzen[i].innerText);
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseInt(btwTarieven[i].innerText);

        // Calculation: Price * Quantity * (1 + BTW/100)
        let sub = prijs * aantal * (1 + btw / 100);

        // 3. Update the subtotal cell for this row
        subtotalen[i].innerText = sub.toFixed(2) + " Eur";

        // Add to the grand total
        totaalGeneraal += sub;
    }

    // 4. Update the final total cell
    document.getElementById('totaal-cel').innerText = totaalGeneraal.toFixed(2) + " Eur";
}