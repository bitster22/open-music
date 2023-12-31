const render = (array) =>{
    const mainList = document.querySelector(".albums__list");

    mainList.innerHTML = "";

    array.forEach((element)=>{
        const listElement = createCard(element);
        mainList.appendChild(listElement);
    })
    
}

const createCard = ({title, category, price, img, band, year, id}) =>{
    const listCard = document.createElement("li");

    const divImage = document.createElement("div");

    const divMusicContainer = document.createElement("div");

    const divBandInfo = document.createElement("div");
    const spanBand = document.createElement("span");
    const spanYear = document.createElement("span");

    const titleMusic = document.createElement("h2");

    const divBuyContainer = document.createElement("div");
    const spanPrice = document.createElement("span");
    const buttonBuy = document.createElement("button");

    listCard.classList.add("albums__list__component");

    divImage.classList.add("albums__list__component__image");

    divMusicContainer.classList.add("albums__list__component__content", "flex", "flex__dir-column", "flex__space-between");

    divBandInfo.classList.add("albums__list__component__content__album-info", "medium-bold", "color-grey-2", "flex");

    titleMusic.classList.add("albums__list__component__content__title","semi-bold", "color-grey-1");

    divBuyContainer.classList.add("albums__list__component__content__buy", "flex", "flex__space-between");
    spanPrice.classList.add("albums__list__component__content__buy__value","font-3", "medium-bold", "color-grey-1");
    buttonBuy.classList.add("albums__list__component__content__buy__button", "font-3", "color-grey-2");

    divImage.style.backgroundImage = `url(${img})`

    spanBand.innerHTML = band;
    spanYear.innerHTML = year;

    titleMusic.innerHTML = title;

    spanPrice.innerHTML = 'R$ '+price.toFixed(2).toString().replace('.',',');
    buttonBuy.innerHTML = "Comprar";

    listCard.dataset.cardId = id;
    listCard.dataset.cardCategory = category;

    divBandInfo.append(spanBand, spanYear);
    divBuyContainer.append(spanPrice, buttonBuy);

    divMusicContainer.append(divBandInfo, titleMusic, divBuyContainer);

    listCard.append(divImage, divMusicContainer);

    return listCard;
}