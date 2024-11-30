function scrollToPage2() {
    document.getElementById('page2').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const issueButton = document.getElementById('issueButton');
    const issueForm = document.getElementById('issueForm');
    const submitIssue = document.getElementById('submitIssue');

    if (issueButton && issueForm && submitIssue) {
        issueButton.addEventListener('click', function() {
            this.style.display = 'none';
            issueForm.style.display = 'block';
        });

        submitIssue.addEventListener('click', function(event) {
            event.preventDefault();

            // Form validation
            const userEmail = document.getElementById('userEmail');
            const userIssue = document.getElementById('userIssue');
            let isValid = true;

            // Simple email validation
            if (!userEmail.value.trim()) {
                displayError(userEmail, 'Email is required');
                isValid = false;
            } else if (!userEmail.value.includes('@') || !userEmail.value.includes('.')) {
                displayError(userEmail, 'Invalid email format');
                isValid = false;
            }

            if (!userIssue.value.trim()) {
                displayError(userIssue, 'Description is required');
                isValid = false;
            }

            if (isValid) {
                issueForm.style.display = 'none';
                issueButton.style.display = 'block';
                const submittedMessage = document.createElement('p');
                submittedMessage.textContent = 'Submitted successfully';
                submittedMessage.style.color = 'white';
                submittedMessage.style.marginTop = '0.2vh';
                submittedMessage.style.marginBottom = '1vh';
                submittedMessage.style.fontSize = '1vw';
                issueButton.parentNode.insertBefore(submittedMessage, issueButton.nextSibling);

                // Clear form fields
                userEmail.value = '';
                userIssue.value = '';

                setTimeout(() => {
                    submittedMessage.remove();
                }, 3000);
            }
        });
    }

    function displayError(element, message) {
        // Check if an error message already exists
        if (element.nextSibling && element.nextSibling.classList && element.nextSibling.classList.contains('error-message')) {
            return;
        }

        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '0.2vh';
        errorMessage.style.marginBottom = '1vh';
        errorMessage.style.fontSize = '1vw';
        element.parentNode.insertBefore(errorMessage, element.nextSibling);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }
});

// Carousel profile
const carousel = document.querySelector('.carousel');
const profiles = document.querySelectorAll('.profile');
const prev_button = document.querySelector('.carousel-btn.prev');
const next_button = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

if (prev_button && next_button && carousel) {
    prev_button.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? profiles.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    next_button.addEventListener('click', () => {
        currentIndex = (currentIndex === profiles.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
}