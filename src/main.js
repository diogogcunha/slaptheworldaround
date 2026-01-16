// Main entry point for Slap The World Around game
import { gameConfig } from './config/gameConfig.js';

console.log('Game initialized!');
console.log('Game Config:', gameConfig);

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = gameConfig.gameName;
    heading.style.color = '#2563eb';  // Blue color
    console.log('DOM loaded and heading styled');
});
