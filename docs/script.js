const installation = document.getElementById('installation');
const howItWorks = document.getElementById('how-it-works');

howItWorks.addEventListener('click', () => installation.showModal());

installation.addEventListener('click', (event) => {
  const bounds = installation.getBoundingClientRect();
  if (event.target === installation &&
      (event.clientX < bounds.left || event.clientX > bounds.right ||
       event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    installation.close();
  }
});

installation.addEventListener('close', () => howItWorks.focus());
