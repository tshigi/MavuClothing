function filterProducts() {
  var searchBox = document.getElementById("productSearch");
  var filter = searchBox.value.toLowerCase();
  var products = document.getElementsByClassName("product-item");

  for (var i = 0; i < products.length; i++) {
    var name = products[i].getAttribute("data-name");
    if (name.toLowerCase().includes(filter)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {

  
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var images = document.querySelectorAll(".lightbox-img");

  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    };
  }

  if (lightbox) {
    lightbox.onclick = function() {
      lightbox.style.display = "none";
    };
  }

  
  var enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById("fullName").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      if (name == "" || email == "" || message == "") {
        alert("Please fill all fields");
        return;
      }

      alert("Thank you " + name + "! Your enquiry received. We will contact you at " + email + ". Mavu Clothing Thohoyandou - 076 877 5761");
      enquiryForm.reset();
    };
  }

  
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById("cName").value;
      var email = document.getElementById("cEmail").value;

      if (name == "" || email == "") {
        alert("Please fill name and email");
        return;
      }

      alert("Thank you " + name + "! Your message received. We will reply to " + email + ". Mavu - 076 877 5761");
      contactForm.reset();
    };
  }

});
