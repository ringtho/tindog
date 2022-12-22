import Dog from "/Dog.js"
import dogsData from "/data.js"
import { getThankYouHtml } from "/utils.js"

let mainContentContainer = document.getElementById("main-content-container")
const likeBtn = document.getElementById("btn-like")
const nopeBtn = document.getElementById("btn-nope")
const backBtn = document.getElementById("btn-back")

let count = 0
let isWaiting = false //set the state during timeout


document.addEventListener('click', function(e){
    if (e.target.dataset.action){
        handleLikeNopeBtnClick(e.target.dataset.action)
    }
    if(e.target.id === "back"){
        handleBackBtnClick()
    }
    if(e.target.id === "refresh"){
        handleRefreshBtnClick()
    }
})

function handleLikeNopeBtnClick(action){
    if (!isWaiting){
        isWaiting = true
        disableEnableBtns()
        dogsData[count].hasBeenSwiped = true
        action === 'like' ? dogsData[count].hasBeenLiked = true : ""
        count++ 
        mainContentContainer.innerHTML += dog.getLikeNopeDogHtml(action)
        setTimeout(()=> {
            isWaiting = false
            disableEnableBtns()
            dog = getNextDog()
            render()
        }, 1500)
    }
 
}

function handleBackBtnClick(){
    if(!isWaiting){
        isWaiting = true
        disableEnableBtns()
        if (count >= 0){
            count--
            setTimeout(()=> {
                isWaiting = false
                disableEnableBtns()
                dog = getNextDog()
                render()
                if (dog.hasBeenLiked){
                    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml("like")
                    likeBtn.classList.add("like-selected")
    
                } else {
                    mainContentContainer.innerHTML += dog.getLikeNopeDogHtml("nope")
                    nopeBtn.classList.add("nope-selected")
                }
            }, 1000)
        }
    }
}

function handleRefreshBtnClick(){
    document.location.reload()
}

function getNextDog(){
    const nextDog = dogsData[count]
    return nextDog ? new Dog(nextDog) : 
    document.getElementById('main').innerHTML = getThankYouHtml()
}

function disableEnableBtns(){
    if (isWaiting){
        backBtn.classList.add('disable')
        likeBtn.classList.add('disable')
        nopeBtn.classList.add('disable')
    }else {
        backBtn.classList.remove('disable')
        likeBtn.classList.remove('disable')
        nopeBtn.classList.remove('disable')
    }
}

function render() {
    likeBtn.classList.remove("like-selected")
    nopeBtn.classList.remove("nope-selected")
    mainContentContainer.innerHTML = dog.getDogHtml()
}

let dog = getNextDog()
render()

