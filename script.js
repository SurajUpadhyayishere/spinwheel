const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const resultDiv = document.getElementById('result');

const prizes = [
    'Better Luck Next Time',
    'Just Miss',
    'Free QRCode',
    '10 QRCode',
    '₹100',
    'Car'
];

function spinWheel() {
    // Define the probabilities for each section
    let selectedPrizeIndex;
    const randomValue = Math.random();
    if (randomValue < 0.6) {
        selectedPrizeIndex = [0, 1, 2][Math.floor(Math.random() * 3)]; // 60% chance
    } else if (randomValue < 0.9) {
        selectedPrizeIndex = 3; // 30% chance
    } else {
        selectedPrizeIndex = [0, 1, 2][Math.floor(Math.random() * 3)]; // 10% fallback chance
    }

    // Calculate the spin degree (each slice is 60 degrees)
    const spinDeg = selectedPrizeIndex * 60 + (360 * 6) + Math.floor(Math.random() * 20);

    // Apply spin animation
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${spinDeg}deg)`;

    // Disable button during spin
    spinBtn.disabled = true;
    resultDiv.textContent = '';

    setTimeout(() => {
        spinBtn.disabled = false;
        resultDiv.textContent = `You Won: ${prizes[selectedPrizeIndex]}!`;
    }, 4000);
}

spinBtn.addEventListener('click', spinWheel);
