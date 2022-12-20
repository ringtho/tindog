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
}

function getNextDog(){
    const nextDog = dogsData.shift()
    return new Dog(nextDog)
}

function render() {
    mainContentContainer.innerHTML = dog.getDogHtml()
}

const dog = getNextDog()
render()

