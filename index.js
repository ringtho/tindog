import Dog from "/Dog.js"
import dogsData from "/data.js"
import { getThankYouHtml } from "/utils.js"
let mainContentContainer = document.getElementById("main-content-container")
let count = 0


document.addEventListener('click', function(e){
    if (e.target.dataset.action){
        handleLikeNopeBtnClick(e.target.dataset.action)
    }
    if(e.target.id === "refresh"){
        handleRefreshBtnClick()
    }
})

function handleLikeNopeBtnClick(action){
    dogsData[count].hasBeenSwiped = true
    action === 'like' ? dogsData[count].hasBeenLiked = true : ""
    count += 1 
    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml(action)
    setTimeout(()=> {
        dog = getNextDog()
        render()
    }, 1500)
    console.log(dogsData)
}

function handleRefreshBtnClick(){
    document.location.reload()
}

function getNextDog(){
    const nextDog = dogsData[count]
    return nextDog ? new Dog(nextDog) : 
    document.getElementById('main').innerHTML = getThankYouHtml()
}

function render() {
    mainContentContainer.innerHTML = dog.getDogHtml()
}

let dog = getNextDog()
render()

