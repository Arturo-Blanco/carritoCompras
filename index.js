"use strict";
let subTotal= 0;
let sumaTotal=0;
let botonAgregar=document.querySelector(".btnAgregar");
let botonTotal=document.querySelector(".btnTotal");

botonAgregar.addEventListener("click",calcularCompra);
botonTotal.addEventListener("click",calcularTotal);

function calcularCompra() {
    let producto= document.querySelector(".product").value;
    let cantidad= document.querySelector(".cant").value;
    let costo= document.querySelector(".cost").value;
    subTotal=(parseInt(costo)*parseInt(cantidad));
    let elemProd=document.createElement("li");
    let elemCant=document.createElement("li");
    let elemCost=document.createElement("li");
    let elemSubt=document.createElement("li");
    let texProd=document.createTextNode(producto);
    let texCant=document.createTextNode(cantidad);
    let texCost=document.createTextNode(costo);
    let texSub=document.createTextNode(subTotal);
    elemProd.appendChild(texProd);
    elemCant.appendChild(texCant);
    elemCost.appendChild(texCost);
    elemSubt.appendChild(texSub);
    listProd.appendChild(elemProd);
    listCant.appendChild(elemCant);
    listCost.appendChild(elemCost);
    listSub.appendChild(elemSubt);
    sumaTotal= (parseInt(sumaTotal)+ parseInt(subTotal))
    }

function calcularTotal() {
let total= sumaTotal;
    document.querySelector(".total").innerHTML=`El costo total es: $ `+ total
}

/*let sumaTotal = 0 ;

function funcAgreg() {
    let producto = document.getElementById("producto").value; 
    let costo = document.getElementById("costo").value;
    let elemProduc = document.createElement("li");
    let elemCost= document.createElement("li");
    let texto1 = document.createTextNode(`Producto: ` +producto);
    let texto2 = document.createTextNode(`$ `+costo);
    elemProduc.appendChild(texto1);
    elemCost.appendChild(texto2);
    listProd.appendChild(elemProduc);
    listCost.appendChild(elemCost);
    sumaTotal = (parseInt(sumaTotal) + parseInt(costo));
}

function funcTotal() {
    let total = sumaTotal ;
    document.getElementById("total").innerHTML = `El costo total es: $ ` + total;   
} */

