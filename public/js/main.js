const navbar = document.querySelector('.navbar');
const main = document.getElementById('main');
const toggleButton = document.getElementById('toggle-navbar');

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

var isKontrolEdildi = false; // Bayrak başlangıçta false olarak ayarlanır

// Sayfa yüklendiğinde veya pencere boyutu değiştiğinde bu işlevi çağırın
function kontrolEt() {
  var element = document.querySelector('.navbar'); // Elementinizi uygun bir şekilde seçin
  var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (genislik < 1240 && !isKontrolEdildi) {
    element.style.left = '-100%';
    isKontrolEdildi = true; // Bayrağı true olarak ayarlayın, böylece bir daha çalışmaz
    main.classList.remove("main-active");
    main.classList.add("main");
  } else if (genislik >= 1240) {
    element.style.left = '0';
    isKontrolEdildi = false; // Bayrağı tekrar false olarak ayarlayın, böylece sonraki boyut değişikliklerinde çalışır
    main.classList.remove("main");
    main.classList.add("main-active");
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
    
    if(genislik < 1240) {
    // Eğer tıklanan element <div> elementi değilse ve <div> elementinin içinde değilse
    if (targetElement !== navbar && !navbar.contains(targetElement) && targetElement !== header && !header.contains(targetElement)) {
        // <div> elementinin dışına tıklanmıştır, istediğiniz işlemi burada gerçekleştirebilirsiniz
        if(navbar.style.left === '0px') {
            navbar.style.left = '-100%';
            main.classList.remove("main-active");
            main.classList.add("main");
        }
      }
    }
  });

var startX = 0; // Başlangıç dokunuşunun x koordinatı
var scrolled = false; // Kaydırma işlemi yapıldı mı?

navbar.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX; // Başlangıç dokunuşunun x koordinatını kaydet
    scrolled = false; // Her dokunuş öncesi kaydırma işlemi sıfırlanır
});

navbar.addEventListener("touchmove", function(event) {
    if (scrolled) {
        return; // Eğer zaten kaydırma işlemi yapıldıysa, işlemi tekrarlamayı önle
    }

    var currentX = event.touches[0].clientX; // Mevcut dokunuşun x koordinatı

    // Sola doğru kaydırma miktarını hesapla
    var deltaX = currentX - startX;
    if (deltaX < 0) {
      if(navbar.style.left === '0px') {
          navbar.style.left = '-100%';
          main.classList.remove("main-active");
          main.classList.add("main");
      }
    }

    // Başlangıç dokunuşunun x koordinatını güncelle
    startX = currentX;
});

  
  