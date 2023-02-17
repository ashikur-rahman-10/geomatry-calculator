const triangleCalBtn = selector('#calculate-triangle');
const rectangleCalBtn = selector('#calculate-rectangle');
const parallelogramCalBtn = selector('#calculate-parallelogram');
const rhombusCalBtn = selector('#calculate-rhombus');
const pentagonCalBtn = selector('#calculate-pentagon');
const ellipseCalBtn = selector('#calculate-ellipse');

let calculateList = [];

triangleCalBtn.addEventListener('click', function () {
    const getBase = getValueFromInput('#triangle-base');
    const getHeight = getValueFromInput('#triangle-height');

    const valid = checkedValidInputData(getBase, getHeight);
    if (!valid) return;

    const areaOfTriangle = .5 * getBase * getHeight;
    const triangle = {
        name: "Triangle",
        area: areaOfTriangle
    };
    calculateList.push(triangle);
    showCalculateList();
});

rectangleCalBtn.addEventListener('click', function () {
    const getLength = getValueFromInput('#react-length');
    const getWidth = getValueFromInput('#react-width');

    const valid = checkedValidInputData(getLength, getWidth);
    if (!valid) return;

    const areaOfRectangle = getLength * getWidth;
    const rectangle = {
        name: "Rectangle",
        area: areaOfRectangle
    };
    calculateList.push(rectangle);
    showCalculateList();
});

parallelogramCalBtn.addEventListener('click', function () {
    const getBase = getValueFromInput('#para-base');
    const getHeight = getValueFromInput('#para-height');

    const valid = checkedValidInputData(getBase, getHeight);
    if (!valid) return;
    const areaOfParallelogram = getBase * getHeight;
    const parallelogram = {
        name: "Parallelogram",
        area: areaOfParallelogram
    };
    calculateList.push(parallelogram);
    showCalculateList();
});

rhombusCalBtn.addEventListener('click', function () {
    const getDiagonal1 = getValueFromInput('#rhombus-d1');
    const getDiagonal2 = getValueFromInput('#rhombus-d2');

    const valid = checkedValidInputData(getDiagonal1, getDiagonal2);
    if (!valid) return;

    const areaOfRhombus = .5 * getDiagonal1 * getDiagonal2;
    const rhombus = {
        name: "Rhombus",
        area: areaOfRhombus
    };
    calculateList.push(rhombus);
    showCalculateList();
});

pentagonCalBtn.addEventListener('click', function () {
    const getParameter = getValueFromInput('#pentagon-p');
    const getBase = getValueFromInput('#pentagon-b');

    const valid = checkedValidInputData(getParameter, getBase);
    if (!valid) return;

    const areaOfPentagon = 5 * getParameter * getBase;
    const pentagon = {
        name: "Pentagon",
        area: areaOfPentagon
    };
    calculateList.push(pentagon);
    showCalculateList();
});

ellipseCalBtn.addEventListener('click', function () {
    const getRadius1 = getValueFromInput('#ellipse-a');
    const getRadius2 = getValueFromInput('#ellipse-b');

    const valid = checkedValidInputData(getRadius1, getRadius2);
    if (!valid) return;

    const areaOfEllipse = Math.PI * getRadius1 * getRadius2;
    const ellipse = {
        name: "Ellipse",
        area: areaOfEllipse
    };
    calculateList.push(ellipse);
    showCalculateList();
});

/**** Add background effect on hover */
const cards = document.querySelectorAll('.card');


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// add random color to each card on hover 
cards.forEach(card => {
    card.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = getRandomColor();
    });
});


function selector(selector) {
    return document.querySelector(selector);
}

function getValueFromInput(elementId) {
    const inputField = document.querySelector(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}



function checkedValidInputData(value1, value2) {
    let valid = true;
    if (!value1 || !value2) {
        alert('Please enter a valid number');
        valid = false;
    }
    if (value1 <= 0 || value2 <= 0) {
        alert('Please enter a positive number');
        valid = false;
    }
    return valid;
}

function showCalculateList() {
    const calculateListContainer = document.querySelector('.calculate-list');
    let content = '';

    for (let i = 0; i < calculateList.length; i++) {
        const cal = calculateList[i];
        console.log(cal);
        content += `
        <div class="flex gap-5 justify-between mt-4">
            <span> ${i + 1} </span>
            <span> ${cal.name}  </span>
            <span> ${cal.area} cm </span>
            <button class="bg-red-500 rounded-lg px-3 py-1 text-white">
                Convert 
            </button>
        </div>
        `;
    }

    calculateListContainer.innerHTML = content;
};