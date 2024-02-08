function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const bar_area = document.querySelector('.sorting-bars')

const create_bars = () => {
    let randomData = [];

    for (let j = 0; j < 500; j++) {
        randomData.push(getRandomInt(1, 300));
    }
    console.log(randomData);
    // creating the bars and pushing it to the sorting-bars div
    for (let i = 0; i < 500; i++) {
        const bar_div = document.createElement('div')
        bar_div.classList.add('bar')
        bar_div.style.height = `${randomData[i]}px`
        // const val = document.createElement('p')
        // val.innerHTML = `${randomData[i]}`
        // bar_div.appendChild(val)
        bar_area.appendChild(bar_div)
    }
}

window.onload = create_bars();

const randomize = document.querySelector('.randomize-btn')
randomize.addEventListener('click', () => {
    bar_area.innerHTML = ''
    create_bars()
})
