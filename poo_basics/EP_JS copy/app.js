/* 1. La încărcarea paginii, culoarea textului se setează în albatsru și în pagina se adaugă un element div cu
textul “START”.*/
var div = document.createElement('div');
div.innerHTML = "START";
div.style.color = 'blue';
document.body.appendChild(div);
/*2. Creați 2 elemente de tip input, cu numele x și y, un buton “Media” la apăsarea căruia, în elementul div cu
id=“rezultat” va fi afișată media aritmetică a numerelor x și y.*/
document.getElementById("calculateAverage").addEventListener("click", () => {
    document.getElementById("avg").innerHTML = 
        (Number(document.getElementById("x").value) + 
        Number(document.getElementById("y").value)) / 2;
})
/*3. Creați 2 elemente de tip input, cu numele x și y, un buton “Schimb” la apăsarea căruia, vor fi schimbate
cu locul valorile între aceste input-uri.*/
document.getElementById("change").addEventListener("click", () => {
    let a;
    a = Number(document.getElementById("x").value);
    document.getElementById("x").value = Number(document.getElementById("y").value);
    document.getElementById("y").value = a;
})
/*4. Este dat elementul #container. Aplicați acestui element clasa .verde {background: green}, la trecerea
cursorului deasupra elementului. */
$("#container").on("mouseenter", function (){ 
    $("#container").addClass("verde");
});
/*5. Înserați în pagina 10 elemente p cu textul “Paragraful NR {{i}}”, 1<=i<=10 (elementele sunt adăugate
static). Scrieți codul JavaScript, care setează elementele cu numărul de ordine par culoarea fundalului în
albastru, iar celor cu număr de ordine impar culoarea fundalului galben. */
for (var i = 1; i <= 10; i++) {
    $("body").append(`<p>Paragraful NR${i}</p>`);
}
