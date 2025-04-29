const flights = [
    { flightNumber: "AA101", origin: "New York", destination: "Los Angeles", seats: 15 },
    { flightNumber: "BA202", origin: "Chicago", destination: "Miami", seats: 7 },
    { flightNumber: "IN100", origin: "India", destination:"Bangkok", seats:10}
];

function displayFlights() {
    const flightsTable = document.getElementById("flightsTable");
    flights.forEach(flight => {
        const row = flightsTable.insertRow();
        row.insertCell(0).innerText = flight.flightNumber;
        row.insertCell(1).innerText = flight.origin;
        row.insertCell(2).innerText = flight.destination;
        row.insertCell(3).innerText = flight.seats;
        const actionCell = row.insertCell(4);
        const reserveButton = document.createElement("button");
        reserveButton.innerText = "Reserve";
        reserveButton.onclick = () => reserveSeat(flight);
        actionCell.appendChild(reserveButton);
    });
}

function reserveSeat(flight) {
    if (flight.seats > 0) {
        flight.seats--;
        document.getElementById("message").innerText = `Reservation successful for flight ${flight.flightNumber}.`;
        updateFlightsTable();
    } else {
        document.getElementById("message").innerText = `Sorry, flight ${flight.flightNumber} is fully booked.`;
    }
}

function updateFlightsTable() {
    const flightsTable = document.getElementById("flightsTable");
    flightsTable.innerHTML = `
        <tr>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Seats Available</th>
            <th>Action</th>
        </tr>
    `;
    displayFlights();
}

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const flightNumber = document.getElementById("flightNumber").value;
    const name = document.getElementById("name").value;
    const passportNumber = document.getElementById("passportNumber").value;

    const flight = flights.find(f => f.flightNumber === flightNumber);
    if (flight) {
        reserveSeat(flight);
        document.getElementById("flightNumber").value = '';
        document.getElementById("name").value = '';
        document.getElementById("passportNumber").value = '';
    } else {
        document.getElementById("message").innerText = `Flight ${flightNumber} not found.`;
    }
});

// Initial display of flights
displayFlights();