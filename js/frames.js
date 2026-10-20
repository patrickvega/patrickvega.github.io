function frames(variable){
    var iframe = document.getElementById("enframe");
    var src = "pages/home.html";

    if (variable==1){
        src = "pages/home.html";
    }
    else if (variable==2){
        src = "pages/submitted.html";
    }
    else if (variable==3){
        src = "pages/published.html";
    }
    else if (variable==4){
        src = "pages/my_thesis.html";
    }
    else if (variable==5){
        src = "pages/about_me.html";
    }
    else if (variable==6){
        src = "pages/2019.html";
    }
    else if (variable==7){
        src = "pages/2018.html";
    }
    else if (variable==8){
        src = "pages/2017.html";
    }
    else if (variable==9){
        src = "pages/2016.html";
    }
    else if (variable==10){
        src = "pages/2020.html";
    }
    else if (variable==11){
        src = "pages/2021.html";
    }
    else if (variable==12){
        src = "pages/2022.html";
    }
    else if (variable==13){
        src = "pages/2023.html";
    }
    else if (variable==14){
        src = "pages/2024.html";
    }
    else if (variable==15){
        src = "pages/supervision.html";
            }
    else if (variable==16){
        src = "pages/teaching.html";
    }

    iframe.src = src;
}

// Ajusta automáticamente la altura del iframe cada vez que termina de cargar una página nueva
document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.getElementById("enframe");
    if (iframe) {
        iframe.addEventListener("load", function () {
            try {
                iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + "px";
            } catch (e) {
                // si el navegador bloquea el acceso, no pasa nada, se queda con la altura por defecto
            }
        });
    }
});
