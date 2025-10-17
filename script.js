// Set the deadline date (one month from now in GMT+6)
// Current date is Oct 18, 2025 GMT+6
// Deadline: Nov 18, 2025 23:59:59 GMT+6

function getTargetDate() {
    // Create target date: Nov 18, 2025 23:59:59 GMT+6
    // GMT+6 is UTC+6
    const year = 2025;
    const month = 10; // November (0-indexed)
    const day = 18;
    const hours = 23;
    const minutes = 59;
    const seconds = 59;
    
    // Create date in UTC and adjust for GMT+6
    const targetDate = new Date(Date.UTC(year, month, day, hours - 6, minutes, seconds));
    return targetDate;
}

const targetDate = getTargetDate();

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
        // Countdown finished
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the display with leading zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

