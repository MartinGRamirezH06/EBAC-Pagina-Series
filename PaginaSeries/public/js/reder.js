//Creando card
const createCard=(serie)=>{
    const card=document.createElement("section");
    card.classList.add("main-container__card");

    const imgSerie=document.createElement("img");
    imgSerie.setAttribute("src",serie.image.medium);
    imgSerie.classList.add("card__img")

    card.appendChild(imgSerie);

    const title=document.createElement("h3");
    title.textContent=serie.name;
    title.classList.add("card__title");
    card.appendChild(title)

    const containerGeneros=document.createElement("div");
    containerGeneros.classList.add("card__container-Gens")
    serie.genres.forEach(genero => {
        const divGenero=document.createElement("div");
        const pGenero=document.createElement("span");
        pGenero.classList.add("card__gen");
        pGenero.textContent=genero;
        divGenero.appendChild(pGenero);
        containerGeneros.appendChild(divGenero);
        card.appendChild(containerGeneros)
    });
    const divRating=document.createElement("div");
    divRating.classList.add("card__containerCalification");
    const pCalificacion=document.createElement("p");
    pCalificacion.textContent="Calificación: ";
    const pRaiting=document.createElement("p");
    pRaiting.textContent=serie.rating.average;
    pRaiting.classList.add("card__cal");
    const imgEstrella=document.createElement("img");
    imgEstrella.setAttribute("src","img/icons/estrellaIcono.png");
    
    divRating.appendChild(pCalificacion);
    divRating.appendChild(pRaiting);
    divRating.appendChild(imgEstrella);
    
    card.appendChild(divRating)
    return card
}