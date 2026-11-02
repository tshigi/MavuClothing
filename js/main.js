document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger") || document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu") || document.getElementById("mainNav");
  if(hamburger && navMenu){
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

   const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  document.querySelectorAll(".item .pic, .item img").forEach(img => {
    if(img.closest("#lightbox")) return;
    img.addEventListener("click", () => {
      if(lightbox && lightboxImg){
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
      }
    });
  });
  if(lightbox){
    lightbox.addEventListener("click", () => lightbox.classList.remove("active"));
  }

 
  const enquiryForm = document.querySelector("form:not(#contactForm)");
  if(enquiryForm && document.getElementById("fullName")){
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if(fullName === ""){ alert("Please enter your Full Name"); return; }
      if(email === "" || !email.includes("@")){ alert("Please enter valid Email"); return; }
      if(message === ""){ alert("Please enter Message - Size, Color, Quantity"); return; }
      alert("Thank you " + fullName + "! Enquiry sent. We will contact you at " + email);
      enquiryForm.reset();
    });
  }

 
  const contactForm = document.getElementById("contactForm");
  if(contactForm){
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const msg = document.getElementById("contactMessage").value.trim();
      if(name === ""){ alert("Please enter your Full Name"); return; }
      if(email === "" || !email.includes("@")){ alert("Please enter valid Email"); return; }
      if(msg === ""){ alert("Please enter Message"); return; }
      alert("Thank you " + name + "! Message sent. We will reply to " + email);
      contactForm.reset();
    });
  }

  window.filterProducts = function(){
    const input = document.getElementById("search");
    if(!input) return;
    const filter = input.value.toLowerCase();
    document.querySelectorAll(".item").forEach(item => {
      const name = item.getAttribute("data-name") || "";
      item.style.display = name.includes(filter) ? "" : "none";
    });
  }
});