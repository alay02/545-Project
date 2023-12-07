const reviewsDiv = document.getElementById('reviews');
const restaurantsDiv = document.getElementById('restaurants');
const closeBtn = document.getElementById('review-quit');
const postBtn = document.getElementById('review-post');
const popUp = document.getElementById('pop-up');
const signInBtn = document.getElementById('sign-in');
const aboutHeader = document.getElementById('about-header');
const aboutContent = document.getElementById('about-content');
const restaurantsHeader = document.getElementById('restaurants-header');

var currentRestaurantID;
var currentUser = "user";


//SIGN-IN
signInBtn.addEventListener("click", () =>
  popUp.classList.add("open")
);


//GET RESTAURANT AND REVIEW DATA
fetch('./data/restaurants.json')
  .then(response => response.json())
  .then(data => {
    for(const x in data) {
      restaurantsDiv.appendChild(createRestaurantItem(x, data[x]));
    }});
    
fetch('./data/reviews.json')
  .then(response => response.json())
  .then(data => data.forEach(d => reviewsDiv.prepend(createReviewItem(d))));

//REVIEW POSTING
closeBtn.addEventListener("click", () => {
  popUp.classList.remove("open");
  currentRestaurantID = null;
});

postBtn.addEventListener("click", () => {
  var review = document.getElementById('pop-up-content');

  const content = document.getElementById('pop-up-input').value;
  
  var rating = 0;

  stars.forEach(s => {
    if(s.className == 'filled') {
      rating++;
    }
  });
  
  if(content == "" || rating == 0) {
    alert('Must enter review and rating!')
    return
  }

  const n = createReviewItem({"user":currentUser, "restaurant":currentRestaurantID, "city":"Hoboken", "content":content, "rating":rating});
  reviewsDiv.prepend(n);

  document.getElementById('pop-up-input').value = "";
  popUp.classList.remove("open");
  currentRestaurantID = null;
});

//GET CITY INFO
fetch('./data/cities.json')
  .then(response => response.json())
  .then(data => { aboutHeader.innerHTML += data[0].name;
                  aboutContent.innerHTML = data[0].info;
                  restaurantsHeader.innerHTML += data[0].name;});



function performSearch() {
    var searchTerm = document.getElementById('searchInput').value;
  
    console.log('Searching for: ', searchTerm);

    restaurants.forEach(r => {
      if(r.name == searchTerm.to) {
        document.body.innerHTML = searchTerm;
      }
    });

}

// // Function to set the rating
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

  // document.addEventListener('DOMContentLoaded', () => {
  //     const commentForm = document.getElementById('comment-form');
  //     const nameInput = document.getElementById('name-input');
  //     const commentInput = document.getElementById('comment-input');
  //     const commentsList = document.getElementById('comments-list');

  //     commentForm.addEventListener('submit', function(event) {
  //         event.preventDefault();
  //         const name = nameInput.value.trim();
  //         const comment = commentInput.value.trim();
  //         if (name !== "" && comment !== "") {
  //             const newComment = document.createElement('li');
  //             newComment.classList.add('comment-item');
  //             newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
  //             commentsList.appendChild(newComment);
  //             nameInput.value = "";
  //             commentInput.value = ""; // Clear the input fields
  //         }
  //     });
  // });



  function createRestaurantItem(id, restaurant) {
    // Create elements
    var restaurantItem = document.createElement('div');
    restaurantItem.className = 'restaurant-item';
    restaurantItem.id = id;

    var restaurantHeader = document.createElement('div');
    restaurantHeader.className = 'restaurant-header';

    var restaurantNameLink = document.createElement('h3');
    var restaurantLink = document.createElement('a');
    restaurantLink.href = restaurant.link;
    restaurantLink.textContent = restaurant.name;
    restaurantNameLink.appendChild(restaurantLink);

    var ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';

    // Create filled stars based on the provided rating
    for (var i = 0; i < restaurant.rating; i++) {
      var star = document.createElement('span');
      star.className = 'filled';
      star.innerHTML = '&#9733;';
      ratingContainer.appendChild(star);
    }

    for (var i = restaurant.rating; i < 5; i++) {
      var star = document.createElement('span');
      star.innerHTML = '&#9733;';
      ratingContainer.appendChild(star);
    }

    var restaurantContent = document.createElement('div');
    restaurantContent.className = 'restaurant-content';

    var restaurantImage = document.createElement('img');
    restaurantImage.src = restaurant.image; 
    restaurantImage.onclick = function () {
      window.location.href = restaurant.website;
    }
    restaurantContent.appendChild(restaurantImage);

    var restaurantFooter = document.createElement('div');
    restaurantFooter.className = 'restaurant-footer';

    var websiteButton = document.createElement('button');
    websiteButton.type = 'button';
    websiteButton.textContent = 'Website';
    websiteButton.onclick = function() {
      location.href = restaurant.website;
    };

    var reviewButton = document.createElement('button');
    reviewButton.className = 'review-button';
    reviewButton.textContent = 'Write a Review';
    reviewButton.addEventListener("click", (event) => {
      popUp.classList.add("open");
      document.getElementById('pop-up-header').innerHTML = 'Tell us what you thought about ' + restaurant.name + "!";
      currentRestaurantID = id;
    });

    // Append elements to their respective parent elements
    restaurantHeader.appendChild(restaurantNameLink);
    restaurantHeader.appendChild(ratingContainer);

    restaurantFooter.appendChild(websiteButton);
    restaurantFooter.appendChild(reviewButton);

    restaurantItem.appendChild(restaurantHeader);
    restaurantItem.appendChild(restaurantContent);
    restaurantItem.appendChild(restaurantFooter);

    return restaurantItem;
  }


  function createReviewItem(review) {
    // Create elements
    var reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    var reviewHeader = document.createElement('div');
    reviewHeader.className = 'review-header';

    var userIcon = document.createElement('div');
    userIcon.className = 'user-icon';

    var userNameElement = document.createElement('div');
    userNameElement.className = 'user-name';
    userNameElement.textContent = review.user;

    var reviewRestaurant = document.createElement('a');
    reviewRestaurant.className = 'review-restaurant';
    
    fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data =>  {
      reviewRestaurant.href = data[review.restaurant].website
      reviewRestaurant.textContent = data[review.restaurant].name;
    });

  

    var reviewContent = document.createElement('div');
    reviewContent.className = 'review-content';
    reviewContent.textContent = review.content;

    var reviewFooter = document.createElement('div');
    reviewFooter.className = 'review-footer';

    var ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';

    // Create filled stars based on the provided rating
    for (var i = 0; i < review.rating; i++) {
      var star = document.createElement('span');
      star.className = 'filled';
      star.innerHTML = '&#9733;';
      ratingContainer.appendChild(star);
    }

    for (var i = review.rating; i < 5; i++) {
      var star = document.createElement('span');
      star.innerHTML = '&#9733;';
      ratingContainer.appendChild(star);
    }

    // Append elements to their respective parent elements
    reviewHeader.appendChild(userIcon);
    reviewHeader.appendChild(userNameElement);
    reviewHeader.appendChild(reviewRestaurant);

    reviewFooter.appendChild(ratingContainer);

    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewContent);
    reviewItem.appendChild(reviewFooter);

    return reviewItem;
  }