function toonTrigrams() {
    const woord = "onoorbaar";
    for (let i = 0; i <= woord.length - 3; i++) {
        let trigram = woord.substring(i, i + 3);
        console.log(trigram);
    }
}