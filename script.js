const container = document.querySelector(".container");

const input = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");

const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", function () {
    const inputVal = input.value;
    console.log(inputVal);
    if (!inputVal || inputVal.trim().length === 0) {
        container.classList.remove("active");
        return;
    }
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputVal}`;
    container.classList.add("active");
});
