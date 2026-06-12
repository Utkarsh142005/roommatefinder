// JavaScript to handle booking form submission (Basic)
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;

    // Simple form validation
    if (!checkInDate || !checkOutDate) {
        alert('Please select both check-in and check-out dates!');
        return;
    }

    // Show a confirmation message
    alert(`Your booking from ${checkInDate} to ${checkOutDate} has been confirmed!`);
});
