
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageInput').value;

    const messageDiv = document.getElementById('message');

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        messageDiv.innerHTML = 'Please fill out all fields.';
        messageDiv.className = 'message error';
        return;
    }

    // Simulate form submission success
    messageDiv.innerHTML = 'Form submitted successfully!';
    messageDiv.className = 'message success';

    // Clear the form
    document.getElementById('contactForm').reset();
});

// Chatbox functionality
function toggleChatbox() {
    const chatBox = document.getElementById('chatbox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage() {
    const chatBoxTextarea = document.querySelector('.chat-box textarea');
    const messageDiv = document.querySelector('.chat-box-message');

    if (chatBoxTextarea.value.trim() === '') {
        messageDiv.innerHTML = 'Please enter a message.';
        messageDiv.className = 'message error';
        return;
    }

    messageDiv.innerHTML = 'Message sent!';
    messageDiv.className = 'message success';
    chatBoxTextarea.value = '';
}
