/**
 * CountryLoader - Utility for loading and accessing country data
 * 
 * This module handles loading country data from countries.json and provides
 * convenient methods to access and filter the data for game use.
 * 
 * @module countryLoader
 */

/**
 * @typedef {Object} Country
 * @property {string} name - Country name
 * @property {string} flag - Flag emoji
 * @property {string} iso - ISO 2-letter country code
 * @property {number} population - Population count
 * @property {number} gdp - GDP in billions USD
 * @property {number} area - Area in square kilometers
 * @property {string} capital - Capital city name
 * @property {string} region - Geographic region
 */

class CountryLoader {
  constructor() {
    /** @type {Country[]} */
    this.countries = [];
    this.loaded = false;
  }

  /**
   * Load country data from JSON file
   * @returns {Promise<Country[]>} Array of country objects
   */
  async loadCountries() {
    try {
      const response = await fetch('./src/data/countries.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.countries = await response.json();
      this.loaded = true;
      console.log(`Loaded ${this.countries.length} countries`);
      return this.countries;
    } catch (error) {
      console.error('Error loading country data:', error);
      throw error;
    }
  }

  /**
   * Get all countries
   * @returns {Country[]} Array of all countries
   */
  getAllCountries() {
    if (!this.loaded) {
      console.warn('Countries not loaded yet. Call loadCountries() first.');
      return [];
    }
    return this.countries;
  }

  /**
   * Get a country by name
   * @param {string} name - Country name to search for
   * @returns {Country|undefined} Country object or undefined if not found
   */
  getCountryByName(name) {
    return this.countries.find(
      country => country.name.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * Get a country by ISO code
   * @param {string} iso - ISO 2-letter code (e.g., "US", "GB")
   * @returns {Country|undefined} Country object or undefined if not found
   */
  getCountryByISO(iso) {
    return this.countries.find(
      country => country.iso.toLowerCase() === iso.toLowerCase()
    );
  }

  /**
   * Get random countries for game selection
   * @param {number} count - Number of random countries to return
   * @returns {Country[]} Array of random country objects
   */
  getRandomCountries(count = 2) {
    if (!this.loaded || this.countries.length === 0) {
      console.warn('No countries available');
      return [];
    }

    // Shuffle array using Fisher-Yates algorithm
    const shuffled = [...this.countries];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  /**
   * Get countries filtered by region
   * @param {string} region - Region name to filter by
   * @returns {Country[]} Array of countries in the specified region
   */
  getCountriesByRegion(region) {
    return this.countries.filter(
      country => country.region.toLowerCase() === region.toLowerCase()
    );
  }

  /**
   * Get list of all available stat names that can be compared
   * @returns {string[]} Array of stat names
   */
  getAvailableStats() {
    return ['population', 'gdp', 'area'];
  }

  /**
   * Get a stat value from a country
   * @param {Country} country - Country object
   * @param {string} statName - Name of the stat (population, gdp, area)
   * @returns {number} The stat value
   */
  getStatValue(country, statName) {
    return country[statName] || 0;
  }

  /**
   * Check if data is loaded
   * @returns {boolean} True if countries are loaded
   */
  isLoaded() {
    return this.loaded;
  }
}

// Create and export a singleton instance
const countryLoader = new CountryLoader();
export default countryLoader;
