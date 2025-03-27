const properties = [
    {
      title: "Luxury Villa",
      location: "Anna Nagar, Chennai",
      price: "₹4.2 Crore",
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: "property1.jpg"
    },
    {
      title: "Premium Flat",
      location: "Adyar, Chennai",
      price: "₹1.8 Crore",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "property2.jpg"
    },
    {
      title: "Gated Community House",
      location: "Velachery, Chennai",
      price: "₹3.5 Crore",
      beds: 3,
      baths: 3,
      sqft: 2400,
      image: "property3.jpg"
    }
    {
        title: "Luxury Villa",
        location: "Anna Nagar, Chennai",
        price: "₹4.2 Crore",
        beds: 4,
        baths: 3,
        sqft: 3200,
        image: "property1.jpg"
      },
      {
        title: "Premium Flat",
        location: "Adyar, Chennai",
        price: "₹1.8 Crore",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "property2.jpg"
      },
      {
        title: "Gated Community House",
        location: "Velachery, Chennai",
        price: "₹3.5 Crore",
        beds: 3,
        baths: 3,
        sqft: 2400,
        image: "property3.jpg"
      }
  ];

// Carousel functionality
let currentSlide = 0;

function initCarousel() {
  const carouselTrack = document.getElementById('carousel-track');
  const featuredProperties = properties.slice(0, 5);
  
  // Clear any existing slides
  carouselTrack.innerHTML = '';

  // Create slides for each featured property
  featuredProperties.forEach(property => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
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

  // Carousel navigation
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

// Function to render properties
function renderProperties() {
    const propertyGrid = document.getElementById('property-grid');
    
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300';
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
                <button class="mt-4 w-full bg-black-600 hover:bg-black-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                    View Details
                </button>
            </div>
        `;
        propertyGrid.appendChild(propertyCard);
    });
}

// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

  // Property Carousel
  function initCarousel() {
    const carousel = document.createElement('div');
    carousel.className = 'property-carousel flex overflow-x-auto py-8 space-x-6 px-4';
    carousel.id = 'property-carousel';
    
    properties.slice(0, 5).forEach(property => {
      const card = document.createElement('div');
      card.className = 'property-card flex-none w-80';
      card.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold">${property.title}</h3>
          <p class="text-a5ff03 font-bold">${property.price}</p>
          <button class="btn-premium">View Details</button>
        </div>
      `;
      carousel.appendChild(card);
    });

    document.querySelector('main').appendChild(carousel);
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    renderProperties();
    initCarousel();
    renderProperties();
    
    // Search functionality
    const searchButton = document.querySelector('nav button');
    searchButton.addEventListener('click', function() {
        const searchInput = document.querySelector('nav input');
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm) {
            const filtered = properties.filter(property => 
                property.title.toLowerCase().includes(searchTerm) ||
                property.location.toLowerCase().includes(searchTerm) ||
                property.type.toLowerCase().includes(searchTerm)
            );
            
            if (filtered.length > 0) {
                document.getElementById('property-grid').innerHTML = '';
                filtered.forEach(property => {
                    renderSingleProperty(property);
                });
            } else {
                document.getElementById('property-grid').innerHTML = `
                    <div class="col-span-3 text-center py-12">
                        <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
                        <h3 class="text-xl font-medium text-gray-700">No properties found matching "${searchTerm}"</h3>
                    </div>
                `;
            }
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // In a real app, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! Our agent will contact you shortly.');
        contactForm.reset();
    });
});

// Helper function to render single property
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
            <p class="text-gray-600 text-sm mt-2">${property.description}</p>
            <button class="mt-4 w-full btn-neon font-medium py-2 px-4 transition-all duration-300">
                View Details
            </button>
        </div>
    `;
    propertyGrid.appendChild(propertyCard);
}

// Update renderProperties to use renderSingleProperty
function renderProperties() {
    const propertyGrid = document.getElementById('property-grid');
    propertyGrid.innerHTML = '';
    
    properties.forEach(property => {
        renderSingleProperty(property);
    });
}
