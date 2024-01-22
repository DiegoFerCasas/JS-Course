"use strict"
/*BARRA DE BUSQUEDA*/
let searchContainer = document.querySelector("#searchInputBox");
let inputSearch = searchContainer.querySelector("input");
let boxSuggestions = document.querySelector("#datalistSuggestions");
let searchLink = document.querySelector("#searchButton");
const littleNum = document.querySelector("#numeroPeque")

librosaComprar = JSON.parse(localStorage.getItem("Libros_a_comprar"));
onTheCart = librosaComprar


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
  console.log(productPage)
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

function updateNumber() {
    elNumero = onTheCart.reduce((acc, titulo) => acc + titulo.cantidad, 0);
    littleNum.innerText = elNumero;
}
updateNumber()