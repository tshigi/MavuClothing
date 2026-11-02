document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");
  if(menuBtn){
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }

  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if(fullName === ""){
        alert("Please enter your Full Name");
        return;
      }
      if(email === "" || !email.includes("@")){
        alert("Please enter valid Email");
        return;
      }
      if(message === ""){
        alert("Please enter Message - Size, Color, Quantity");
        return;
      }
      alert("Thank you " + fullName + "! Enquiry sent. We will contact you at " + email);
      form.reset();
    });
  }
});