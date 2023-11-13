// DARK LIGHT THEME

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




function initMap() {
  var options= {
    zoom:20,
    center:{lat:9.657770,lng:80.159210}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}

function validateForm() {
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var contactNumber = document.getElementById('contactNumber').value.trim();
  var message = document.getElementById('message').value.trim();
  var errorMsg = document.getElementById('errorMsg');

  errorMsg.innerHTML = ''; // Reset error message

  // Simple validation for demonstration purposes
  if (!firstName || !lastName || !email || !contactNumber || !message) {
      errorMsg.innerHTML = 'Please enter all required fields.';
  } else if (firstName.length > 15 || lastName.length > 15) {
      errorMsg.innerHTML = 'First name and last name must be less than 15 characters each.';
  } else if (!validateEmail(email)) {
      errorMsg.innerHTML = 'Enter a valid email address.';
  } else if (!validatePhoneNumber(contactNumber)) {
      errorMsg.innerHTML = 'Enter a valid phone number.';
  } else if (message.length < 2 || message.length > 120) {
      errorMsg.innerHTML = 'Message must be between 2 and 120 characters.';
  } else {
      errorMsg.innerHTML = 'Successfully Submitted!';
  }
}

function validateEmail(email) {
  var emailRegex = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}





//  CHANGE BACKGROUND HEADER 
// function scrollHeader() {
//   const header = document.getElementById("header");
//   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 80) header.classList.add("scroll-header");
//   else header.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

// QUESTIONS ACCORDION 
// const accordionItems = document.querySelectorAll(".questions__item");

// accordionItems.forEach((item) => {
//   const accordionHeader = item.querySelector(".questions__header");

//   accordionHeader.addEventListener("click", () => {
//     const openItem = document.querySelector(".accordion-open");

//     toggleItem(item);

//     if (openItem && openItem !== item) {
//       toggleItem(openItem);
//     }
//   });
// });

// const toggleItem = (item) => {
//   const accordionContent = item.querySelector(".questions__content");

//   if (item.classList.contains("accordion-open")) {
//     accordionContent.removeAttribute("style");
//     item.classList.remove("accordion-open");
//   } else {
//     accordionContent.style.height = accordionContent.scrollHeight + "px";
//     item.classList.add("accordion-open");
//   }
// };
