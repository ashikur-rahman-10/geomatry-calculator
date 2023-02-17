document.getElementById('calculate-triangle').addEventListener('click', function () {
    const getBase = getValueFromInput('#triangle-base');
    const getHeight = getValueFromInput('#triangle-height');

    const areaOfTriangle = .5 * getBase * getHeight;


    console.log(areaOfTriangle);
    console.log(getHeight);
})