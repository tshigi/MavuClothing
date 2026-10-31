function filterProducts() {
    let input = document.getElementById('productSearch');
    if (!input) return;
    let filter = input.value.toLowerCase();
    let products = document.getElementsByClassName('product-item');
    for (let i = 0; i < products.length; i++) {
        let name = products[i].getAttribute('data-name');
        if (name.toLowerCase().includes(filter)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.lightbox-img');
    if (images && lightbox && lightboxImg) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                lightboxImg.src = this.src;
                lightbox.style.display = 'flex';
            });
        });
        lightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let name = document.getElementById('fullName').value.trim();
            let email = document.getElementById('email').value.trim();
            let product = document.getElementById('productSelect').value;
            let message = document.getElementById('message').value.trim();
            if (name === "" || email === "" || message === "") {
                alert("Please fill all required fields!");
                return;
            }
            if (!email.includes("@")) {
                alert("Please enter a valid email!");
                return;
            }
            alert("Thank you " + name + "! Your enquiry for " + product + " has been received. We will contact you at " + email + ". Mavu Clothing Thohoyandou - 076 877 5761");
            enquiryForm.reset();
        });
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let name = document.getElementById('cName').value.trim();
            let email = document.getElementById('cEmail').value.trim();
            if(name === "" || email === "") {
                alert("Please fill name and email!");
                return;
            }
            alert("Thank you " + name + "! Your message has been received. We will reply to " + email + ". Mavu Clothing - 076 877 5761");
            contactForm.reset();
        });
    }
});
