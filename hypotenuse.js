const sides = document.querySelectorAll(".side-input");
const hypotenusebtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;

}

hypotenusebtn.addEventListener('click', calculateHypotenuse);