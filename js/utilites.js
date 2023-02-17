// function getValueFromInput(elementId) {
//     const inputField = document.getElementById(elementId);
//     const inputFieldString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldString);
//     return inputFieldValue;
// }
function getValueFromInput(elementId) {
    const inputField = document.querySelector(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}