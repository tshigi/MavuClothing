function filterProducts() {
    let input = document.getElementById('productSearch').value.toLowerCase();
    let products = document.getElementsByClassName('product-item');
    for (let i = 0; i < products.length; i++) {
        let name = products[i].getAttribute('data-name');
        if (name.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    let images = document.getElementsByClassName('lightbox-img');
    
    for (let img of images) {
        img.style.cursor = "pointer";
        img.addEventListener('click', function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    }
    
    lightbox.addEventListener('click', function() {
        lightbox.style.display = "none";
    });
});
