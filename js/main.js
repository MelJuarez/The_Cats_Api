
/*function cargar_gatos(){

    let dom = document.querySelector(".root");

    let item = document.createElement("div");
    item.classList.add("box_img")
    item.innerHTML=`
        <img src="https://cdn2.thecatapi.com/images/MjA3OTE1MA.jpg">
    `;
    
    dom.appendChild(item) //Se inserta imagen
}
cargar_gatos();*/

let api_url = "https://api.thecatapi.com/v1/images/search?limit=10";

async function GATOS(api){

    let obtenerGato = await fetch(api);
    let dato = await obtenerGato.json();

    cargar_gatos(dato);
}

GATOS(api_url);

function cargar_gatos(data){
    let dom = document.querySelector(".root");

    data.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("box-img")
        item.innerHTML =`
        <img src="${element.url}" class="cat">
        `;
        
        dom.appendChild(item);
    });
}

