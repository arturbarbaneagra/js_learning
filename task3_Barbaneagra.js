let arr = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}]
for (let i = 0; i < arr.length; i++) {
    if ((arr[i].x === null) || typeof(arr[i].x) == "undefined" || (arr[i].y === null) || typeof(arr[i].y) == "undefined") {
        arr.splice(i, 1)
    }
}
console.log(arr)