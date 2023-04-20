/* Desenvolva sua lógica aqui ... */

const renderDarkMode = () =>{
    const darkButton = document.querySelector("#dark-mode-button");
    const darkIcon = document.querySelector(".fas");
    const html = document.querySelector("html");
    const h1 = document.querySelector("#main-title");
    const albumTitle = document.querySelectorAll(".albums__list__component__content__title");
    const albumPrice = document.querySelectorAll(".albums__list__component__content__buy__value");
    const radioCollection = document.querySelectorAll(".musical-genre__filter__value");

    const themePreference = JSON.parse(localStorage.getItem("dark__mode"));

    console.log(albumPrice)

    if(themePreference){
        darkIcon.classList.remove("fa-moon");
        darkIcon.classList.add("fa-sun");
        html.classList.add("dark__mode");
        h1.classList.add("variant-white");

        albumTitle.forEach((title)=>{
            title.classList.add("variant-white");
        })
        albumPrice.forEach((price)=>{
            price.classList.add("variant-white");
        })
        radioCollection.forEach((radio)=>{
            radio.classList.remove("radio--light");
            radio.classList.add("radio--dark");
        })
    }else{
        darkIcon.classList.remove("fa-sun");
        darkIcon.classList.add("fa-moon");
        html.classList.remove("dark__mode");
        h1.classList.remove("variant-white");
        albumTitle.forEach((title)=>{
            title.classList.remove("variant-white");
        })
        albumPrice.forEach((price)=>{
            price.classList.remove("variant-white");
        })
        radioCollection.forEach((radio)=>{
            radio.classList.remove("radio--dark");
            radio.classList.add("radio--light");
        })
    }

    darkButton.addEventListener("click",()=>{
        html.classList.toggle("dark__mode");

        if(html.classList.contains("dark__mode")){
            darkIcon.classList.remove("fa-moon");
            darkIcon.classList.add("fa-sun");
            h1.classList.add("variant-white");
            albumTitle.forEach((title)=>{
                title.classList.add("variant-white");
            })
            albumPrice.forEach((price)=>{
                price.classList.add("variant-white");
            })
            radioCollection.forEach((radio)=>{
                radio.classList.remove("radio--light");
                radio.classList.add("radio--dark");
            })
            localStorage.setItem("dark__mode",true);
        }else{
            darkIcon.classList.remove("fa-sun");
            darkIcon.classList.add("fa-moon");
            localStorage.setItem("dark__mode",false);
            h1.classList.remove("variant-white");
            albumTitle.forEach((title)=>{
                title.classList.remove("variant-white");
            })
            albumPrice.forEach((price)=>{
                price.classList.remove("variant-white");
            })
            radioCollection.forEach((radio)=>{
                radio.classList.remove("radio--dark");
                radio.classList.add("radio--light");
            })
        }
    })
}