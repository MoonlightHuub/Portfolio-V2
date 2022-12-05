// Codigo para cambiar de idoma - Code to change the languaje

var check = document.querySelector(".check")
check.addEventListener("click", idioma)

function idioma(){
    let id= check.checked

    if (id == true){
        location.href="english/index-en.html"
    }else{
        location.href="../index-es.html"
    }
}

