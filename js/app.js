/*

collect info
store info 
put stored info in arrays
build cards

*/

const submitBtn = document.getElementById('submitBtn')
const gameCards = document.getElementById('gameCards')
let games = []

const collectInfo =()=> {
    // collect info

    const gameName = document.getElementById('gameName').value
    const category = document.querySelector('select[name=category]').value
    const gameImage = document.getElementById('gameImage').value

    if (gameName == '' || category == '' || gameImage == '') {
        alert('Please fill out fields') 
    } else {
        let data = {
            gameName,
            category,
            gameImage
        }
        addInfo(games, data)
    }

    // store info in an object
}

const addInfo =(arr, obj)=> {
    arr = [...arr, obj]
    buildCard(arr)

}

const buildCard =(arr, obj)=> {

    let card;
    // build card
    arr.forEach(item => {
        card = `<div class="col-md-3">
        <div class="card border-danger">
        <div class="card-header">
        <h2 class="h3 text-danger">${item.gameName}</h2>
        </div>
        <img src="${item.gameImage}" alt="${item.gameName}" class="img-fluid" />
        <div class="card-body">
        <p class="card-text text-danger">Category: <span id="gameCategory">${item.category}</span></p>
        </div>
        </div>
        </div>`
        
    })
    gameCards.innerHTML += card
}


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    collectInfo()
    
})


