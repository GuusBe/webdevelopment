const vergelijk = () =>{
    let getal1 = Number(document.getElementById("getal1").value);
    let getal2 = Number(document.getElementById("getal2").value);
    let vergelijk = (getal1 === getal2) ? console.log((getal1 + getal2) * 3) : console.log(getal1 + getal2);
}
let button = document.getElementById("button");
button.addEventListener("click", vergelijk)

