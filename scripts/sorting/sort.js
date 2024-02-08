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
                    }, );
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

async function merger(bars, l, m, r) {
    let len = bars.length;
    let L = []
    let R = []
    let i, j, k
    for (let i = 0; i < len; i++) {
        if (i <= m) L.push(bars[i])
        else R.push(bars[i])
    }
    i = j = 0
    k = l
    let bar1, bar2
    while (i < L.length && j < R.length) {
        bar1 = L[i]
        bar2 = R[j]
        let bar1_h = extractHeight(bar1)
        let bar2_h = extractHeight(bar2)
        if (bar1_h <= bar2_h) {
            bars[k].style.height = bar1_h
            i++
        }
        else {
            bars[k].style.height = bar2_h
            j++
        }
        k++
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },);
        })
    }
    while (i < L.length) {
        bars[k].style.height = L[i].style.height
        i++
        k++
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },);
        })
    }
    while (j < R.length) {
        bars[k].style.height = R[j].style.height
        j++
        k++
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },);
        })
    }
}
async function merge_sort(bars, l, r) {
    if (bars.length <= 1) return
    if (l < r) {
        let mid = l + (r - l) / 2
        merge_sort(bars, l, mid)
        merge_sort(bars, mid + 1, r)
        merger(bars, l, mid, r)
    }
}
export function merge_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    console.log(bars);
    merge_sort(bars, 0, bars.length)
}

export async function selection_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    for (let i = 0; i < bars.length; i++) {
        let min = bars[i]
        min.style.backgroundColor = "green"
        let pos = 0
        for (let j = i + 1; j < bars.length; j++) {
            if (extractHeight(bars[j]) < extractHeight(min)) {
                min = bars[j]
                min.style.backgroundColor = "red"
                pos = j
            }
        }
        if (min != bars[i]) {
            swap(bars[i], bars[pos])
        }
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, );
        })
    }
}

export function quick_sort_bars(){

}