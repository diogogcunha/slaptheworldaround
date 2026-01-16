/**
 * CardLoader - Utility for loading and accessing slapable card data
 * 
 * This module handles loading card data from cards.json and provides
 * convenient methods to access and filter cards for game use.
 * 
 * @module cardLoader
 */

/**
 * @typedef {Object} CardCountry
 * @property {string} name - Country name
 * @property {string} flag - Flag emoji
 * @property {string} iso - ISO 2-letter country code
 */

/**
 * @typedef {Object} SlapableCard
 * @property {string} id - Unique card identifier (e.g., "us-001")
 * @property {CardCountry} country - Country information object
 * @property {string} title - Card title (person, place, event name)
 * @property {string} description - Brief description of the subject
 * @property {string} imageUrl - URL to the card image
 * @property {string} category - Category type (person, event, landmark, organization, food)
 */

/**
 * Example Card Data Structure:
 * {
 *   "id": "us-001",
 *   "country": {
 *     "name": "United States",
 *     "flag": "🇺🇸",
 *     "iso": "US"
 *   },
 *   "title": "Elon Musk",
 *   "description": "Tech billionaire, CEO of Tesla & SpaceX...",
 *   "imageUrl": "https://...",
 *   "category": "person"
 * }
 */

class CardLoader {
  constructor() {
    /** @type {SlapableCard[]} */
    this.cards = [];
    this.loaded = false;
  }

  /**
   * Load card data from JSON file
   * @returns {Promise<SlapableCard[]>} Array of card objects
   */
  async loadCards() {
    try {
      const response = await fetch('./src/data/cards.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.cards = await response.json();
      this.loaded = true;
      console.log(`Loaded ${this.cards.length} slapable cards`);
      return this.cards;
    } catch (error) {
      console.error('Error loading card data:', error);
      throw error;
    }
  }

  /**
   * Get all cards
   * @returns {SlapableCard[]} Array of all cards
   */
  getAllCards() {
    if (!this.loaded) {
      console.warn('Cards not loaded yet. Call loadCards() first.');
      return [];
    }
    return this.cards;
  }

  /**
   * Get a card by ID
   * @param {string} id - Card ID to search for (e.g., "us-001")
   * @returns {SlapableCard|undefined} Card object or undefined if not found
   */
  getCardById(id) {
    return this.cards.find(card => card.id === id);
  }

  /**
   * Get cards by country ISO code
   * @param {string} iso - ISO 2-letter code (e.g., "US", "FR")
   * @returns {SlapableCard[]} Array of cards for the specified country
   */
  getCardsByCountry(iso) {
    return this.cards.filter(
      card => card.country.iso.toLowerCase() === iso.toLowerCase()
    );
  }

  /**
   * Get cards by category
   * @param {string} category - Category type (person, event, landmark, etc.)
   * @returns {SlapableCard[]} Array of cards in the specified category
   */
  getCardsByCategory(category) {
    return this.cards.filter(
      card => card.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Get random cards for game play
   * @param {number} count - Number of random cards to return
   * @returns {SlapableCard[]} Array of random card objects
   */
  getRandomCards(count = 2) {
    if (!this.loaded || this.cards.length === 0) {
      console.warn('No cards available');
      return [];
    }

    // Shuffle array using Fisher-Yates algorithm
    const shuffled = [...this.cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  /**
   * Get list of unique countries that have cards
   * @returns {CardCountry[]} Array of unique country objects
   */
  getAvailableCountries() {
    const countryMap = new Map();
    this.cards.forEach(card => {
      if (!countryMap.has(card.country.iso)) {
        countryMap.set(card.country.iso, card.country);
      }
    });
    return Array.from(countryMap.values());
  }

  /**
   * Get list of unique categories
   * @returns {string[]} Array of category names
   */
  getAvailableCategories() {
    return [...new Set(this.cards.map(card => card.category))];
  }

  /**
   * Check if data is loaded
   * @returns {boolean} True if cards are loaded
   */
  isLoaded() {
    return this.loaded;
  }
}

// Create and export a singleton instance
const cardLoader = new CardLoader();
export default cardLoader;
