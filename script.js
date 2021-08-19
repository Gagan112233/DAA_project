let mSort = document.getElementById("mergesort")
let hSort = document.getElementById("heapsort")
let qSort = document.getElementById("regularquicksort")
let tMQSort = document.getElementById("threewayquicksort")
let iSort = document.getElementById("insertionsort")
let sSort = document.getElementById("selectionsort")
let bSort = document.getElementById("bubblesort")

let buttonClicked = document.getElementById("submit-button")
let generateNumbers = document.getElementById("generate-button")
let randNosGenerated = document.getElementById("rand-nos-generated")
let sortedOutputArray = document.getElementById("sorted-output-array")

let inputArray = []
let resultantArray = []

//when generate Numbers button is clicked the below code block is executed
generateNumbers.addEventListener("click", function(){
    inputArray = []
    console.log("inside generating numbers function")
    let inputRange = document.getElementById("input-field").value
    if(inputRange == ""){
        alert("Please enter a Value in the input field!!!");
    }
    console.log(inputRange)
    for(let i=0;i<inputRange;i++){
        let x = generateRandomNumbers(0, inputRange)
        inputArray.push(x)
    }
    if(inputArray.length <= 100){
        randNosGenerated.innerHTML = "<h4>Generated Random Nos: </h4>" + "<textarea class='form-control widthArea'>" + inputArray + "</textarea>"
    }
    else{
        randNosGenerated.innerHTML = ""
        sortedOutputArray.innerHTML = ""
    }

    if(inputRange > 0 && inputRange <= 100000){
        alert("Generated "+inputRange +" Random Numbers. Now Select the Algorithms to view the runtimes")
    }
    else{
        alert("ENTER INPUT SIZE <= 100,000")
    }
    console.log(inputArray)
});

