// Set the countdown date (1 month from now in GMT+6)
function getTargetDate() {
    const now = new Date();
    // Convert to GMT+6
    const gmtOffset = 6 * 60; // GMT+6 in minutes
    const localOffset = now.getTimezoneOffset(); // Local offset in minutes
    const totalOffset = (gmtOffset + localOffset) * 60 * 1000; // Convert to milliseconds
    
    const nowInGMT6 = new Date(now.getTime() + totalOffset);
    
    // Add 1 month
    const targetDate = new Date(nowInGMT6);
    targetDate.setMonth(targetDate.getMonth() + 1);
    
    return targetDate;
}

const countdownDate = getTargetDate().getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {
    // Get current time in GMT+6
    const now = new Date();
    const gmtOffset = 6 * 60;
    const localOffset = now.getTimezoneOffset();
    const totalOffset = (gmtOffset + localOffset) * 60 * 1000;
    const nowInGMT6 = new Date(now.getTime() + totalOffset);
    
    // Calculate the distance between now and the countdown date
    const distance = countdownDate - nowInGMT6.getTime();
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result with leading zeros
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    
    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);

// Initialize immediately
countdownFunction;

