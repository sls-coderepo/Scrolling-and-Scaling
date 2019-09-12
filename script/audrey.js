const audrey = document.querySelector("#audrey")


window.addEventListener("scroll", () => {
    
    let scrollx= window.scrollY/3
    let scrolly = window.scrollY/4

    if(scrollx < 50)
    {
        scrollx = 50
    }

    if (scrolly <100)
    {
        scrolly = 100
    }

    audrey.style.width = scrollx+'px'
    audrey.style.height = scrolly+'px'

})
 
