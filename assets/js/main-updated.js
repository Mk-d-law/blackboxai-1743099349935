// Carousel functionality
let currentSlide = 0;

function initCarousel() {
  const carouselTrack = document.getElementById('carousel-track');
  const featuredProperties = properties.slice(0, 5); // Get first 5 properties as featured

  featuredProperties.forEach(property => {
    const slide = document.createElement('div');
    slide.className = 'w-full flex-shrink-0 px-4';
    slide.innerHTML = `
      <div class="property-card bg-white rounded-lg overflow-hidden shadow-md">
        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold">${property.title}</h3>
          <p class="text-a5ff03 font-bold">${property.price}</p>
          <button class="btn-premium w-full mt-4 py-2 px-4">View Details</button>
        </div>
      </div>
    `;
    carouselTrack.appendChild(slide);
  });

  // Set up carousel navigation
  document.getElementById('carousel-prev').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  document.getElementById('carousel-next').addEventListener('click', () => {
    if (currentSlide < featuredProperties.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const slideWidth = document.querySelector('#carousel-track > div').offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderProperties();
  initCarousel();

function renderSingleProperty(property) {
    const propertyGrid = document.getElementById('property-grid');
    const propertyCard = document.createElement('div');
    propertyCard.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 property-card';
    propertyCard.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <div class="flex justify-between items-start">
                <h3 class="text-lg font-bold text-gray-900">${property.title}</h3>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">${property.type}</span>
            </div>
            <p class="text-blue-600 font-bold mt-2">${property.price}</p>
            <div class="flex items-center text-gray-600 mt-2">
                <i class="fas fa-bed mr-1"></i>
                <span class="mr-4">${property.bedrooms}</span>
                <i class="fas fa-bath mr-1"></i>
                <span class="mr-4">${property.bathrooms}</span>
                <i class="fas fa-ruler-combined mr-1"></i>
                <span>${property.sqft} sqft</span>
            </div>
            <div class="flex items-center text-gray-600 mt-2">
                <i class="fas fa-map-marker-alt mr-1"></i>
                <span>${property.location}</span>
            </div>
            <button class="btn-premium w-full mt-4 py-2 px-4" 
                    style="background-color: #a5ff03; color: #000; border: 2px solid #a5ff03; font-weight: bold;">
                View Details
            </button>
        </div>
    `;
    propertyGrid.appendChild(propertyCard);
}

// Rest of the existing code...