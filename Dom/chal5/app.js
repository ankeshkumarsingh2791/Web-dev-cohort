/**
 * Write your challenge solution here
 */
// Image data
const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
  ];
  


  const carouselTrack = document.getElementById('carouselTrack');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');


let currentIndex = 0;

// Function to load images
function loadImages() {
  carouselTrack.innerHTML = ''; // Clear previous images
  images.forEach(({ url, caption }) => {
    const card = `
      <div class="w-80 flex-shrink-0 text-center">
        <img src="${url}" alt="Image" class="w-full h-60 object-cover rounded-lg">
        <h3 class="text-lg font-semibold mt-2">${caption}</h3>
      </div>
    `;
    carouselTrack.innerHTML += card;
  });
}

// Initial Load
loadImages();

// Function to update carousel position


// Next Button Click
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    loadImages()
  }
});

// Prev Button Click
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
   loadImages()
  }
});
