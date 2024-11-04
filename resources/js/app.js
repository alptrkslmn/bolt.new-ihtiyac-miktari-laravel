// Constants
const PRICE_PER_M2 = 444.00;
const BOX_SIZE_M2 = 1.26;
const BOX_PRICE = PRICE_PER_M2 * BOX_SIZE_M2;

// Area Calculator Modal
function openAreaCalculator() {
    document.getElementById('areaCalculatorModal').classList.remove('hidden');
    document.getElementById('areaCalculatorModal').classList.add('flex');
}

function closeAreaCalculator() {
    document.getElementById('areaCalculatorModal').classList.add('hidden');
    document.getElementById('areaCalculatorModal').classList.remove('flex');
}

function clearCalculator() {
    document.getElementById('width').value = '';
    document.getElementById('length').value = '';
    document.getElementById('calculated_result').textContent = '0.00';
}

function calculateArea() {
    const width = parseFloat(document.getElementById('width').value) || 0;
    const length = parseFloat(document.getElementById('length').value) || 0;
    const area = width * length;
    document.getElementById('calculated_result').textContent = area.toFixed(2);
}

function applyCalculatedArea() {
    const area = parseFloat(document.getElementById('calculated_result').textContent);
    document.getElementById('calculated_area').value = area.toFixed(2);
    document.getElementById('manual_area').value = '';
    updateQuantityFromArea(area);
    closeAreaCalculator();
    showClearButton();
}

// Area and Quantity Management
function clearArea() {
    document.getElementById('calculated_area').value = '';
    document.getElementById('manual_area').value = '';
    document.querySelector('.clear-button').classList.add('hidden');
    setQuantity(1);
}

function showClearButton() {
    document.querySelector('.clear-button').classList.remove('hidden');
}

function calculateFromManualArea(value) {
    document.getElementById('calculated_area').value = '';
    if (value) {
        updateQuantityFromArea(parseFloat(value));
    }
}

function updateQuantityFromArea(area) {
    const boxesNeeded = Math.ceil((area * 1.1) / BOX_SIZE_M2);
    setQuantity(boxesNeeded);
}

// Quantity and Price Management
function setQuantity(value) {
    document.getElementById('quantity').value = value;
    updatePrice();
}

function increaseQuantity() {
    const currentQuantity = parseInt(document.getElementById('quantity').value);
    setQuantity(currentQuantity + 1);
}

function decreaseQuantity() {
    const currentQuantity = parseInt(document.getElementById('quantity').value);
    if (currentQuantity > 1) {
        setQuantity(currentQuantity - 1);
    }
}

function updatePrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = quantity * BOX_PRICE;
    document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}