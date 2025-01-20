document.addEventListener("DOMContentLoaded", function () {
    let dropEvent = {
        target: {
            value: "1"
        }
    }
    let colorEvent = {
        target: {
            value: "#000000",
            id: "colorPick1"
        }
    }
    colorChangerLbl(colorEvent);
    colorPickPageHandle(dropEvent);
});

function colorChangerLbl(event) {
    let colorAct = document.getElementById(event.target.id);
    let colorActLbl = document.getElementById((event.target.id) + "Lbl");
    let r = parseInt((event.target.value).slice(1, 3), 16);
    let g = parseInt((event.target.value).slice(3, 5), 16);
    let b = parseInt((event.target.value).slice(5, 7), 16);
    let finalValue = `rgb(${r}, ${g}, ${b})`;
    (document.getElementById(event.target.id + "DetHex")).textContent = event.target.value;
    (document.getElementById(event.target.id + "DetRGB")).textContent = finalValue;
    colorActLbl.style.backgroundColor = colorAct.value;
}

function colorPickPageHandle(event) {
    let colorCount = document.getElementById("pickerHandler");
    colorCount.classList.value = ("pickerHandlerCls" + event.target.value);
}