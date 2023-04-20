const getHighPrice = (array) =>{
    let max = 0;

    array.forEach((element)=>{
        if(element.price > max){
            max = element.price;
        }
    })
    return max;
}

const filterByRange = (array) =>{
    const inputRange = document.querySelector(".price__filter__range");

    inputRange.max = getHighPrice(array);
    inputRange.value = inputRange.max;

    const priceMax = document.querySelector("#filter-price");
    priceMax.innerHTML = Number(inputRange.value).toFixed(2).toString().replace(".",",");

    inputRange.addEventListener("input", ()=>{
        priceMax.innerHTML = Number(inputRange.value).toFixed(2).toString().replace(".",",");

        const priceFilter = array.filter((music)=>{
            if(music.price<=inputRange.value){
                return music;
            }
        })
        render(priceFilter);
    })
}

const filterGenres = () =>{
    const radioFilter = document.querySelectorAll(".musical-genre__filter__value");

    radioFilter.forEach(filter =>{
        filter.addEventListener("click",()=>{
            filterGenre(products, filter.value);
        })
    })
}

const filterGenre = (array, genreChoice) =>{
        if(genreChoice!="Todos"){
            const filteredElements = array.filter((genre)=>{
                if(categories[genre.category]==genreChoice){
                    return genre;
                }
            })
            filterByRange(filteredElements);
            render(filteredElements);
        }else{
            filterByRange(products);
            render(products);
        }
    }