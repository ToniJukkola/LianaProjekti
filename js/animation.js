let animationExecuted = false; // Animaation suoritusseuranta

function startAnimation() {
    if (!animationExecuted) { // Tarkistetaan, onko animaatio jo suoritettu
        const numbers = document.querySelectorAll('.icons-text h1'); 
        numbers.forEach((number, index) => {
            number.innerText = '0'; 
            let count = 0;
            const target = parseInt(number.dataset.target); // Haetaan kohdeluku
            const interval = setInterval(() => {
                number.innerText = count; 
                count += Math.ceil(target / 50); // Lasketaan seuraava luku
                if (count >= target) { 
                    clearInterval(interval); // Pysäytetään animaatio
                    number.innerText = target; 
                }
            }, 50); // Päivitysväli
        });
        animationExecuted = true; // Merkataan animaatio suoritetuksi
    }
}

const iconsSection = document.querySelector('.icons-section'); // Haetaan kohdeelementti

window.addEventListener('scroll', () => {
    const iconsSectionPosition = iconsSection.getBoundingClientRect().top; // Haetaan kohdeelementin sijainti
    const screenPosition = window.innerHeight / 1.3; 

    if (iconsSectionPosition < screenPosition) { // Tarkistetaan, onko kohdeelementti näkyvissä
        startAnimation(); 
        window.removeEventListener('scroll', startAnimation); 
    }
});

