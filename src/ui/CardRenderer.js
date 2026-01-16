/**
 * CardRenderer - Handles rendering of slapable cards to the DOM
 * 
 * @description Creates and displays card elements based on card data.
 * Each card shows: country flag, title, description, and image.
 * Uses HTML <template> tag for clean separation of structure and logic.
 * 
 * @example
 * const renderer = new CardRenderer();
 * const cardData = {
 *   id: "us-001",
 *   country: { name: "United States", flag: "🇺🇸", iso: "US" },
 *   title: "Elon Musk",
 *   description: "Tech billionaire...",
 *   imageUrl: "https://...",
 *   category: "person"
 * };
 * renderer.renderCard(cardData, document.getElementById('card-container'));
 */
export class CardRenderer {
    /**
     * Creates a new CardRenderer instance
     * @param {string} templateId - The ID of the template element (default: 'card-template')
     */
    constructor(templateId = 'card-template') {
        this.templateId = templateId;
        this.template = null;
    }

    /**
     * Loads the HTML template from the DOM
     * @returns {HTMLTemplateElement|null} The template element or null if not found
     */
    loadTemplate() {
        if (this.template) {
            return this.template;
        }

        this.template = document.getElementById(this.templateId);
        
        if (!this.template) {
            console.error(`CardRenderer: Template with id "${this.templateId}" not found in DOM`);
            return null;
        }

        console.log(`CardRenderer: Loaded template "${this.templateId}"`);
        return this.template;
    }

    /**
     * Creates a card element from the template and populates it with data
     * 
     * @param {Object} cardData - The card data object
     * @param {string} cardData.id - Unique card identifier
     * @param {Object} cardData.country - Country information
     * @param {string} cardData.country.name - Country name
     * @param {string} cardData.country.flag - Country flag emoji
     * @param {string} cardData.country.iso - ISO two-letter code
     * @param {string} cardData.title - Card title (person, event, landmark)
     * @param {string} cardData.description - Card description
     * @param {string} cardData.imageUrl - URL to card image
     * @param {string} cardData.category - Category (person, event, landmark, organization)
     * @param {number} [cardData.slapCount=0] - Number of slaps on this card
     * @returns {HTMLElement|null} The populated card element or null on error
     */
    createCardFromTemplate(cardData) {
        const template = this.loadTemplate();
        if (!template) {
            return null;
        }

        const { id, country, title, description, imageUrl, category, slapCount = 0 } = cardData;

        // Clone the template content
        const cardFragment = template.content.cloneNode(true);
        const card = cardFragment.querySelector('.slap-card');

        if (!card) {
            console.error('CardRenderer: Template must contain an element with class "slap-card"');
            return null;
        }

        // Populate card data attributes
        card.dataset.cardId = id;
        card.dataset.country = country.iso;

        // Populate card content
        const flag = card.querySelector('.card-flag');
        const countryName = card.querySelector('.card-country');
        const image = card.querySelector('.card-image');
        const titleEl = card.querySelector('.card-title');
        const categoryEl = card.querySelector('.card-category');
        const descriptionEl = card.querySelector('.card-description');
        const slapBtn = card.querySelector('.slap-btn');
        const slapCountEl = card.querySelector('.slap-count');

        if (flag) flag.textContent = country.flag;
        if (countryName) countryName.textContent = country.name;
        if (image) {
            image.src = imageUrl;
            image.alt = title;
            image.onerror = () => {
                image.src = 'https://via.placeholder.com/200x150?text=No+Image';
            };
        }
        if (titleEl) titleEl.textContent = title;
        if (categoryEl) categoryEl.textContent = category;
        if (descriptionEl) descriptionEl.textContent = description;
        if (slapBtn) slapBtn.dataset.cardId = id;
        if (slapCountEl) slapCountEl.textContent = `🔥 ${slapCount.toLocaleString()} slaps`;

        return card;
    }

    /**
     * Renders a single card to the specified container
     * 
     * @param {Object} cardData - The card data object to render
     * @param {HTMLElement} container - The DOM element to render into
     * @returns {HTMLElement} The rendered card element
     */
    renderCard(cardData, container) {
        if (!container) {
            console.error('CardRenderer: Container element not found');
            return null;
        }

        if (!cardData) {
            console.error('CardRenderer: Card data is required');
            return null;
        }

        const card = this.createCardFromTemplate(cardData);
        if (!card) {
            return null;
        }

        container.appendChild(card);
        console.log(`CardRenderer: Rendered card "${cardData.title}"`);
        
        return card;
    }

    /**
     * Renders multiple cards to the specified container
     * 
     * @param {Array<Object>} cardsData - Array of card data objects
     * @param {HTMLElement} container - The DOM element to render into
     * @returns {Array<HTMLElement>} Array of rendered card elements
     */
    renderCards(cardsData, container) {
        if (!Array.isArray(cardsData)) {
            console.error('CardRenderer: cardsData must be an array');
            return [];
        }

        return cardsData.map(cardData => this.renderCard(cardData, container));
    }

    /**
     * Clears all cards from a container
     * 
     * @param {HTMLElement} container - The container to clear
     */
    clearCards(container) {
        if (container) {
            container.innerHTML = '';
            console.log('CardRenderer: Cleared all cards from container');
        }
    }
}

export default CardRenderer;
