document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navMenu').classList.toggle('active');
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});


document.querySelectorAll('.pic').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = this.src;
  });
});

document.getElementById('lightbox').addEventListener('click', function() {
  this.style.display = 'none';
});