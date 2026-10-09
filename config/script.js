const cards = document.querySelectorAll('.card');

async function init() {
    try {
        const response = await fetch('config/words.json');
        const messages = await response.json();

        cards.forEach(card => {
            const paragraph = card.querySelector('p');

            card.addEventListener('click', () => {
                card.classList.toggle('flipped');

                if (card.classList.contains('flipped')) {
                    const index = Math.floor(Math.random() * messages.length);
                    paragraph.textContent = messages[index];
                }
            });
        });
    } catch (error) {
        console.error('No se pudo cargar el JSON:', error);
    }
}

init();