//all data store in array
const cart = [];
// player-cart


//displayPlayer function create
function displayPlayer() {

    // player number add 
    const totalPlayerNumber = document.getElementById("player-number");
    totalPlayerNumber.innerText = cart.length;


    //total player table body id access
    const cartContainer = document.getElementById("player-cart");

    //remove from extra line
    cartContainer.textContent = '';

    for (let i = 0; i < cart.length; i++) {

        if (i === 5) { break; }

        //it show table body player name.
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].playerName}</td>  `;


        //call appenChild
        cartContainer.appendChild(tr);
    }

}

function addTocart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    //console.log(playerName);
    //object create

    const player = {
        playerName: playerName

    }

    //push all element
    cart.push(player);

    //display show element.
    displayPlayer();
}
