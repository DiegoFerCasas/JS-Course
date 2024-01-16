"use strict";
/*BARRA DE BUSQUEDA*/
productPage = "pages/producto.html"
let searchContainer = document.querySelector("#searchInputBox");
let inputSearch = searchContainer.querySelector("input");
let boxSuggestions = document.querySelector("#datalistSuggestions");
let searchLink = document.querySelector("#searchButton");

inputSearch.onkeyup = e => {
  let userSearch = e.target.value;
  let emptyArray = [];

  if (userSearch) {
    emptyArray = articulos.filter(data => {
      return data.titulo.name
        .toLocaleLowerCase()
        .startsWith(userSearch.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map(data => {
      return (data = `<li>${data.titulo.name}</li>`);
    });
    searchContainer.classList.add('active');
    showSuggestions(emptyArray);

    let items = boxSuggestions.querySelectorAll('li');

    items.forEach(li => {
      li.setAttribute('onclick', 'select(this)')
    })
    
  } else {
    searchContainer.classList.remove('active');
  }
};

function select(element){
  
  let userSelection = element.textContent
  inputSearch.value = userSelection
  searchLink.href =`${productPage}`
  searchContainer.classList.remove('active');
  localStorage.setItem("Libro_buscado",JSON.stringify(inputSearch.value))
  
}


const showSuggestions = list => {
  let listData;

  if (!list.length) {
    let userValue = inputSearch.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join(' ');
  }
  boxSuggestions.innerHTML = listData;
};

/*TARJETAS DE PROMOCION */
function optiones(promo) {
  let idx = 0;
  let cont = -1;

  articulos.filter((element) => {
    cont++;
    element.titulo.offer == promo;
    if (element.titulo.offer == promo) {
      idx++;
      const subir = element;
      flter = element.titulo;
      indice.push(cont);
      grupo.push(subir);
    }
  });
}
optiones(promo);


const theCards = (grupo) => {
  const container = document.getElementById("page-content");

  grupo.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("card2");
    div.style.backgroundImage = `url(${element.titulo.image})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.setAttribute("preserveAspectRatio", "xMidYMid slice");
    div.innerHTML += `
       <div class="content2">
      <h2 class="title2">${element.titulo.name}</h2>
      <p class="copy2">COP$${element.precio}</p>
      <button class="boton btn btn-outline-success">Añadir al carrito</button>
    </div>
            `;
    container.appendChild(div);
  });
};

theCards(grupo);
