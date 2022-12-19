// Create the Dog class here
class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    

    getDogHtml(){
        const { name, avatar, age, bio } = this
        return `
        <img src="/${avatar}" alt="${name}" id="main-img">
        <div class="main-content">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
        </div>
        `
    }
}

export default Dog