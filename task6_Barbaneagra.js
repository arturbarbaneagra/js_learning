let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let input = document.getElementById('input');

minus.addEventListener('click', () => {

    if (parseInt(input.value) === 0) {
        minus.disabled = true;
    } else {
        plus.disabled = false;
        input.value = parseInt(input.value) - 1;
    }

});

plus.addEventListener('click', () => {

    if (parseInt(input.value) === 9) {
        plus.disabled = true;
    } else {
        input.value = parseInt(input.value) + 1;
        minus.disabled = false;
    }

});