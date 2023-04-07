let load = document.querySelector(".load")
let bar = document.querySelector(".menu")
let menu = document.querySelector(".list-item ul")
let bars = document.querySelector(".menu i")
let container = document.querySelector(".container")
let header = document.querySelector("header")
let videos = document.querySelectorAll(".videos")
let popup = document.querySelector(".popup")
let closeIframe = document.querySelector(".close")


window.onload = _=> {
    setTimeout(_=> loading() ,1500)
}

window.onscroll = _=> {
    menu.classList.remove("bar-click")
    container.style.opacity = "1"
    bars.classList.remove("fa-xmark")
    bars.classList.add("fa-bars")
}

bar.addEventListener("click", barClick)

function loading(){
    load.style.display = "none"
}

function barClick(){
    menu.classList.toggle("bar-click")
    
    if(!menu.classList.contains("bar-click")){
        bars.classList.remove("fa-xmark")
        bars.classList.add("fa-bars")
        menu.classList.add("hidden")
        container.style.opacity = "1"
    }else{
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-xmark")
        menu.classList.remove("hidden")
        container.style.opacity = "0.5"
    }
}


videos.forEach(vid => {
    vid.addEventListener("click", e => {
        let link = e.target.getAttribute("link")
        closeIframe.style.display = "block"
        popup.classList.add("active-pop")
        popup.innerHTML += `
            <div class="ifr">
                <iframe src="${link}">
                </iframe>
                
            </div>
        `
        
    })
})


console.log("text")
console.log(closeIframe)
closeIframe.addEventListener("click", e => {
    document.querySelector(".ifr").remove()
    closeIframe.style.display = "none"
    popup.classList.remove("active-pop")
})

