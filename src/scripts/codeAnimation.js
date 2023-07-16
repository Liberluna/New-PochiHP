class codeAnime {
    constructor(element) {
        const bodyCode = element.innerHTML.split("");
        let visualCode = "";
        let init = 0;
        const addCode = () => {
            if (init >= bodyCode.length) {
                cancelAnimationFrame(addCode);
                return;
            }
            visualCode += bodyCode[init];
            element.innerHTML = visualCode;
            init++;
            setTimeout(() => {requestAnimationFrame(addCode);},2.5)
        };
        addCode();
    }
}

function callbackBuild() {
    let divs = document.querySelectorAll("body > div,box");

    for (let i = 0; i < divs.length;i++) {
        new codeAnime(divs[i])
    }
}
