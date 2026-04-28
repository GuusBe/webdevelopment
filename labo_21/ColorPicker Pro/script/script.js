// Unieke keys om data van deze pagina te identificeren in local storage
const STORAGE_KEY_SLIDERS = "VIVES.be.colorPickerPro.sliders";
const STORAGE_KEY_FAVORITES = "VIVES.be.colorPickerPro.favorites";

// Elementen ophalen
const rSlider = document.getElementById("rSlider");
const gSlider = document.getElementById("gSlider");
const bSlider = document.getElementById("bSlider");

const rValue = document.getElementById("rValue");
const gValue = document.getElementById("gValue");
const bValue = document.getElementById("bValue");

const preview = document.getElementById("preview");
const hexCode = document.getElementById("hexCode");

const addFavoriteBtn = document.getElementById("addFavorite");
const clearFavoritesBtn = document.getElementById("clearFavorites");
const favoritesContainer = document.getElementById("favorites");

// Array om favoriete kleuren bij te houden
let favorites = [];

// Hulpfunctie: getal omzetten naar 2-cijferige hex
const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();

// Hulpfunctie: huidige RGB-waarden omzetten naar hex-string
const getCurrentHex = () => {
    const r = parseInt(rSlider.value, 10);
    const g = parseInt(gSlider.value, 10);
    const b = parseInt(bSlider.value, 10);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Update de preview en hex-tekst op basis van de sliders
const updatePreview = () => {
    rValue.textContent = rSlider.value;
    gValue.textContent = gSlider.value;
    bValue.textContent = bSlider.value;

    const hex = getCurrentHex();
    preview.style.backgroundColor = hex;
    hexCode.textContent = hex;

    // Sla de actuele slider settings op in local storage
    const sliderSettings = {
        r: rSlider.value,
        g: gSlider.value,
        b: bSlider.value
    };
    localStorage.setItem(STORAGE_KEY_SLIDERS, JSON.stringify(sliderSettings));
};

// Render de favoriete kleuren op het scherm
const renderFavorites = () => {
    favoritesContainer.innerHTML = "";
    favorites.forEach((color, index) => {
        const div = document.createElement("div");
        div.className = "favorite";
        div.style.backgroundColor = color;
        div.title = color + " (klik om te laden, dubbelklik om te verwijderen)";

        // Klik: laad deze kleur in de sliders
        div.addEventListener("click", () => {
            const r = parseInt(color.substring(1, 3), 16);
            const g = parseInt(color.substring(3, 5), 16);
            const b = parseInt(color.substring(5, 7), 16);
            rSlider.value = r;
            gSlider.value = g;
            bSlider.value = b;
            updatePreview();
        });

        // Dubbelklik: verwijder deze favoriet
        div.addEventListener("dblclick", () => {
            favorites.splice(index, 1);
            saveFavorites();
            renderFavorites();
        });

        favoritesContainer.appendChild(div);
    });
};

// Sla de favorieten op in local storage als JSON-string
const saveFavorites = () => {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
};

// Laad de bewaarde slider settings uit local storage
const loadSliderSettings = () => {
    const data = localStorage.getItem(STORAGE_KEY_SLIDERS);
    if (data !== null) {
        const settings = JSON.parse(data);
        rSlider.value = settings.r;
        gSlider.value = settings.g;
        bSlider.value = settings.b;
    }
};

// Laad de bewaarde favorieten uit local storage
const loadFavorites = () => {
    const data = localStorage.getItem(STORAGE_KEY_FAVORITES);
    if (data !== null) {
        favorites = JSON.parse(data);
    }
};

// Eventlisteners voor de sliders
rSlider.addEventListener("input", updatePreview);
gSlider.addEventListener("input", updatePreview);
bSlider.addEventListener("input", updatePreview);

// Eventlistener voor "Voeg toe aan favorieten"
addFavoriteBtn.addEventListener("click", () => {
    const hex = getCurrentHex();
    if (!favorites.includes(hex)) {
        favorites.push(hex);
        saveFavorites();
        renderFavorites();
    }
});

// Eventlistener voor "Wis favorieten"
clearFavoritesBtn.addEventListener("click", () => {
    if (confirm("Weet je zeker dat je alle favorieten wil verwijderen?")) {
        favorites = [];
        saveFavorites();
        renderFavorites();
    }
});

// Initialisatie: laad bewaarde data en update de UI
loadSliderSettings();
loadFavorites();
updatePreview();
renderFavorites();