//when submit button is clicked the below code block is executed
buttonClicked.addEventListener("click", function(){

    if(inputArray.length <= 100000){
        console.log("Input array length:"+inputArray.length)
        document.getElementById("output-div").innerHTML = ""
        if(mSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Merge sort is checked")
            //new date gives today's date, getTime gives current time in ms
            // div by 1000 gives time in seconds
            let start = new Date().getTime() / 1000
            console.log(start)
            let result = mergeSort(inputArray)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            document.getElementById("output-div").innerHTML += "<br> <strong>Merge Sort:</strong> " 
            + exeTime.toFixed(4) + "s"

            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }
        }
        if(hSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Heap sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let result = heapSort(inputArray)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>Heap Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
        if(qSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Quick sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let len = inputArray.length, small = 0, large = len - 1
            let result = quickSort(inputArray, small, large)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>Quick Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
        if(tMQSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("3 Median Quick sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let len = inputArray.length, small = 0, large = len - 1
            let result = medianQuickSort(inputArray, small, large)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>3 Median Quick Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
        if(iSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Insertion sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let result = insertionSort(inputArray)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>Insertion Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
        if(sSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Selection sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let result = selectionSort(inputArray)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>Selection Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
        if(bSort.checked == true){
            resultantArray = []
            sortedOutputArray.innerHTML = ""

            console.log("Bubble sort is checked")
            let start = new Date().getTime() / 1000
            console.log(start)
            let result = bubbleSort(inputArray)
            let end = new Date().getTime() / 1000
            console.log(end)
            let exeTime = end - start
            console.log("execution time : "+exeTime.toFixed(4) + "s")
            console.log(result)
            if(result.length <= 100){
                sortedOutputArray.innerHTML = "<h4>Sorted Output: </h4>" + "<textarea class='form-control widthArea'>" + result + "</textarea>"
            }
            else{
                sortedOutputArray.innerHTML = ""
            }

            document.getElementById("output-div").innerHTML += "<br> <strong>Bubble Sort:</strong> " 
            + exeTime.toFixed(4) + "s"
        }
    }
    else{
        alert("ENTER INPUT SIZE <= 100,000 and then choose Algorithms to compare")
    }
})

function generateRandomNumbers(least, greatest){
    return Math.floor(Math.random() * (greatest - least + 1)) + least;
}

//To merge the arrays that were split
function mergeArrays(leftArray, rightArray){
    let mergedArray = []
    let i = 0, j = 0, k=0
    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<rightArray[j]){
            mergedArray.push(leftArray[i])
            i++
            k++
        }
        else{
            mergedArray.push(rightArray[j])
            j++
            k++
        }
    }
    while(i<leftArray.length){
        mergedArray.push(leftArray[i])
        i++
        k++
    }
    while(j<rightArray.length){
        mergedArray.push(rightArray[j])
        j++
        k++
    }
    return mergedArray
}

//Main Function to initiate Merge Sort 
function mergeSort(array){
    let array1, array2, middle
    if(array.length <= 1)
        return array
    else{
        middle = Math.floor(array.length/2)
        array1 = mergeSort(array.slice(0, middle))
        array2 = mergeSort(array.slice(middle))
    }
    return mergeArrays(array1, array2)
}

//Main function to initiate Heap Sort
function heapSort(input) {
    let len = input.length;
    let x = Math.floor(len / 2 - 1)
    for (i = x; i >= 0; i--) {
      heapyfi(i, len, input);
    }
    for (let i = len - 1; i >= 0; i--) {
      let z = input[0];
      input[0] = input[i];
      input[i] = z;
      heapyfi(0, i, input);
    }
    return input
}

//Function to Heapify the nodes according to the rules of Max Heap
function heapyfi(i, len, input) {
    let big = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < len && input[left] > input[big])
        big = left;
    if (right < len && input[right] > input[big])
        big = right;
    if (big != i) {
        let z = input[i];
        input[i] = input[big];
        input[big] = z;
        heapyfi(big, len, input);
    }
}

//Function to swap numbers
function swap(list, a, b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

//To split the array into smaller arrays
function partition(list, small, big) {
    let pivot = list[Math.floor((big + small) / 2)]
    while (small <= big) {
        while (list[small] < pivot) {
            small++;
        }
        while (list[big] > pivot) {
            big--;
        }
        if (small <= big) {
            swap(list, small, big);
            small++;
            big--;
        }
    }
    return small;
}

//Main Quick Sort Function
function quickSort(list, small, big) {
    let index;
    if (list.length > 1) {
        index = partition(list, small, big);
        if (small < index - 1) { 
            quickSort(list, small, index - 1);
        }
        if (index < big) { 
            quickSort(list, index, big);
        }
    }
    return list;
}

//Main function of 3 medians
function medianQuickSort(array, small, large){
    if(small >= large)
        return
    if(small < large){
        let index = findMedianPivot(array, small, large)
        quickSort(array, small, large)
    }
    return array
}

//To find the Middle(Pivot) element of the array
function findMedianPivot(array, small, large){
    let initial = array[small]
    let final = array[array.length - 1]
    let middle = Math.floor(large/2)
    let sortingArray = [array[small], array[middle], array[large]]
    sortingArray.sort(function(a,b){ return a - b})
    let middleVal = sortingArray[1]
    let temp = array[large]
    array[large] = middleVal
    if(middleVal == array[small]){
        array[small] = temp
    }
    else if(middleVal == array[middle]){
        array[middle] = temp
    }
    return partition(small, large, array)
}

//Main Function for Insertion Sort
function insertionSort(array){
    let len = array.length
    for(let a=0;a<len;a++){
        let elem = array[a]
        let b = a - 1

        while(array[b]>elem && b>=0){
            array[b+1] = array[b]
            b = b-1
        }
        array[b+1] = elem
    }
    return array
}

//Main function for Selection Sort
function selectionSort(array){
    let len = array.length
    for(let i=0;i<len-1;i++){
        let small = i
        for(let j=i+1;j<len;j++){
            if(array[j] < array[small]){
                small = j   
            }
        }
        let z = array[small]
        array[small] = array[i]
        array[i] = z
    }
    return array
}

//Main function for Bubble sort Algorithm
function bubbleSort(array){
    let len = array.length
    for(let a=0;a<len;a++){
        for(let b=0;b<len-a-1;b++){
            if(array[b]>array[b+1]){
                let z = array[b]
                array[b] = array[b+1]
                array[b+1] = z
            }
        }
    }
    return array
}

/****** REFERENCES ******/
//1.	https://www.digitalocean.com/community/tutorials/js-understanding-merge-sort
//2.	https://www.geeksforgeeks.org/heap-sort/
//3.	https://www.guru99.com/quicksort-in-javascript.html
//4.	https://gist.github.com/epomp447/4c0d0676d9f013788647cbe6e60ae0df
//5.	https://www.geeksforgeeks.org/insertion-sort/
//6.	https://en.wikipedia.org/wiki/Insertion_sort
//7.	https://www.geeksforgeeks.org/selection-sort/
//8.	https://www.geeksforgeeks.org/bubble-sort/