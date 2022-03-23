// import functions and grab DOM elements
import { getPlayerData } from '../fetch-utils.js';
import { renderPlayerBio } from '../render-utils.js';

const playerBioContainerEl = document.querySelector('.player-bio-container');


window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const player = await getPlayerData(id);
    const playerBioEl = renderPlayerBio(player);
    playerBioContainerEl.append(playerBioEl);
});