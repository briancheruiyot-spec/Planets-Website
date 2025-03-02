    // JavaScript to toggle between dark and light modes
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Toggle Dark Mode';
      } else {
        toggleButton.textContent = 'Toggle Light Mode';
      }
    });