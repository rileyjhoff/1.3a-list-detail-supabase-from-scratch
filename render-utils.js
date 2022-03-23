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