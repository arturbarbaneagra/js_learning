/* 1. La încărcarea paginii, culoarea fundalului paginii se setează în verde și în pagina se adaugă un element
div cu textul “HELLO”.*/
var div = document.createElement('div');
div.innerHTML = "HELLO";
div.style.color = 'green';
document.body.appendChild(div);
/*2. Creați 2 elemente de tip input, cu numele x și y, un buton “Min” la apăsarea căruia, în elementul div cu
id=“rezultat” va fi afișată media aritmetică a numerelor x și y. */
document.getElementById("media").addEventListener("click", () => {
    document.getElementById("Min").innerHTML = 
        (Number(document.getElementById("x").value) + 
        Number(document.getElementById("y").value)) / 2;
})
/*3. Creați 2 elemente de tip input, cu numele x și y, un buton “Schimb” la apăsarea căruia, vor fi schimbate
cu locul valorile între aceste input-uri.*/
var x = document.createElement("INPUT");
x.setAttribute("type", "date");
let btn = document.createElement("button");
btn.innerHTML = "Start";
btn.setAttribute("id", "Start");
document.body.appendChild(btn);
document.getElementById("Start").addEventListener("click", () => {
    div.innerHTML = document.getElementById("Start").value;
})
/*4. Este dat elementul #container. Aplicați acestui element clasa .verde {background: green}, la trecerea
cursorului deasupra elementului. (1p) */
$("#container").on("mouseenter", function (){ 
    $("#container").addClass("verde");
});

/*5. Înserați în pagina 10 elemente p cu textul “Element NR {{i}}”, 1<=i<=10 (elementele sunt adăugate
static). Scrieți codul JavaScript, care setează elementele cu numărul de ordine impar culoarea fundalului
în albastru, iar celor cu număr de ordine par culoarea fundalului roșu. */
for (var i = 1; i <= 10; i++) {
    $("body").append(`<p>Element NR${i}</p>`);
    if (i % 2 == 0) {
        div.setAttribute("color", "red")
    } else {
        div.setAttribute("color", "blue")
    }
}

/*6. Scrieți codul JavaScript, care generează o listă ordonată peste 5 secunde, formată din 5 elemente, cu textul
“Element NR {{i}}”, 1<=i<=10.*/
var timeoutid = setTimeout(function() 
    {
        for (var i = 1; i <= 5; i++) {
            $("body").append(`<p>Element NR${i}</p>`);
        }
    }, 3000)
/*7. Inserați o imagine și creați un buton “Hide/Visibil”. Scrieți codul JS, care ascunde imgainea în timp ce
faceți click pe buton.  */
function toggle_visibility() {
    var e = document.getElementById("button");
    if(e.style.display == 'block')
      e.style.display = 'none';
    else
      e.style.display = 'block';
}
/*8. Înserați în pagină 10 elemente cu clasa “cerc”. Scrieți codul CSS care setează culoarea fundalului în
galben pentru toate elementele cu clasa “cerc”. (1p) */
for (var i = 1; i <= 10; i++) {
    $("body").append(`<div></div>`);
    div.setAttribute("class", "cerc")
}
/*9. Scrieți codul care setează culoarea textului paginii în roșu, peste 5 secunde după încărcarea paginii. (1p) */
var timeoutid1 = setTimeout(function() 
    {
        document.body.setAttribute("textcolor", "red");
    }, 3000)
/*11. Înserați în pagină un buton cu textul “Contor”. Scrieți codul JS care la fiecare apăsare a butonului, va mări
valoarea cifrei de pe buton cu 1. (1p) */
document.getElementById("contor").addEventListener("click", () => {
    document.getElementById("contor").value += 1;
})