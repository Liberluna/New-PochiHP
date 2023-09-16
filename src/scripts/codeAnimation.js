const setCodeAnimation = element => {
    const mainCode = Array.from(element.innerHTML)

    let tmpCode = ''

    let index = 0
    const next = () => {
        if (init < bodyCode.length) {
            tmpCode += mainCode[index]
            element.innerHTML = tmpCode
            requestAnimationFrame(next)
        }
    }
    next()
}
function callbackBuild() {
    let divs = document.querySelectorAll("body > div,box");

    for (let i = 0; i < divs.length;i++) {
        setCodeAnimation(divs[i])
    }
}
