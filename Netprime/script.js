// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const resultBox = document.getElementById('result-box');

    // Simulated data with respective paths
    const data = [
        { name: 'leo', path: 'leo.html' },
        { name: 'bheemla nayak', path: 'nayak.html' },
        { name: 'kushi', path: 'kushi.html' },
        { name: 'jalsa', path: 'jalsa.html' },
        { name: 'toli prema', path: 'toli.html' },
        { name: 'hanuman', path: 'hanuman.html' },
        { name: 'salaar', path: 'salaar.html' },
        { name: 'thammudu', path: 'tammudu.html' },
        { name: 'Hi nanna', path: 'Hi nanna.html' },
        { name: 'jailer', path: 'jailer.html' },
        { name: 'student no.1', path: 'student.html' }
        


    ];

    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        resultBox.innerHTML = '';
        if (query) {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
            if (filteredData.length) {
                filteredData.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = item.name;
                    div.addEventListener('click', () => {
                        window.location.href = item.path;
                    });
                    resultBox.appendChild(div);
                });
                resultBox.style.display = 'block';
            } else {
                resultBox.style.display = 'none';
            }
        } else {
            resultBox.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && !resultBox.contains(e.target)) {
            resultBox.style.display = 'none';
        }
    });
});




document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = 'tel:+918374971945';
});



document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // You can perform form validation here if needed

        // Simulating form submission
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Replace with your actual notification method (e.g., toast notification)
        alert('Message sent successfully!'); // Example: alert as a notification

        // Optional: Clear form fields after submission
        contactForm.reset();
    });
});
