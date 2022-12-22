import Dog from "/Dog.js"
import { dogsData } from "/data.js"
let mainContentContainer = document.getElementById("main-content-container")



document.addEventListener('click', function(e){
    if (e.target.dataset.action){
        handleLikeNopeBtnClick(e.target.dataset.action)
    }
})

function handleLikeNopeBtnClick(action){
    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml(action)
    setTimeout(()=> {
        const newDog = getNextDog()
        render(newDog)
    }, 1500)
    
}

function getNextDog(){
    const nextDog = dogsData.shift()
    console.log(nextDog)
    return nextDog ? new Dog(nextDog) : console.log("No more Dogs")
}

function render(dog) {
    mainContentContainer.innerHTML = dog.getDogHtml()
}

const dog = getNextDog()
render(dog)

