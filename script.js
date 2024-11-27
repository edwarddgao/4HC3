// Sample Data
let studyPlaces = [
    {
        id: 1,
        name: "Library",
        location: "Building A",
        noise: "Quiet",
        crowded: "Somewhat Crowded",
        proximity: "Close",
        reviews: [
            { text: "Great for focused studying." },
            { text: "Sometimes too crowded during exams." }
        ]
    },
    {
        id: 2,
        name: "Campus Cafe",
        location: "Building B",
        noise: "Moderate",
        crowded: "Very Crowded",
        proximity: "Close",
        reviews: [
            { text: "Good coffee and ambiance." }
        ]
    },
    // Add more sample places as needed
];

let favorites = [];

// Navigation Function
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    if(sectionId === 'home') {
        displayPlaces(studyPlaces);
    } else if(sectionId === 'favorites') {
        displayFavorites();
    }
}

// Display Study Places
function displayPlaces(places) {
    const placesList = document.getElementById('placesList');
    placesList.innerHTML = '';

    places.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.classList.add('place');

        placeDiv.innerHTML = `
            <h3>${place.name}</h3>
            <p>Location: ${place.location}</p>
            <p>Noise Level: ${place.noise}</p>
            <p>Crowdedness: ${place.crowded}</p>
            <p>Proximity to Food: ${place.proximity}</p>
            <button onclick="addToFavorites(${place.id})">Add to Favorites</button>
            <button onclick="viewReviews(${place.id})">View Reviews</button>
        `;

        placesList.appendChild(placeDiv);
    });
}

// Add to Favorites
function addToFavorites(placeId) {
    const place = studyPlaces.find(p => p.id === placeId);
    if(place && !favorites.find(fav => fav.id === placeId)) {
        favorites.push(place);
        alert(`${place.name} added to favorites!`);
    } else {
        alert(`"${place.name}" is already in favorites.`);
    }
}

// Display Favorites
function displayFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';

    if(favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }

    favorites.forEach(fav => {
        const favDiv = document.createElement('div');
        favDiv.classList.add('favorite');

        favDiv.innerHTML = `
            <h3>${fav.name}</h3>
            <p>Location: ${fav.location}</p>
            <button onclick="viewReviews(${fav.id})">View Reviews</button>
        `;

        favoritesList.appendChild(favDiv);
    });
}

// Filter Places
function filterPlaces() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = studyPlaces.filter(place => 
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.noise.toLowerCase().includes(query) ||
        place.crowded.toLowerCase().includes(query) ||
        place.proximity.toLowerCase().includes(query)
    );
    displayPlaces(filtered);
}

// View Reviews
function viewReviews(placeId) {
    const place = studyPlaces.find(p => p.id === placeId);
    if(place) {
        document.getElementById('reviewPlaceName').innerText = place.name;
        const reviewsList = document.getElementById('reviewsList');
        reviewsList.innerHTML = '';

        place.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerText = `• ${review.text}`;
            reviewsList.appendChild(reviewDiv);
        });

        // Handle Add Review Form
        const addReviewForm = document.getElementById('addReviewForm');
        addReviewForm.onsubmit = function(e) {
            e.preventDefault();
            const reviewText = document.getElementById('reviewText').value.trim();
            if(reviewText) {
                place.reviews.push({ text: reviewText });
                const newReviewDiv = document.createElement('div');
                newReviewDiv.classList.add('review');
                newReviewDiv.innerText = `• ${reviewText}`;
                reviewsList.appendChild(newReviewDiv);
                document.getElementById('reviewText').value = '';
                alert('Review added!');
            }
        };

        showSection('reviews');
    }
}

// Add New Place
const addPlaceForm = document.getElementById('addPlaceForm');
addPlaceForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('placeName').value.trim();
    const location = document.getElementById('placeLocation').value.trim();
    const noise = document.getElementById('placeNoise').value;
    const crowded = document.getElementById('placeCrowded').value;
    const proximity = document.getElementById('placeProximity').value;

    if(name && location) {
        const newPlace = {
            id: studyPlaces.length + 1,
            name,
            location,
            noise,
            crowded,
            proximity,
            reviews: []
        };
        studyPlaces.push(newPlace);
        alert(`${name} has been added to study places!`);
        addPlaceForm.reset();
        showSection('home');
    } else {
        alert('Please fill in all required fields.');
    }
});

// Initialize Home Section on Load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
