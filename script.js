
// script.js

// Set the target birthday
const birthday = new Date('2024-11-25'); // Update this to the desired date

function updateCountdown() {
    const today = new Date();
    const timeDifference = birthday - today;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Update the text dynamically
    const rotatingText = document.querySelector('.rotating-text');
    rotatingText.textContent = `${daysRemaining} days for your birthday, Priyankaaa!`;
}

// Update the countdown immediately and every 1 second
updateCountdown();
setInterval(updateCountdown, 1000);
