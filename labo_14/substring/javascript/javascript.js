const toonSubstring = () => {
    let txtInput = document.getElementById("input");
    let beginInput = document.getElementById("sWaarde");
    let eindInput = document.getElementById("eWaarde");
    let txtOutput = document.getElementById("txtOutput");
    let tekst = txtInput.value;
    let start = parseInt(beginInput.value);
    let eind = parseInt(eWaarde.value);
    let resultaat = tekst.substring(start, eind);
    txtOutput.innerHTML = resultaat;
}
let btnSubstring = document.getElementById("bSubsting");
btnSubstring.addEventListener("click", toonSubstring);
