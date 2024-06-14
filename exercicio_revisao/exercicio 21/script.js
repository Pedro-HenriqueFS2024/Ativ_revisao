// Simulated available dates and times
const availableDates = ['10-06-2024', '11-06-2024', '12-06-2024'];
const availableTimes = ['10:00', '11:00', '14:00', '15:00', '16:00'];

const calendarElement = document.getElementById('calendar');
const timeSlotsElement = document.getElementById('time-slots');
const reserveButton = document.getElementById('reserve-btn');

// Function to display available dates
function displayAvailableDates() {
    const calendarHTML = availableDates.map(date => `<button class="date-btn" data-date="${date}">${date}</button>`).join('');
    calendarElement.innerHTML = calendarHTML;
}

// Function to display available times for a selected date
function displayAvailableTimes(date) {
    const timesHTML = availableTimes.map(time => `<input type="radio" name="time" value="${time}">${time}`).join('<br>');
    timeSlotsElement.innerHTML = timesHTML;
}

// Event listener for date buttons
calendarElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('date-btn')) {
        const selectedDate = event.target.dataset.date;
        displayAvailableTimes(selectedDate);
    }
});

// Event listener for reserve button
reserveButton.addEventListener('click', () => {
    const selectedTime = document.querySelector('input[name="time"]:checked');
    if (selectedTime) {
        const reservationDate = document.querySelector('.date-btn.active').dataset.date;
        const reservationTime = selectedTime.value;
        alert(`Reserva confirmada para ${reservationDate} às ${reservationTime}`);
    } else {
        alert('Por favor, selecione um horário.');
    }
});

// Initial setup
displayAvailableDates();
