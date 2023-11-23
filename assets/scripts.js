
  // Get references to the links and portfolio sections
  const links = document.querySelectorAll('.nav-portfolio');
  const sections = document.querySelectorAll('.portfolio-section');

  // Function to show the selected section
  function showSection(sectionId) {
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }

  // Add click event listeners to the links
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = event.target.getAttribute('data-target');
      showSection(sectionId);
    });
  });

  // Default display the first section (apps)
  showSection('section1');


// Function to import pages
function includeHTML(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Check if the section  element exists
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = data;
            } else {
                console.error(`Container with id '${containerId}' not found.`);
            }
        })
        .catch(error => console.error(error));
}

// Load footer.html into part1Container
includeHTML('footer.html', 'socials');
includeHTML('modals.html', 'modals');
includeHTML('header.html', 'header');
includeHTML('nav.html', 'nav');
includeHTML('portfolio.html', 'portfolio');