/*===== MENU SHOW Y HIDDEN =====*/ 

const navMenu = document.getElementById('nav-menu'),

      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
;

function generateWaLink(productName, phoneNumber, address, price, locationLink) {
    let baseURL = "https://wa.me/6281261233552";
    let message = `
  Nama Barang: ${productName}
  Nama Anda: ${phoneNumber}
  Alamat: ${address}
  Harga: ${price}
  Lokasi: ${locationLink}`;
    let finalURL = `${baseURL}?text=${encodeURIComponent(message)}`;
    return finalURL;
}

document.getElementById('pesanWa').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link untuk membuka halaman baru secara langsung

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Buat link WhatsApp dengan informasi produk dan lokasi pengguna
            let whatsappLink = generateWaLink('cireng', 'nama anda', 'alamat anda', 'Rp100.000', googleMapsLink);

            // Arahkan pengguna ke WhatsApp setelah link dihasilkan
            window.location.href = whatsappLink;
        }, function(error) {
            if (error.code === error.PERMISSION_DENIED) {
                alert('Akses lokasi ditolak. Silakan aktifkan izin lokasi.');
            } else {
                alert('Terjadi kesalahan dalam mendapatkan lokasi.');
            }
        });
    } else {
        alert("Geolocation tidak didukung oleh browser ini.");
    }
});

//swipe slide
function generateWaLink(productName, phoneNumber, address, price, locationLink) {

    let baseURL = "https://wa.me/6281261233552";

    let message = `
  Nama Barang: ${productName}
  Nama Anda: ${phoneNumber}
  Alamat: ${address}
  Harga: ${price}
  Lokasi: ${locationLink}`;
    let finalURL = `${baseURL}?text=${encodeURIComponent(message)}`;
    return finalURL;
}

document.getElementById('pesanWa1').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link untuk membuka halaman baru secara langsung

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Buat link WhatsApp dengan informasi produk dan lokasi pengguna
            let whatsappLink = generateWaLink('cireng', 'nama anda', 'alamat anda', 'Rp100.000', googleMapsLink);

            // Arahkan pengguna ke WhatsApp setelah link dihasilkan
            window.location.href = whatsappLink;
        }, function(error) {
            if (error.code === error.PERMISSION_DENIED) {
                alert('Akses lokasi ditolak. Silakan aktifkan izin lokasi.');
            } else {
                alert('Terjadi kesalahan dalam mendapatkan lokasi.');
            }
        });
    } else {
        alert("Geolocation tidak didukung oleh browser ini.");
    }
})
;

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  updateDots();
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index);
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Initial display
showSlide(currentIndex);

// Automatic slide change every 3 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000); // Change slide every 3 seconds