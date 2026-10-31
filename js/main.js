function filterProducts() {
  var s = document.getElementById("search").value.toLowerCase();
  var items = document.getElementsByClassName("item");
  for (var i = 0; i < items.length; i++) {
    var n = items[i].getAttribute("data-name");
    if (n.includes(s)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var box = document.getElementById("lightbox");
  var big = document.getElementById("lightbox-img");
  var pics = document.querySelectorAll(".pic");
  for (var i = 0; i < pics.length; i++) {
    pics[i].onclick = function() {
      big.src = this.src;
      box.style.display = "flex";
    };
  }
  if (box) {
    box.onclick = function() {
      box.style.display = "none";
    };
  }
  var f1 = document.getElementById("enquiryForm");
  if (f1) {
    f1.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById("fullName").value;
      var prod = document.getElementById("productSelect").value;
      alert("Thank you " + name + "! Your enquiry for " + prod + " received. Mavu will contact you. 076 877 5761");
      f1.reset();
    };
  }
  var f2 = document.getElementById("contactForm");
  if (f2) {
    f2.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById("cName").value;
      var email = document.getElementById("cEmail").value;
      alert("Thank you " + name + "! Message received. Reply to " + email + ". Mavu Thohoyandou");
      f2.reset();
    };
  }
});
