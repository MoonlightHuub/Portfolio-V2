// Codigo para cambiar de idoma - Code to change the languaje

let check = document.querySelector(".check")
check.addEventListener("click", idioma)

function idioma(){
    let id= check.checked

    if (id == true){
        location.href="english/index-en.html"
    }else{
        location.href="../index-es.html"
    }
}

// change languaje Mobile.

let checkMobile = document.querySelector(".check-mobile")
checkMobile.addEventListener("click", idiomaM)

function idiomaM(){
    let id = checkMobile.checked

    if (id == true){
        location.href="english/index-en.html"
    }else{
        location.href="../index-es.html"
    }
}


// codigo para menu hamburguesa - code of burger menu

let cross = document.querySelector("#cross")
let bars = document.querySelector("#bars")
let menu = document.querySelector("#menu-mobile")

cross.addEventListener("click", hiddenMenu)
bars.addEventListener("click", showMenu)

function hiddenMenu(){
    menu.classList.toggle("hide-menu-mobile")
}

function showMenu(){
    menu.classList.toggle("hide-menu-mobile")
}