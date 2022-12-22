import Dog from "/Dog.js"
import { dogsData } from "/data.js"
let mainContentContainer = document.getElementById("main-content-container")



document.addEventListener('click', function(e){
    if (e.target.dataset.action){
        handleLikeNopeBtnClick(e.target.dataset.action)
    }
    if(e.target.id === "refresh"){
        handleRefreshBtnClick()
    }
})

function handleLikeNopeBtnClick(action){
    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml(action)
    console.log(action)
    setTimeout(()=> {
        const newDog = getNextDog()
        action === 'like' ? newDog.hasBeenLiked = true : ""
        
        render(newDog)
    }, 1500)
    
}

function handleRefreshBtnClick(){
    document.location.reload()
}

function thankYou() {
    return `
    <div class="thanks">
        <h2>Thank you for visiting TinDog!</h2>
        <div class="btn-container like">
        <img class="refresh-icon" id="refresh" src="/images/refresh.png" alt="refresh">
        </div>
    </div>
    `
}

function getNextDog(){
    const nextDog = dogsData.shift()
    console.log(nextDog)
    return nextDog ? new Dog(nextDog) : 
    document.getElementById('main').innerHTML = thankYou()
}

function render(dog) {
    mainContentContainer.innerHTML = dog.getDogHtml()
}

const dog = getNextDog()
render(dog)

