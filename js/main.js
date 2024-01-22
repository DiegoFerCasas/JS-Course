"use strict"

let busca
let dimension
let flter = [];
let indice = [];
let attempt = 0;
let librosaComprar
let discountFour = 0.1;
let discountFull = 0.25;
let discount;
const tax = 1.19;
let order;
let total;
let promo = "si";
let grupo = [];
let productPage
let elNumero
let onTheCart


let articulos = [
    new Collection(new Titulo("001","1", "La flor de jade","El enviado", "Jesus B Vilches", "ebook","no",'./img/img8.jpg'), 110000),
    new Collection(new Titulo("002","2", "La flor de jade","El circulo se abre", "Jesus B Vilches", "audio","no",'./img/img8.jpg'), 110000),
    new Collection(new Titulo("003","2", "Sherlock Holmes","El sabueso de los Baskerville", "Arthur Connan Doyle", "ebook","si",'./img/SH-sabuesoBasker.jfif'), 80000),
    new Collection(new Titulo("004","1", "Sherlock Holmes","Estudio en escarlata", "Arthur Connan Doyle", "ebook","si",'./img/SH-estudioEnEscarlata.jfif'), 80000),
    new Collection(new Titulo("005","3", "Sherlock Holmes","El signo de los cuatro", "Arthur Connan Doyle", "ebook","si",'./img/SH-elSignoDeLosCuatro.jpg'), 80000),
    new Collection(new Titulo("006","4", "Sherlock Holmes","Escandalo en Bohemia", "Arthur Connan Doyle", "ebook","si",'./img/SH-escandaloBohemia.jfif'), 80000),
    new Collection(new Titulo("007","5", "Sherlock Holmes","El carbunclo azul", "Arthur Connan Doyle", "ebook","si",'./img/SH-carbuncloAzul.jfif'), 80000),
    new Collection(new Titulo("008","1", "Cronicas del asesino de reyes","El nombre del viento", "Patrick Rothfuss", "audio","no",'./img/img2.jpg'), 68000),
    new Collection(new Titulo("009","1", "Cronicas del asesino de reyes","El nombre del viento", "Patrick Rothfuss", "ebook","no",'./img/img2.jpg'), 68000),
    new Collection(new Titulo("010","2", "Cronicas del asesino de reyes","El temor de un hombre sabio", "Patrick Rothfuss", "audio","no",'./img/KC-eltemor.jfif'), 93000),
    new Collection(new Titulo("011","1", "Titulo único","Asi hablaba zaratustra", "Friedrich Nietzsche", "fisico","no",'./img/zaratustra.jpg'), 15000),
    new Collection(new Titulo("012","1", "Titulo único","Ensayo sobre la ceguera", "José Saramago", "fisico","no",'./img/ensayoCeguera.jfif'), 99000),
    new Collection(new Titulo("013","1", "Tutulo único","Cien anos de soledad", "Gabriel Garcia Marquez", "ebook","no",'./img/cienAños.jfif'), 130000),
    new Collection(new Titulo("014","1", "Imperio del vampiro","El imperio del vampiro", "Jay Kristoff", "fisico","no",'./img/imperioDelVampiro.jfif'), 156000),
    new Collection(new Titulo("015","1", "Millenium","Los hombres que no amaban a las mujeres", "Stieg Larson", "fisico","no",'./img/millen1.jpg'), 98000),
    new Collection(new Titulo("016","2", "Millenium","La chica que soñaba con una cerilla y un bidon de gasolina", "Stieg Larson", "fisico","no",'./img/millen2.jpg'), 95000),
    new Collection(new Titulo("017","3", "Millenium","La reina en el palacio de las corrientes de aire", "Stieg Larson", "fisico","no",'./img/millen3.jpg'), 88000)
];

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

  