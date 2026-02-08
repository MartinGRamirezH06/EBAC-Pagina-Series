//Llamar a api

const loadSeries= async()=>{
    const seriesGrid=document.querySelector(".main-container");

    try{
        const response= await axios.get("https://api.tvmaze.com/shows");
        const series=response.data.slice(0,30);
        seriesGrid.innerHTML="";
        for(elemento of series){
            const cardSerie=createCard(elemento);
            seriesGrid.appendChild(cardSerie);
        }
        console.log(series)
    }catch(error){
        console.log("Error de Axios"+error)
    }
}
document.addEventListener("DOMContentLoaded",loadSeries)

const seachSerie=async()=>{
    const inputSeach=document.querySelector(".seach__input");
    const elementoABuscar=inputSeach.value.toLocaleLowerCase();
    if(elementoABuscar){
        try{
            const response=await axios.get(` https://api.tvmaze.com/search/shows?q=${elementoABuscar}`);
            console.log(response);
            const seriesGrid=document.querySelector(".main-container");
            seriesGrid.innerHTML="";
            for(resultado of response.data){
                console.log(resultado)
                const cardResult=createCard(resultado.show);
                seriesGrid.appendChild(cardResult)
            }


        }catch(error){
            console.error("ERROR EN EL AXIOS:" +error);
        }
    }
}
document.getElementById("button-seach").addEventListener("click",seachSerie);
document.querySelector(".seach__input").addEventListener("keypress",(evento)=>{
    if(evento.key=="Enter"){
        seachSerie();
    }
})