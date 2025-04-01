// bubbule sort 

function bubblueSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // arr[j], arr[j + 1] = arr[j + 1], arr[j]; // swap
            }
        }
    }
    console.log("sorted array", arr);
    return arr;
}

console.log(bubblueSort([5, 3, 8, 4, 2])) // [2, 3, 4, 5, 8]
console.log(bubblueSort([5, 3, 8, 4, 2, 1])) // [1, 2, 3, 4, 5, 8]  



// selection sort

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


console.log(selectionSort([5, 3, 8, 4, 2])) // [2, 3, 4, 5, 8]  
console.log(selectionSort([5, 3, 8, 4, 2, 1])) // [1, 2, 3, 4, 5, 8]
console.log(selectionSort([5, 3, 8, 4, 2, 1, 0])) // [0, 1, 2, 3, 4, 5, 8]
