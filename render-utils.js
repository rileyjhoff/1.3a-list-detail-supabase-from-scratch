{/* <a href=""><div class="player-card">
<h4>Nathan MacKinnon #29</h4>
<img src="https://zhmowgcybteqgiwwrxln.supabase.in/storage/v1/object/sign/headshots/Mac.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWFkc2hvdHMvTWFjLmpwZWciLCJpYXQiOjE2NDgwMDQ1MzYsImV4cCI6MTk2MzM2NDUzNn0.xXbc8kjOdOeJALgDhcO-bdo4rMOh0nQZyZl5ciiPaUg" alt="">
</div></a> */}

export function renderPlayerCard(player){
    const anchor = document.createElement('a');
    const playerCard = document.createElement('div');
    const nameEl = document.createElement('h4');
    const imgEl = document.createElement('img');

    anchor.classList.add('hover');
    playerCard.classList.add('player-card');

    nameEl.textContent = player.name + ' #' + player.number;
    imgEl.src = player.headshot;
    anchor.href = `./bio/?id=${player.id}`;

    playerCard.append(nameEl, imgEl);
    anchor.append(playerCard);

    return anchor;
}

{/* <div>
    <div class="bio-top">
        <div class="player-pic">
            <img src="https://zhmowgcybteqgiwwrxln.supabase.in/storage/v1/object/sign/headshots/Aube-Kubel.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWFkc2hvdHMvQXViZS1LdWJlbC5qcGVnIiwiaWF0IjoxNjQ4MDA0Mzk5LCJleHAiOjE5NjMzNjQzOTl9.YgrCV44GT1Ji9YRocOrHoQPgJn4bMqFClWSXjraVF5w" alt="">
        </div>
        <div class="player-facts">
            <h2>Nicolas Aube-Kubel #16</h2>
            <p>Position: RW</p>
            <p>Height: 5'11</p>
            <p>Weight: 187 lb</p>
            <p>Age: 25</p>
            <p>Shoots: Right</p>
            <p>Birthplace: Slave Lake, AB, CAN</p>
        </div>
    </div>
    <div class="bio-bottom">
        <h3>Player Bio:</h3>
        <p>Aube-Kubel was selected by the Flyers in the second round (No. 48) of the 2014 NHL Draft, and turned pro after spending two additional seasons with Val-d'Or of the Quebec Major Junior Hockey League.

            The forward spent three full seasons with Lehigh Valley of the American Hockey League before getting his first NHL call-up, and he made his Philadelphia debut against the Anaheim Ducks at Honda Center on Oct. 30, 2018. He had two shots on goal in nine games and was returned to the AHL.
            
            Aube-Kubel began the 2019-20 season in the AHL but was recalled Dec. 15, 2019, and scored his first NHL point, an assist, that same day at the Winnipeg Jets. He scored his first NHL goal eight days later, a power-play goal against the New York Rangers on Dec. 23.</p>
    </div>
</div> */}

export function renderPlayerBio(player) {
    const containerDiv = document.createElement('div');
    const topBioDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgEl = document.createElement('img');
    const factsDiv = document.createElement('div');
    const nameEl = document.createElement('h2');
    const positionEl = document.createElement('p');
    const heightEl = document.createElement('p');
    const weightEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const handEl = document.createElement('p');
    const birthplaceEl = document.createElement('p');
    const bottomBioDiv = document.createElement('div');
    const bioHeader = document.createElement('h3');
    const bioContent = document.createElement('p');

    topBioDiv.classList.add('bio-top');
    imgDiv.classList.add('player-pic');
    factsDiv.classList.add('player-facts');
    bottomBioDiv.classList.add('bio-bottom');

    imgEl.src = player.headshot;
    nameEl.textContent = player.name + ' #' + player.number;
    positionEl.textContent = 'Position: ' + player.position;
    heightEl.textContent = 'Height: ' + player.height;
    weightEl.textContent = 'Weight: ' + player.weight + ' lbs';
    ageEl.textContent = 'Age: ' + player.age;
    handEl.textContent = 'Shoots: ' + player.hand;
    birthplaceEl.textContent = 'Birthplace: ' + player.birthplace;
    bioHeader.textContent = 'Player Bio:';
    bioContent.textContent = player.bio;

    imgDiv.append(imgEl);
    factsDiv.append(nameEl, positionEl, heightEl, weightEl, ageEl, handEl, birthplaceEl);
    topBioDiv.append(imgDiv, factsDiv);
    bottomBioDiv.append(bioHeader, bioContent);
    containerDiv.append(topBioDiv, bottomBioDiv);

    return containerDiv;
}