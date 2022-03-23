// import functions and grab DOM elements
import { getPlayerData } from './fetch-utils.js';
import { renderPlayerCard } from './render-utils.js';

const playerContainerEl = document.querySelector('.player-container');

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

window.addEventListener('load', async () => {
    const players = await getPlayerData();
    console.log(players)
    for (let player of players) {
        const playerCard = renderPlayerCard(player);
        playerContainerEl.append(playerCard);
    }
});