function getThankYouHtml() {
    return `
    <div class="thanks">
        <h2>Thank you for visiting TinDog!</h2>
        <div class="gif">
            <iframe src="https://giphy.com/embed/XPWGFLrsEybd71YLZb" 
            width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>You have come to the end. No more pictures to display</p>
        <div class="btn-container like">
        <img class="refresh-icon" id="refresh" src="/images/refresh.png" alt="refresh">
        </div>
    </div>
    `
}


export { getThankYouHtml }