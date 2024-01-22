"use scrict";
productPage = "producto.html"

let valoresTotal = []
const emptyCar = document.querySelector("#seccionCompras-carritoVacio");
const fullCar = document.querySelector("#seccionCompras-carrito");
const carItems = document.querySelector('#seccionCompras-carrito-items');
const resumen = document.querySelector("#seccionCompras-carrito-resumen");
const quantity = document.querySelector('#cartQty');


const plusButton = document.querySelectorAll('.pplus');

function updateTotal() {
  librosaComprar.forEach(element => {
    let subTotal
    subTotal = element.precio * element.cantidad
    valoresTotal.push(subTotal)
  }
  )

  const subtotalPrice = document.querySelector('#subtotalPrice')
  const totalPrice = document.querySelector('#totalPrice');
  total = valoresTotal.reduce((acc, valor) => acc + valor, 0)
  subtotalPrice.innerText = `COP$${total}`;

  const ship = document.querySelector('#ship');
  if (Number(total < 200000)) {
    discount = 10000
    ship.innerText = `COP$${discount}`;
  } else {
    discount = 0
    ship.innerText = "Free"

  }

  const totalTotal = (total + discount) * tax
  totalPrice.innerText = `COP $${totalTotal}`

}


if (librosaComprar) {

  emptyCar.classList.add("disabled");
  fullCar.classList.remove("disabled");
  resumen.classList.remove("disabled");


  quantity.innerText = `${elNumero} items`
  carItems.innerHTML = '';
  resumen.innerHTML = '';

  const div2 = document.createElement("div");
  div2.classList.add('p-5');
  div2.innerHTML = `
        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr class="my-4">

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">items ${elNumero}</h5>
                        <h5 id="subtotalPrice">COP$ 0.00</h5>
                      </div>
                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">Taxes</h5>
                        <h5>19%</h5>
                      </div>
                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">Shipping</h5>
                        <h5 id="ship"></h5>
                      </div>

                     

                      <h5 class="text-uppercase mb-3">Give code</h5>

                      <div class="mb-5">
                        <div class="form-outline">
                          <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea2">Enter your code</label>
                        </div>
                      </div>

                      <hr class="my-4">

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Total price</h5>
                        <h5 id="totalPrice" >COP$ 0.00</h5>
                      </div>

                      <button type="button" class="boton btn btn-outline-success"
                        data-mdb-ripple-color="dark">Register</button>
        `;

  resumen.appendChild(div2);
  updateTotal()

  librosaComprar.forEach((element) => {

    const div = document.createElement("div");
    div.classList.add('seccionComprasRow')
    div.classList.add('row');
    div.classList.add('mb-4');

    div.innerHTML = `
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src=".${element.titulo.image}"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">${element.titulo.type.capitalize()}</h6>
                          <h6 class="text-black mb-0">${element.titulo.name}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2 mminus" 
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="${element.cantidad}" type="number"
                            class="form-control form-control-sm" />

                          <button class="btn btn-link px-2 pplus"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">COP$${element.precio * element.cantidad}</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                        </div>
                      
                      <hr class="my-4">

        `;
    carItems.appendChild(div);
  }
  );
  const minusButton = document.querySelectorAll('.mminus');
  minusButton.forEach(boton => {
    boton.addEventListener("click", (e) => {



    })
  })
} else {

}


