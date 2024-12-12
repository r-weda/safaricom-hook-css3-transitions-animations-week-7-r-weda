// Part 2: JavaScript Functions

// Function with parameters and return values
function calculateRectangleArea(length, width) {
    // Demonstrate local scope
    let area = length * width;
    return area;
}

// Function demonstrating scope
function scopeExample() {
    // Global variable
    var globalVar = "I'm global";

    function innerFunction() {
        // Local variable
        var localVar = "I'm local";
        console.log(globalVar);  // Accessing global variable
        console.log(localVar);   // Accessing local variable
    }

    innerFunction();
    // console.log(localVar);  // This would cause an error
}

// Function to toggle modal
function toggleModal() {
    const modal = document.getElementById('modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Area Calculator
    const calculateAreaBtn = document.getElementById('calculate-area');
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const areaResult = document.getElementById('area-result');

    calculateAreaBtn.addEventListener('click', () => {
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        
        if (length && width) {
            const area = calculateRectangleArea(length, width);
            areaResult.textContent = `Area: ${area} sq units`;
        } else {
            areaResult.textContent = 'Please enter valid numbers';
        }
    });

    // Modal Interactions
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('modal');

    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    });

    // Call scope example
    scopeExample();
});
