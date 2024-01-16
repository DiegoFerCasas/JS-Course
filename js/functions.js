"use strict"

function hello() {
    let selctor = Number(
        prompt(`Hola, bienvenido a Draven's Bookstore
  Escoge de nuestro catalogo el formato que mas te guste,
  contamos con audiolibros y ebook, o disfruta de nuestras promociones.
  Selecciona la opción en la que deseas tu proxima historia.
  1- Audiolibros.
  2- Ebook.
  3- Ver promoción.`)
    );

    if (isNaN(selctor) || selctor < 1 || selctor > 3) {
        alert("Opcion invalida o no digitaste un numero");
        hello()
    } else {
        if (selctor) {
            switch (selctor) {
                case 1:
                    busca = "audio";
                    optiones(busca);
                    dimension = indice.length;
                    idxof(busca)

                    break;

                case 2:
                    busca = "ebook";
                    optiones(busca)
                    dimension = indice.length;
                    idxof(busca)
                    break

                case 3:
                    exec()
                    break
default :
hello();
break
            }
        }
    }
}


function optiones(busca) {
    let idx = 0;
    let cont = -1;
    articulos.forEach((element) => {
        cont++
        if (element.titulo.type == busca) {
            idx++;
            flter = element.titulo;
            alert(idx + " - " + flter.name + " de " + flter.author + " por solo COP $" + element.precio);
            indice.push(cont)

        }

    });
}
function idxof() {
    console.log(indice)

    console.log(dimension)
    let checkout = Number(prompt("Digita el numero correspondiente a la opcion deseada"));
    if ((isNaN(checkout)) || checkout > dimension || checkout< 1) {
        alert("Opcion invalida o no digitaste un numero");
        hello()
    } else {
        let toBuy = checkout - 1
        let purchase = indice[toBuy]
        alert(`Tu pedido cuesta ${articulos[purchase].precio}`)

    }
    console.log(indice)

}

function greeting() {
    const greeting = alert(`¡Bienvenido a Draven's store!
Tenemos para ti la coleccion completa e ilustrada de
Sherlock Holmes. Esta consta de 5 titulos.
- lleva cada uno de los libros por separado a COP $ ${unitPrice}.
- lleva hasta 3  titulos de la colección con el ${discountThree * 100
        } % de descuento.
- lleva hasta 4  titulos de la colección con el ${discountFour * 100
        } % de descuento.
- lleva la coleccion completa con el ${discountFull * 100} % de descuento.

`);
}

function question() {
    do {
        attempt++;
        order = Number(
            prompt(
                "Cuantos libros de la colección quieres llevar?, ingresa por favor un numero de 1 a 5"
            )
        );
        if (isNaN(order)) {
            alert("No digitaste un numero");
        }
    } while ((order < 1 || order > 5 || isNaN(order)) && attempt <= 4);
    if (attempt > 4) {
        order = 0;
    }
}

function questOrders() {
    if (order != 0) {
        switch (order) {
            case 1:
                alert("Tu pedido cuesta COP $" + unitPrice);
                break;
            case 2:
                alert("Tu pedido cuesta COP $" + unitPrice * 2);
                break;
            case 3:
                total = unitPrice * 3;
                discount = total * discountThree;
                alert("Tu pedido cuesta COP $" + (total - discount));
                break;
            case 4:
                total = unitPrice * 4;
                discount = total * discountFour;
                alert("Tu pedido cuesta COP $" + (total - discount));
                break;
            case 5:
                total = unitPrice * 5;
                discount = total * discountFull;
                alert("Tu pedido cuesta COP $" + (total - discount));
        }
    } else {
        alert("Has superado el limite de intentos, vuelve a intentarlo");
        attempt = 0;
hello()
    }
}

function exec(ejecucion) {
    greeting();
    question();
    questOrders();
    return ejecucion;
}