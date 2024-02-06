const swap = (bar1, bar2) => {
    let temp_height = bar1.style.height
    console.log(typeof temp_height);
    bar1.style.height = bar2.style.height
    bar2.style.height = temp_height
}

const extractHeight = (barObj) => {
    let height = barObj.style.height
    let pos = height.indexOf("p")
    let height_val = Number(height.substring(0,pos))
    return height_val
}

function bubble_sort_bars() {
    const bars = document.querySelectorAll('.bar')
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            let bar1 = bars[j]
            let bar2 = bars[j + 1]
            let bar1_h = extractHeight(bar1)
            let bar2_h = extractHeight(bar2)
            if (bar1_h > bar2_h) {
                bar1.style.backgroundColor = "red"
                bar2.style.backgroundColor = "red"
                swap(bar1, bar2)
            }
            bar1.style.backgroundColor = "rgb(12, 154, 236)"
            bar2.style.backgroundColor = "rgb(12, 154, 236)"
        }
    }
}

const start_btn = document.querySelector('.start-btn')
start_btn.addEventListener('click', () => {
    bubble_sort_bars()
})