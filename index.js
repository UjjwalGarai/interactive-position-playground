const radios = document.querySelectorAll('input[name="fav_position"]');
const display = document.getElementById('position-display');
const topLine = document.querySelector('.top-line');
const leftLine = document.querySelector('.left-line');
const rightLine = document.querySelector('.right-line');
const bottomLine = document.querySelector('.bottom-line');

let top_value = 50;
let left_value = 50;
let right_value = 50;
let bottom_value = 50;

document.querySelectorAll('input[type="range"]').forEach(input => {
    // console.log(input);
    input.addEventListener('change', (event) => {
        var val = event.target.value;
        if (event.target.id == "top-range") {
            top_value = val;
        } else if (event.target.id == "left-range") {
            left_value = val;
        } else if (event.target.id == "right-range") {
            right_value = val;
        } else if (event.target.id == "bottom-range") {
            bottom_value = val;
        }
        updatePosition();
        console.log(val);
        console.log(event.target.id);
    })
    // input.addEventListener('input', () => {
    //     updatePosition();
    // });
});


function updateValue(event) {
    const target = event.target;
    const value = target.value;

}

function updatePosition() {
    display.style.top = `${top_value}px`;
    display.style.left = `${left_value}px`;
    display.style.right = `${right_value}px`;
    display.style.bottom = `${bottom_value}px`;
    topLine.style.top = `${top_value}px`;
    leftLine.style.left = `${left_value}px`;
    rightLine.style.right = `${right_value}px`;
    bottomLine.style.bottom = `${bottom_value}px`;
}


// Function to update position and line values
radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log(`Position changed to: ${selectedValue}`);
        display.textContent = selectedValue;
        display.style.position = selectedValue;

    });
});