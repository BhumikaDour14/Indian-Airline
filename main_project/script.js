document.getElementById('donateBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
    document.getElementById('requestFormContainer').classList.add('hidden');
});

document.getElementById('requestBtn').addEventListener('click', function() {
    document.getElementById('requestFormContainer').classList.remove('hidden');
    document.getElementById('formContainer').classList.add('hidden');
});

// Placeholder for graph data
const ctx = document.getElementById('bloodGraph').getContext('2d');
const bloodGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Donors', 'Requesters'],
        datasets: [{
            label: '# of People',
            data: [120, 80], // Example data: 120 donors and 80 requesters
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Handle form submissions (for demonstration purposes)
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering to donate blood!');
    this.reset(); // Reset the form
});

document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your request for blood has been submitted!');
    this.reset(); // Reset the form
});