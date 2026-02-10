const setup = () => {
    let bWijzigen = document.getElementById("wijzigen");

    bWijzigen.addEventListener("click", () => {
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    })

}
window.addEventListener('load',setup);