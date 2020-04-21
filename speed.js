const myForm = document.form1;
let completionProgress = document.getElementById("completionProgress");
let speedMeter = document.getElementById("speedMeter");

function countFieldData() {
    let count = 0;

    for (let index = 0; index < myForm.length; index ++) {
        let element = myForm[index];

        if (element.value) {
            count ++;
        }
    }
    return count;
}

function formInputChange() {
    completionProgress.value = countFieldData();

    speedMeter.value = myForm.speed.value;
}

myForm.addEventListener("input", formInputChange)