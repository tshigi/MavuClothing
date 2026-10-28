// WEDE5020 Part 3 - All JS Functionality for Mavu Clothing Thohoyandou

const products = [
  {name:"Mavu Hoodie", price:599, category:"hoodie", img:"images/wedelImage.jpg"},
  {name:"Mavu T-Shirt", price:299, category:"tshirt", img:"images/wedelImage.jpg"},
  {name:"Mavu Cap", price:199, category:"cap", img:"images/wedelImage.jpg"}
];

function loadProducts(list = products){
  const c = document.getElementById('product-container');
  if(!c) return;
  c.innerHTML='';
  list.forEach(p=>{
    c.innerHTML+=`<div class="product-card"><img src="${p.img}" alt="${p.name} Thohoyandou" class="lightbox-img" style="cursor:pointer;width:100%"><h3>${p.name}</h3><p>R${p.price}</p></div>`;
  });
  initLightbox();
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadProducts();
  const s=document.getElementById('searchInput');
  if(s){s.addEventListener('input',e=>{
    const t=e.target.value.toLowerCase();
    loadProducts(products.filter(p=>p.name.toLowerCase().includes(t)));
  });}
  // Leaflet Map - Thohoyandou
  if(document.getElementById('map')){
    const map=L.map('map').setView([-23.0599,30.4533],13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-23.0599,30.4533]).addTo(map).bindPopup('Mavu Clothing - Thohoyandou').openPopup();
  }
});

function initLightbox(){
  const lb=document.getElementById('lightbox');
  document.querySelectorAll('.lightbox-img').forEach(img=>{
    img.addEventListener('click',()=>{
      lb.style.display='flex'; document.getElementById('lightbox-img').src=img.src;
    });
  });
  if(lb) lb.addEventListener('click',()=>lb.style.display='none');
}

// Accordion
document.querySelectorAll('.accordion-header').forEach(h=>{
  h.addEventListener('click',()=>{h.nextElementSibling.classList.toggle('active');});
});

// Enquiry Validation - Shows cost/availability
function validateEnquiry(e){
  e.preventDefault();
  const name=document.getElementById('enqName').value.trim();
  const email=document.getElementById('enqEmail').value.trim();
  const product=document.getElementById('enqProduct').value;
  const err=document.getElementById('enqError');
  if(name.length<3){err.textContent="Name must be 3+ letters";return false;}
  if(!/^\S+@\S+\.\S+$/.test(email)){err.textContent="Enter valid email";return false;}
  document.getElementById('enqResult').innerHTML=`<p style="color:green">Thanks ${name}, ${product} is R599 and IN STOCK in Thohoyandou. Email sent to ${email}</p>`;
  fetch('https://jsonplaceholder.typicode.com/posts',{method:'POST',body:JSON.stringify({name,email,product})}).then(()=>alert('Enquiry sent via AJAX'));
  return false;
}
function validateContact(e){
  e.preventDefault();
  const name=document.getElementById('conName').value.trim();
  const phone=document.getElementById('conPhone').value.trim();
  const msg=document.getElementById('conMessage').value.trim();
  const err=document.getElementById('conError');
  if(!/^\d{10}$/.test(phone)){err.textContent="Phone must be 10 digits like 0821234567";return false;}
  if(msg.length<10){err.textContent="Message min 10 chars";return false;}
  window.location.href=`mailto:info@mavuclothing.co.za?subject=Contact from ${name}&body=Phone:${phone}%0D%0A${msg}`;
  return false;
}
