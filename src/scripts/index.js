/* Desenvolva sua lógica aqui ... */
const filterTypes = () =>{
    const radioFilter = document.querySelectorAll(".musical-genre__filter__value");

    radioFilter.forEach(filter =>{
        filter.addEventListener("click",()=>{
            console.log(filter.value);
            filterGenre(products, filter.value);
        })
    })
}

render(products);
filterTypes();