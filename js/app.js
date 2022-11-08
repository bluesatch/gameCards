/*

collect info
store info 
put stored info in arrays
build cards

*/

const submitBtn = document.getElementById('submitBtn')
let games = []

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    
    // collect info
    const gameName = document.getElementById('gameName').value
    const category = document.querySelector('select[name=category]').value
    const gameImage = document.getElementById('gameImage').value
    
    // store info in an object
    let data = {
        gameName,
        category,
        gameImage
    }

    // put stored info in arrays
    games = [...games, data]    
    console.log(games)
    
})
