import { bubble_sort_bars } from "./sorting/bubble"

const start_btn = document.querySelector('.start-btn')
start_btn.addEventListener('click', () => {
    bubble_sort_bars()
})