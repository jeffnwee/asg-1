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
            issueForm.style.display = 'none';
            issueButton.style.display = 'block';
            const submittedMessage = document.createElement('p');
            submittedMessage.textContent = 'Request submitted';
            submittedMessage.style.color = 'white';
            submittedMessage.style.marginTop = '0.2vh';
            submittedMessage.style.marginBottom = '1vh';
            submittedMessage.style.fontSize = '1vw';
            issueButton.parentNode.insertBefore(submittedMessage, issueButton.nextSibling);

            setTimeout(() => {
                submittedMessage.remove();
            }, 3000);
        });
    }

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
});