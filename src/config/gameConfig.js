/**
 * Game Configuration
 * Contains all game constants and settings
 * 
 * @example
 * // Import the configuration
 * import { gameConfig } from './config/gameConfig.js';
 * 
 * // Access game settings
 * console.log(gameConfig.gameName);  // "Slap The World Around"
 * console.log(gameConfig.maxCountries);  // 2
 * 
 * // Use in DOM manipulation
 * document.querySelector('h1').textContent = gameConfig.gameName;
 * 
 * // Iterate over stats configuration
 * gameConfig.stats.forEach(stat => {
 *   console.log(`Available stat: ${stat}`);
 * });
 */
export const gameConfig = {
    gameName: "Slap The World Around",
    version: "0.1.0",
    maxCountries: 2,
    stats: ['population', 'gdp', 'area']
};
