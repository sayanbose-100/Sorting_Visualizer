export const swap = (bar1, bar2) => {
    let temp_height = bar1.style.height
    bar1.style.height = bar2.style.height
    bar2.style.height = temp_height
}

export const extractHeight = (barObj) => {
    let height = barObj.style.height
    let pos = height.indexOf("p")
    let height_val = Number(height.substring(0, pos))
    return height_val
}