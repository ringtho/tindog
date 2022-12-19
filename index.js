import Dog from "/Dog.js"
import { dogsData } from "/data.js"





function getNextDog(){
    const nextDog = dogsData.shift()
    return new Dog(nextDog)
}

function render() {
    document.getElementById("main-content-container").innerHTML = dog.getDogHtml()
}

const dog = getNextDog()
render()

