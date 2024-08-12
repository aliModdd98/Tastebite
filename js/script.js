let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].clientWidth;
  const slidesToShow = Math.floor(
    document.querySelector(".slider-container").clientWidth / slideWidth
  );
  if (slideIndex >= slides.length - slidesToShow + 1) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - slidesToShow;
  }
  const offset = -slideIndex * slideWidth;
  document.querySelector(".slider").style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
  slideIndex += step;
  showSlides();
}

// Initialize slider
showSlides();

//form Validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const successModal = document.getElementById("successModal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailError.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    messageInput.classList.add("is-invalid");
    isValid = false;
  } else {
    messageInput.classList.remove("is-invalid");
    messageError.textContent = "";
  }

  if (isValid) {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // Show success modal
    const modal = new bootstrap.Modal(successModal);
    modal.show();
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show Search Modal
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".modal-footer .btn-primary");
  const searchInput = document.getElementById("searchInput");

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const query = searchInput.value;
      console.log("Search Query:", query);
    });
  } else {
    console.error("Search button not found");
  }
});

//Dropdown
document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll(
    ".dropdown-menu .dropdown-item"
  );

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownItems.forEach(function (i) {
        i.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
