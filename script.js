function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission
  
  let formData = new FormData(this);
  let response = await fetch('https://formspree.io/f/xanenjqg', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
  });
  
  if (response.ok) {
      alert('Message sent successfully!');
      this.reset(); // Reset form after successful submission
  } else {
      alert('Error sending message. Please try again later.');
  }
});