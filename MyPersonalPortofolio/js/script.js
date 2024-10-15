let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    console.log('Menu button clicked'); // Log to confirm event trigger
    menu.classList.toggle('fa-times');  // Toggle the X icon
    header.classList.toggle('active');  // Slide in/out the menu
    document.body.classList.toggle('active');  // Shift the body
};

window.onscroll = () => {
    if (window.innerWidth < 991) {
        menu.classList.remove('fa-times'); // Remove 'fa-times' to reset menu icon
        header.classList.remove('active'); // Close the menu (slide out)
        document.body.classList.remove('active'); // Remove the body shift
    }
};
// SKILLS PART 
   // Function to set the color based on the percentage
   function setProgressBarColor(percentage) {
    if (percentage >= 90) return 'var(--red)'; // Green for 90% and above
    if (percentage >= 70) return 'var(--black)'; // Blue for 70% to 89%
    if (percentage >= 50) return 'var(--orange)'; // Orange for 50% to 69%
    return 'var(--red)'; // Red for below 50%
}

// Function to fill progress bars
function fillProgressBar(bar) {
    const percentageText = bar.getAttribute('data-percentage');
    const percentage = parseInt(percentageText); // Extract the percentage number
    const progressFill = bar.querySelector('.progress-fill');

    // Set the width of the progress fill
    progressFill.style.setProperty('--final-width', percentageText + '%'); // Set a CSS variable for animation
    progressFill.style.width = percentageText + '%';

    // Set the background color based on the percentage
    progressFill.style.backgroundColor = setProgressBarColor(percentage);

    // Trigger animation
    setTimeout(() => {
        progressFill.style.animation = 'fillBar 1s forwards'; // Start the fill animation
    }, 100); // Delay to ensure width is set before animation
}

// Intersection Observer for triggering the fill animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.classList.add('visible'); // Trigger fade-in and slide
            fillProgressBar(bar); // Fill the progress bar
            observer.unobserve(bar); // Stop observing once filled
        }
    });
});

// Observe each progress bar
const progressBars = document.querySelectorAll('.bar');
progressBars.forEach(bar => {
    observer.observe(bar);
});

// JavaScript to handle click events for icons
const icons = document.querySelectorAll('.box i');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active'); // Toggle the active class
    });
});

// contact form 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    if (email === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (message === '') {
        alert('Please enter your message.');
        return;
    }

    alert('Thank you for contacting us, ' + name + '!');
    // Form submit logic can go here, e.g., send to backend via fetch or AJAX
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// dont try right click 
document.oncontextmenu = () => {
    document.getElementById('redAlert').style.display = 'block';
    return false; // Disable right-click
  };

  // Close Alert Function
  function closeAlert() {
    document.getElementById('redAlert').style.display = 'none';
  }

  document.onkeydown =e =>{
if(e.key == "F12"){
    alert("DON'T TRY TO VIEW PAGE SOURCES")
    return false
  }
  if(e.ctrlKey && e.key == "u"){
    alert("DON'T TRY TO VIEW PAGE SOURCES")
    return false
  }

}
