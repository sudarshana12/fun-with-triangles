const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfTriangles(angle1, angle2, angle3){
    const sumOfTriangles = angle1 + angle2 + angle3;
    // console.log(sumOfTriangles);
    return sumOfTriangles;
    
 }


function isTriangle(){
    const sumOfTriangles = calculateSumOfTriangles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfTriangles === 180){
        outputEl.innerText = "Yay, the angles form a triangle";
    }else{
        outputEl.innerText = "Nay, the angles don't form a triangle";
    }
    

}
    


isTriangleBtn.addEventListener("click", isTriangle)