 // Add your JavaScript code here
function performSearch() {
    // Add code here to handle the search functionality
    var searchTerm = document.getElementById('search-bar').value;
    // Perform search based on the searchTerm
    console.log('Searching for: ', searchTerm);
}

// Function to set the rating
function setRating(ratingElement, ratingValue) {
    let stars = ratingElement.querySelectorAll('.star');
    stars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= ratingValue) {
            star.classList.add('not-rated');
        } else {
            star.classList.remove('not-rated');
        }
    });
}

// Get all the stars in the rating
var stars = document.querySelectorAll(".star-rating li");

// Function to reset the color of all stars
function resetStars() {
  stars.forEach(function (star) {
    star.classList.remove("filled");
  });
}

// Function to handle the click event on each star
function handleStarClick(event) {
  resetStars();
  var value = parseInt(event.target.getAttribute("data-value"), 10);
  for (var i = 0; i < value; i++) {
    stars[i].classList.add("filled");
  }
}

// Add click event listener to each star
stars.forEach(function (star) {
  star.addEventListener("click", handleStarClick);
});

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();
        if (name !== "" && comment !== "") {
            const newComment = document.createElement('li');
            newComment.classList.add('comment-item');
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentsList.appendChild(newComment);
            nameInput.value = "";
            commentInput.value = ""; // Clear the input fields
        }
    });
});



