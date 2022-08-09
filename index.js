let sumaTotal = 0 ;

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
}