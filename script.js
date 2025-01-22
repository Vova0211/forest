let isVisible = true;
function map() {
    const black = document.getElementById("black");
    const btn = document.getElementById("mapBtn")
    const btn1 = document.getElementById("btnBack1");
    const btn2 = document.getElementById("btnBack2");
    const btn3 = document.getElementById("btnBack3");
    if (isVisible == false) {
        black.classList.remove("notVisible");
        btn1.classList.remove("notVisible");
        btn2.classList.remove("notVisible");
        btn3.classList.remove("notVisible");
        btn.classList.remove("btn__second");
        isVisible = true;
    } else {
        black.classList.add("notVisible");
        btn1.classList.add("notVisible");
        btn2.classList.add("notVisible");
        btn3.classList.add("notVisible");
        btn.classList.add("btn__second");
        isVisible= false;
    }
}