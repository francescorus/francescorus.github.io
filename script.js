document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.programming-wrapper .description'); // Seleziona tutte le descrizioni
    let lastScrollY = window.scrollY; // Memorizza l'ultima posizione dello scroll
    let isScrollingDown = true; // Variabile per monitorare la direzione dello scroll

    // Funzione per determinare la direzione dello scroll
    function detectScrollDirection() {
        if (window.scrollY > lastScrollY) {
            isScrollingDown = true; // Se lo scroll è verso il basso
        } else {
            isScrollingDown = false; // Se lo scroll è verso l'alto
        }
        lastScrollY = window.scrollY; // Aggiorna la posizione dello scroll
    }

    // Crea un observer per rilevare quando l'elemento entra nel viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se l'elemento è visibile nel viewport
            if (entry.isIntersecting && isScrollingDown) {
                // Quando l'elemento entra nel viewport e scrolla verso il basso, aggiungi la classe "visible"
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else if (!entry.isIntersecting && !isScrollingDown) {
                // Quando l'elemento esce dal viewport e scrolla verso l'alto, aggiungi la classe "hidden"
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Quando almeno il 50% dell'elemento è visibile nel viewport
    });

    // Osserva ogni descrizione
    elements.forEach(element => {
        observer.observe(element);
    });

    // Aggiungi l'evento di scroll per determinare la direzione dello scroll
    window.addEventListener('scroll', detectScrollDirection);
});
