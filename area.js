var baseInput = document.querySelector("#base-input");
var heightInput = document.querySelector("#height-input");
var calculatebtn = document.querySelector("#calculate-btn");
var outputEl = document.querySelector("#ouput-box");

function calculateArea(b, h){
    const area = (b * h) / 2;
    return area;

}

function triangleArea() {
    var base = Number(baseInput.value);
    var height = Number(heightInput.value);

    calculateArea(base, height);

   outputEl.innerText =  `Area of the triangle is ${calculateArea(base,height)}` ;
}

calculatebtn.addEventListener('click', triangleArea);
