let student = "voornaam : Jan, familienaam : Janssens, geboorteDatum : 1993-12-31, adres : { straat : Kerkstraat 13, postcode : 8500, gemeente : Kortrijk}";
let str = JSON.stringify(student);
console.log(str);

let student2 = JSON.parse(str);
console.log(student2);