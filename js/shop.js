"use strict"


const productContainer = document.querySelector("#product-container");
const typeSelector = document.querySelectorAll(".type-select");
const tituloProducto = document.querySelector("#titulo-tienda");
let agregaCarro = document.querySelectorAll(".addCart");


function showProducts(choosenTitles) {
    productContainer.innerHTML = ""
    choosenTitles.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("book");
        div.classList.add("read");
        div.classList.add("col-sm-2")
        div.innerHTML = `
        <div class="cover">
                    <img class="imgBook"
                            src=".${producto.titulo.image}" preserveAspectRatio="xMidYMid slice"></div>
                <div class="description">
                    <p class="title">${producto.titulo.name}<br>
                        <span class="author">${producto.titulo.author}</span>
                        <h6>Formato: ${producto.titulo.type}</h6>
                        <h6>COP$${producto.precio}</h6>
                    </p>
                    </div>
                    <div> <button id="${producto.titulo.id}" class="boton btn btn-outline-success addCart">Comprar ahora</button>
                </div>
        `;
        productContainer.appendChild(div);

    }

    )
    updateButton();
   
}

showProducts(articulos);

typeSelector.forEach(boton => {

    boton.addEventListener("click", (e) => {

        typeSelector.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "all-p") {
            if (e.currentTarget.id == "audio") {
                tituloProducto.innerText = "Audiolibros"
            } else if (e.currentTarget.id == "ebook") {
                tituloProducto.innerText = "Libros electrónicos"
            } else if (e.currentTarget.id == "fisico") {
                tituloProducto.innerText = "Libros físicos"
            }
            const botonDeProducto = articulos.filter(producto => producto.titulo.type == e.currentTarget.id);
            showProducts(botonDeProducto);
        } else {
            tituloProducto.innerText = "También te puede interesar";
            showProducts(articulos);

        }

    }
    )
});

function updateButton() {

    agregaCarro = document.querySelectorAll(".addCart");

    agregaCarro.forEach(boton => {
        boton.addEventListener("click", addToCart);

    }

    );
}
const librosaComprarBack = JSON.parse(localStorage.getItem("Libros_a_comprar"));

if (librosaComprarBack) {
    onTheCart = librosaComprarBack;
    updateNumber()
} else {
    onTheCart = [];
}
function addToCart(e) {
    const idBook = e.currentTarget.id;
    const addedProduct = articulos.find(element => element.titulo.id == idBook);

    if (onTheCart.some(element => element.titulo.id === idBook)) {
        const index = onTheCart.findIndex(element => element.titulo.id === idBook);
        onTheCart[index].cantidad++;
    } else {
        addedProduct.cantidad = 1;
        onTheCart.push(addedProduct);


    }
    
    localStorage.setItem("Libros_a_comprar", JSON.stringify(onTheCart));
}



