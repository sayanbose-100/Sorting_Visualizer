import {
    swap,
    extractHeight
} from '../commonOps'

export async function insertion_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    let pos = 1;
    while (pos < bars.length) {
        for (let j = pos; j > 0; j--) {
            let bar1 = bars[j]
            let bar2 = bars[j - 1]
            let bar1_h = extractHeight(bar1)
            let bar2_h = extractHeight(bar2)
            if (bar1_h < bar2_h) {
                bar1.style.backgroundColor = "red"
                bar2.style.backgroundColor = "red"
                swap(bar1, bar2)
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 15);
                })
            }
            bar1.style.backgroundColor = "rgb(12, 154, 236)"
            bar2.style.backgroundColor = "rgb(12, 154, 236)"
        }
        pos++;
    }
}