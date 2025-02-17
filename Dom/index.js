function changeBackGround (color)  {
    document.body.style.background = color
}

const themeButton = document.getElementById("theme-button")

themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.background;

    if(!currentColor || currentColor == "white"){
        changeBackGround('black')
    } else {
        changeBackGround("white")
    }
} )