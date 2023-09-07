const navbar = document.querySelector('.navbar');
const main = document.getElementById('main');
const toggleButton = document.getElementById('toggle-navbar');
const navbarM = document.querySelector('.navbar-m');
var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


toggleButton.addEventListener('click', () => {
  if (navbar.style.left === '-100%') {
    navbar.style.left = '0';
    main.classList.remove("main");
    main.classList.add("main-active");
  } else {
    navbar.style.left = '-100%';
    main.classList.remove("main-active");
    main.classList.add("main");
  }
});

function checksize() {
  const navbar = document.querySelector('.navbar');
  const toggleButton = document.getElementById('toggle-navbar');
  const navbarM = document.querySelector('.navbar-m');
  var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const htmlElement = document.querySelector("html");

  toggleButton.addEventListener('click', () => {
    genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; // Her tıklamada genişliği güncelle
    if(navbar.style.left == '-100%') {
      if(genislik < 1240) {
        navbarM.classList.remove("m-active");
        htmlElement.classList.remove("overflow-h");
      }
    } else {
      if(genislik < 1240) {
        navbarM.classList.add("m-active");
        htmlElement.classList.add("overflow-h");
      }
    }
  });
}

window.addEventListener('load', checksize);
window.addEventListener('resize', checksize); 

var isKontrolEdildi = false; // Bayrak başlangıçta false olarak ayarlanır
var isKontrolEdildiSec = false; // Bayrak başlangıçta false olarak ayarlanır

// Sayfa yüklendiğinde veya pencere boyutu değiştiğinde bu işlevi çağırın
function kontrolEt() {
  var element = document.querySelector('.navbar'); // Elementinizi uygun bir şekilde seçin
  var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (genislik < 1240 && !isKontrolEdildi) {
    element.style.left = '-100%';
    isKontrolEdildi = true; // Bayrağı true olarak ayarlayın, böylece bir daha çalışmaz
    isKontrolEdildiSec = false; 
    main.classList.remove("main-active");
    main.classList.add("main");
  } else if (genislik > 1240 && !isKontrolEdildiSec) {
    element.style.left = '0';
    isKontrolEdildi = false; // Bayrağı tekrar false olarak ayarlayın, böylece sonraki boyut değişikliklerinde çalışır
    isKontrolEdildiSec = true; 
    main.classList.remove("main");
    main.classList.add("main-active");
    navbarM.classList.remove("m-active");
  }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştikçe kontrol etmek için olay dinleyicileri ekleyin
window.addEventListener('load', kontrolEt);
window.addEventListener('resize', kontrolEt);

// Dışarıda tıklama olayını dinleyin
document.addEventListener("click", function(event) {
  // Tıklanan elementi alın
  var targetElement = event.target;
  var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const navbar = document.querySelector('.navbar');
  const header = document.getElementById('header');
  const htmlElement = document.querySelector("html");

  if (genislik < 1240) {
      // Eğer tıklanan element <div> elementi değilse ve <div> elementinin içinde değilse
      if (targetElement !== navbar && !navbar.contains(targetElement) && targetElement !== header && !header.contains(targetElement)) {
          // <div> elementinin dışına tıklanmıştır, istediğiniz işlemi burada gerçekleştirebilirsiniz
          if (navbar.style.left === '0px') {
              event.preventDefault();
              navbar.style.left = '-100%';
              main.classList.remove("main-active");
              main.classList.add("main");
              htmlElement.classList.remove("overflow-h");
              if (genislik < 1240) {
                navbarM.classList.remove("m-active");
              }
          }
      }
  }
  else {
      // Genişlik 1240 piksel veya daha fazla ise, linkin normal çalışmasına izin verin
      return;
  }
});

  navbar.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX; // Başlangıç dokunuşunun x koordinatını kaydet
    scrolled = false; // Her dokunuş öncesi kaydırma işlemi sıfırlanır
});

navbar.addEventListener("touchmove", function(event) {
    if (scrolled) {
        return; // Eğer zaten kaydırma işlemi yapıldıysa, işlemi tekrarlamayı önle
    }

    // Mevcut dokunuşun x koordinatını düzelt
    var currentX = event.touches[0].clientX - startX;
    const navbarM = document.querySelector('.navbar-m');
    const htmlElement = document.querySelector("html");

    // Sola doğru kaydırma miktarını hesapla
    if (currentX < -100) {
        navbar.style.left = '-100%'; // Navbar'ı ekranın soluna taşı
        main.classList.remove("main-active");
        main.classList.add("main");
        navbarM.classList.remove("m-active");
        htmlElement.classList.remove("overflow-h");
        scrolled = true; // Kaydırma işlemi yapıldı olarak işaretle
    }
});

navbar.addEventListener('touchstart', function() {
  navbar.classList.add('overflow');
});

navbar.addEventListener('touchend', function() {
  navbar.classList.remove('overflow');
});

var divElement = document.getElementById("theme-switcher");
var bodyElement = document.querySelector("body");
var pElement = document.getElementById('p-theme');

// Div öğesine tıklama olayını ekliyoruz
divElement.addEventListener("click", function() {
    // Eğer body etiketinde "dark" sınıfı varsa, bu sınıfı kaldırıyoruz
    if (bodyElement.classList.contains("dark")) {
        bodyElement.classList.remove("dark");
        pElement.innerHTML = "Koyu mod.";
    } else {
      // Div'e "dark" sınıfını ekliyoruz
      bodyElement.classList.add("dark");
      pElement.innerHTML = "Açık mod.";
    }
});  