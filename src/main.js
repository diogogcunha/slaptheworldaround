// Main entry point for Slap The World Around game
import { gameConfig } from './config/gameConfig.js';
import countryLoader from './utils/countryLoader.js';
import cardLoader from './utils/cardLoader.js';
import { CardRenderer } from './ui/CardRenderer.js';

console.log('Game initialized!');
console.log('Game Config:', gameConfig);

// Generate a random player name
function generatePlayerName() {
    const adjectives = ['Funky', 'Speedy', 'Mighty', 'Clever', 'Swift', 'Wild', 'Brave', 'Lucky'];
    const animals = ['Panda', 'Tiger', 'Eagle', 'Wolf', 'Fox', 'Bear', 'Hawk', 'Lion'];
    const number = Math.floor(Math.random() * 100);
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return `${adj}${animal}${number}`;
}

// Populate country dropdown
function populateCountryDropdown(countries) {
    const dropdown = document.getElementById('country-dropdown');
    if (!dropdown) return;

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.iso;
        option.textContent = `${country.flag} ${country.name}`;
        dropdown.appendChild(option);
    });
}

// Open drawer with cards for a country
function openDrawer(countryISO, cardRenderer, cardLoader) {
    const drawer = document.getElementById('card-drawer');
    const drawerTitle = document.getElementById('drawer-title');
    const cardsContainer = document.getElementById('cards-container');
    const mapContainer = document.querySelector('.map-container');

    if (!drawer || !cardsContainer) return;

    // Get country info and cards
    const country = countryLoader.getCountryByISO(countryISO);
    const cards = cardLoader.getCardsByCountry(countryISO);

    if (!country) {
        console.warn(`Country not found: ${countryISO}`);
        return;
    }

    // Update drawer title
    if (drawerTitle) {
        drawerTitle.textContent = `${country.flag} ${country.name}`;
    }

    // Clear and render cards
    cardRenderer.clearCards(cardsContainer);
    
    if (cards.length === 0) {
        cardsContainer.innerHTML = '<p style="color: #a0aec0; text-align: center; grid-column: 1/-1;">No cards for this country yet</p>';
    } else {
        cards.forEach(card => {
            // Add random slap count for demo
            card.slapCount = Math.floor(Math.random() * 10000);
            cardRenderer.renderCard(card, cardsContainer);
        });
    }

    // Open drawer
    drawer.classList.add('open');
    if (mapContainer) mapContainer.classList.add('drawer-open');

    console.log(`Opened drawer for ${country.name} with ${cards.length} cards`);
}

// Close drawer
function closeDrawer() {
    const drawer = document.getElementById('card-drawer');
    const mapContainer = document.querySelector('.map-container');

    if (drawer) drawer.classList.remove('open');
    if (mapContainer) mapContainer.classList.remove('drawer-open');
}

// Initialize the game
async function initGame() {
    try {
        console.log('Loading country data...');
        const countries = await countryLoader.loadCountries();
        console.log(`✓ Successfully loaded ${countries.length} countries`);

        // Load card data
        console.log('Loading card data...');
        const cards = await cardLoader.loadCards();
        console.log(`✓ Successfully loaded ${cards.length} slapable cards`);

        // Initialize CardRenderer
        const cardRenderer = new CardRenderer();

        // Populate the country dropdown
        populateCountryDropdown(countries);

        // Set up country dropdown event
        const dropdown = document.getElementById('country-dropdown');
        if (dropdown) {
            dropdown.addEventListener('change', (e) => {
                if (e.target.value) {
                    openDrawer(e.target.value, cardRenderer, cardLoader);
                }
            });
        }

        // Set up drawer close button
        const closeBtn = document.getElementById('drawer-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeDrawer);
        }

        // Set up map placeholder click (temporary - will be replaced with real map)
        const mapPlaceholder = document.querySelector('.map-placeholder');
        if (mapPlaceholder) {
            mapPlaceholder.addEventListener('click', () => {
                // Demo: open a random country
                const randomCountry = countryLoader.getRandomCountries(1)[0];
                if (randomCountry) {
                    dropdown.value = randomCountry.iso;
                    openDrawer(randomCountry.iso, cardRenderer, cardLoader);
                }
            });
        }

        console.log('✓ Game initialization complete');
        
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Set player name
    const playerNameEl = document.getElementById('player-name');
    if (playerNameEl) {
        // Check for existing session or generate new name
        let playerName = sessionStorage.getItem('playerName');
        if (!playerName) {
            playerName = generatePlayerName();
            sessionStorage.setItem('playerName', playerName);
        }
        playerNameEl.textContent = `👤 ${playerName}`;
    }

    console.log('DOM loaded - initializing game');
    
    // Initialize game data
    initGame();
});
