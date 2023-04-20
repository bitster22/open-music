/* Desenvolva sua lógica aqui ... */
const filterGenres = () =>{
    const radioFilter = document.querySelectorAll(".musical-genre__filter__value");

    radioFilter.forEach(filter =>{
        filter.addEventListener("click",()=>{
            console.log(filter.value);
            filterGenre(products, filter.value);
        })
    })
}

render(products);
filterByRange(products);
filterGenres();