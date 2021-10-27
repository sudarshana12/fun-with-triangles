const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfTriangles(angle1, angle2, angle3){
    const sumOfTriangles = angle1 + angle2 + angle3;
    return sumOfTriangles;
}


function isTriangle(){
    const sumOfTriangles = calculateSumOfTriangles(60,60,60);
    console.log(sumOfTriangles);

}
    


isTriangleBtn.addEventListener("click", isTriangle)