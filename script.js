// Selectează butonul prin ID
const ctaButton = document.getElementById("cta-button");

// Adaugă un eveniment pentru click pe buton
ctaButton.addEventListener("click", function(event) {
    // Previne comportamentul implicit al link-ului (adică redirecționarea imediată)
    event.preventDefault();

    // Aplica o animație vizuală pe buton (opțional)
    ctaButton.style.transform = "scale(1.2)";
    ctaButton.style.transition = "transform 0.3s ease-in-out";

    // După o întârziere de 300ms, redirecționează utilizatorul
    setTimeout(() => {
        window.location.href = "https://smrturl.co/a/s3f31d3c66e/1549?s1=";
    }, 300); // Întârziere de 300ms
});
