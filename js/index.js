"use strict";

productPage = "pages/producto.html"


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
