const dropdown = document.querySelector('.dropdown');
const select = dropdown.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');


select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open')
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate')
        menu.classList.remove('menu-open')

        options.forEach(option => {
            option.classList.remove('active')
        });
        option.classList.add('active')
    })
})


/* customization for speed button */
const speed_change = (btn) => {
    let innerVal = btn.innerText
    if (innerVal == "Speed - 1x") innerVal = "Speed - 2x"
    else if (innerVal == "Speed - 2x") innerVal = "Speed - 3x"
    else if (innerVal == "Speed - 3x") innerVal = "Speed - 1x"
    btn.innerText = innerVal
}
const speed_btn = document.querySelector('.speed-btn')
speed_btn.addEventListener('click',() => {
    speed_change(speed_btn);
})