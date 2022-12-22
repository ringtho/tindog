import Dog from "/Dog.js"
import dogsData from "/data.js"
import { getThankYouHtml } from "/utils.js"
let mainContentContainer = document.getElementById("main-content-container")
let dogsArray = []
let count = 0
Object.assign(dogsArray, dogsData)

document.addEventListener('click', function(e){
    if (e.target.dataset.action){
        handleLikeNopeBtnClick(e.target.dataset.action)
    }
    if(e.target.id === "refresh"){
        handleRefreshBtnClick()
    }
})

function handleLikeNopeBtnClick(action){
    count += 1
    dog.hasBeenSwiped = true
    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml(action)
    console.log(dog)
    console.log(dogsArray)
    
    setTimeout(()=> {
        const dog = getNextDog()
        console.log(dog)
        action === 'like' ? dog.hasBeenLiked = true : ""
        render(dog)
    }, 1500)
    
}

function handleRefreshBtnClick(){
    document.location.reload()
}

function getNextDog(){
    const nextDog = dogsArray[count]
    return nextDog ? new Dog(nextDog) : 
    document.getElementById('main').innerHTML = getThankYouHtml()
}

function render(animal) {
    mainContentContainer.innerHTML = animal.getDogHtml()
}

let dog = getNextDog()
render(dog)

