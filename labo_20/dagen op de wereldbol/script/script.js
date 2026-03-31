
const birthDate = new Date('2006-08-06');
// De huidige datum (vandaag: 31 maart 2026)
const currentDate = new Date('2026-03-31');

// Het verschil in milliseconden berekenen
const differenceInTime = currentDate.getTime() - birthDate.getTime();

// Milliseconden omzetten naar dagen:
// 1000 ms * 60 s * 60 min * 24 uur
const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

console.log(differenceInDays);