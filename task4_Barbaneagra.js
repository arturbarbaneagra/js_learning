for (var i = 1; i <= 20; i++) {
    $("body").append(`<p>Element NR${i}</p>`);
    if (i % 2 == 0) {
        div.setAttribute("color", "green")
    } else {
        div.setAttribute("color", "violet")
    }
}