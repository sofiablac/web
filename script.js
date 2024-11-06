let manuVisible = false;
//Función ocutar o mostrar el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        manuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        manuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menú una vez que se selecciona una opción
    document.getElementById("nav").classList="";
    manuVisible = false;
}
//Aplicar animaciones a las skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("SQL");
        habilidades[1].classList.add("selenium");
        habilidades[2].classList.add("cypress");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("postman");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("autogestion");
        habilidades[9].classList.add("adaptabilidad");
    }
}
//Detectar el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}