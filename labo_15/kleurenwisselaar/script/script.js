
const knoppen = document.querySelectorAll('.kleur-knop');

knoppen.forEach(knop => {
    knop.addEventListener('click', function() {
        this.classList.toggle('is-blauw');
    });
});