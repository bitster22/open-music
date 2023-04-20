/* Desenvolva sua lógica aqui ... */

const renderDarkMode = () =>{
    const darkButton = document.querySelector(".fas");
    const html = document.querySelector("html");

    const themePreference = JSON.parse(localStorage.getItem("dark__mode"));

    if(themePreference){
        darkButton.classList.remove("fa-moon");
        darkButton.classList.add("fa-sun");
        html.classList.add("dark__mode");
    }else{
        darkButton.classList.remove("fa-sun");
        darkButton.classList.add("fa-moon");
        html.classList.remove("dark__mode");
    }

    darkButton.addEventListener("click",()=>{
        html.classList.toggle("dark__mode");

        if(html.classList.contains("dark__mode")){
            darkButton.classList.remove("fa-moon");
            darkButton.classList.add("fa-sun");
            localStorage.setItem("dark__mode",true);
        }else{
            darkButton.classList.remove("fa-sun");
            darkButton.classList.add("fa-moon");
            localStorage.setItem("dark__mode",false);
        }
    })
}