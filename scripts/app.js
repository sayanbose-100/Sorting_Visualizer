import {
    bubble_sort_bars
} from './sorting/bubble.js'

const active_technique = document.querySelector('.active')
const selected_sorting = document.querySelector('.selected').innerHTML
// selected_sorting.addEventListener('change',(e) => {
//     console.log(`The sorting technique is`);
// })
console.log(active_technique.innerHTML);

const start_btn = document.querySelector('.start-btn')

switch (selected_sorting) {
    case "Bubble Sort":
        start_btn.addEventListener('click', () => {
            bubble_sort_bars();
        });
        break;
    // case "Merge Sort":
    //     start_btn.addEventListener('click', () => {
    //         bubble_sort_bars();
    //     });
    // case "Quick Sort":
    //     start_btn.addEventListener('click', () => {
    //         bubble_sort_bars();
    //     });
    // case "Insertion Sort":
    //     start_btn.addEventListener('click', () => {
    //         bubble_sort_bars();
    //     });
    // case "Selection Sort":
    //     start_btn.addEventListener('click', () => {
    //         bubble_sort_bars();
    //     });
    default:
        console.log("Wrong choice");
}