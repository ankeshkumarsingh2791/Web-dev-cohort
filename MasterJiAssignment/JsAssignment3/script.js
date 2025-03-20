const Text = document.getElementById("quote");
const Name = document.getElementById("author");
const newText = document.getElementById("new-quote");
const copy = document.getElementById("copy");
const tweet = document.getElementById("tweet");
const ScreenShot = document.getElementById("export");

// fetching quote using async and await function or Api handling
async function fetchQuote() {
        const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
        // storing data in json format
        const data = await response.json();
        const quote = data.data.content;
        console.log(data)
        const author = data.data.author;
        console.log(author)
        Text.textContent = `${quote}`;
        Name.textContent = `${author}`;      
}
// function for creating random hexCode for color
const randomColor = () =>{
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return color;
}
// copying quote to clipboard 
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(`${Text.textContent} ${Name.textContent}`);
    alert("Quote copied!");
});

// sending user to twee quote directly 
tweet.addEventListener("click", () => {
    const Url = `https://twitter.com/intent/tweet?text=${Text.textContent} ${Name.textContent}`;
    window.open(Url, "_blank");
});

// trying to taking screenshot i am taking help from internet but not working you can ignore here 
ScreenShot.addEventListener("click", () => {
    html2canvas(quoteBox, { useCORS: true }).then(canvas => {
        const link = document.createElement("a");
        link.download = "quote.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
// switching to next quote
newText.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor()
    fetchQuote()
});

// when you visit it help to render code automatically 
fetchQuote();
