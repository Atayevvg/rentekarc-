function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  function logout() {
    alert('Logged out successfully!');
    // Implement logout functionality
  }
  
  function createUser() {
    alert('Create User clicked');
    // Implement create user functionality
  }
  
  function addVehicle() {
    alert('Add Vehicle clicked');
    // Implement add vehicle functionality
  }
  
  function createCampaign() {
    alert('Create Campaign clicked');
    // Implement create campaign functionality
  }
  
  function viewProfile() {
    alert('View Profile clicked');
    // Implement view profile functionality
  }
  
  function viewReservations() {
    alert('View Reservations clicked');
    // Implement view reservations functionality
  }
  
  // Load example data from localStorage
  function loadData() {
    // Load or initialize data
  }
  
  window.onload = loadData;
  