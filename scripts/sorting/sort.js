import {
    swap,
    extractHeight
} from '../commonOps.js'

export async function bubble_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    let bar1, bar2;
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bar1 = bars[j]
            bar2 = bars[j + 1]
            let bar1_h = extractHeight(bar1)
            let bar2_h = extractHeight(bar2)
            if (bar1_h > bar2_h) {
                bar1.style.backgroundColor = "yellow"
                bar2.style.backgroundColor = "red"
                swap(bar1, bar2)
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 0.5);
                })
            }
            bar1.style.backgroundColor = "rgb(12, 154, 236)"
            bar2.style.backgroundColor = "green"
        }
    }
    bar1.style.backgroundColor = "green"
}

export async function insertion_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    let pos = 1;
    let bar1, bar2;
    while (pos < bars.length) {
        for (let j = pos; j > 0; j--) {
            bar1 = bars[j]
            bar2 = bars[j - 1]
            let bar1_h = extractHeight(bar1)
            let bar2_h = extractHeight(bar2)
            if (bar1_h < bar2_h) {
                bar1.style.backgroundColor = "yellow"
                bar2.style.backgroundColor = "red"
                swap(bar1, bar2)
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 15);
                })
            }
            bar1.style.backgroundColor = "green"
            bar2.style.backgroundColor = "rgb(12, 154, 236)"
        }
        bar2.style.backgroundColor = "green"
        pos++;
    }
}

async function merger(bars, leftBars, rightBars) {
    let len = bars.length
    let leftBars_len = leftBars.length
    let rightBars_len = rightBars.length
    let i, l, r
    i = l = r = 0
    let bar1, bar2

    while (l < leftBars_len && r < rightBars_len) {
        bar1 = leftBars[l]
        bar2 = rightBars[r]
        let bar1_h = extractHeight(bar1)
        let bar2_h = extractHeight(bar2)
        if (bar1_h < bar2_h) {
            bars[i].style.height = bar1_h
            i++
            l++
        }
        else {
            bars[i].style.height = bar2_h
            i++
            r++
        }
        await new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve()
            }, 200);
        })
    }
    while (l < leftBars_len) {
        bars[i].style.height = leftBars[l].style.height
        i++
        l++
        await new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve()
            }, 200);
        })
    }
    while (r < rightBars_len) {
        bars[i].style.height = rightBars[r].style.height
        i++
        r++
        await new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve()
            }, 200);
        })
    }
}
const merge_sort = (bars) => {
    let len = bars.length
    if (len <= 1) return
    let mid = len / 2
    let leftBars = []
    let rightBars = []
    for (let i = 0; i < len; i++) {
        if (i < mid) leftBars.push(bars[i])
        else rightBars.push(bars[i])
    }
    merge_sort(leftBars)
    merger(bars, leftBars, rightBars)
    merge_sort(rightBars)
}
export function merge_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    merge_sort(bars)
}