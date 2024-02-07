/* Insertion Sort */

// const swap = (arr,a, b) => {
//     let temp = arr[a]
//     arr[a] = arr[b]
//     arr[b] = temp
// }

// a = [6, 3, 2, 1, 0];
// if (a.length == 1) console.log(a);
// else {
//     let pos = 1
//     while (pos < a.length) {
//         for (let j = pos; j > 0; j--) {
//             if (a[j] < a[j - 1]) {
//                 swap(a,j,(j-1))
//             }
//         }
//         pos++
//     }
//     console.log(a);
// }

/* merge sort */
const merge = (arr,leftArray,rightArray) => {
    let len = arr.length
    let left_len = len/2
    let right_len = len-left_len

    // indices
    let i ,l,r
    i=l=r=0
    while(l < left_len && r < right_len) {
        if(leftArray[l] < rightArray[r]) {
            arr[i] = leftArray[l]
            i++
            l++
        }
        else {
            arr[i] = rightArray[r]
            i++
            r++
        }
    }
    while(l < left_len){
        arr[i] = leftArray[l]
        i++
        l++
    }
    while(r < right_len){
        arr[i] = rightArray[r]
        i++
        r++
    }
}

const mergeSort = (arr) => {
    let len = arr.length
    if(len <= 1) return

    let mid = len/2
    let leftArray = []
    let rightArray = []

    let i = 0
    for(; i < len; i++) {
        if(i < mid) leftArray.push(arr[i])
        else {
            rightArray.push(arr[i])
        }
    }

    mergeSort(leftArray)
    mergeSort(rightArray)
    merge(arr,leftArray,rightArray)
}

arr = [8,2,5,3,4,7,6,1]
let lb = 0;
let ub = arr.length;
mergeSort(arr)
arr.forEach(element => {
    console.log(element);
});