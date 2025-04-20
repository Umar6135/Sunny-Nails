const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// const slides = document.getElementById("carouselSlides");
//     const dots = document.querySelectorAll(".dot");
//     const totalSlides = slides.children.length;
//     let currentSlide = 0;

//     const goToSlide = (index) => {
//         currentSlide = (index + totalSlides) % totalSlides;
//         slides.style.transform = `translateX(-${currentSlide * 100}%)`;

//         dots.forEach((dot, i) => {
//           if (i === currentSlide) {
//             dot.classList.remove("bg-white");
//             dot.classList.add("bg-[#FDC41F]");
//           } else {
//             dot.classList.remove("bg-[#FDC41F]");
//             dot.classList.add("bg-white");
//           }
//         });
//       };


//     document.getElementById("prevBtn").addEventListener("click", () => {
//       goToSlide(currentSlide - 1);
//     });

//     document.getElementById("nextBtn").addEventListener("click", () => {
//       goToSlide(currentSlide + 1);
//     });

//     dots.forEach((dot) => {
//       dot.addEventListener("click", () => {
//         goToSlide(Number(dot.dataset.slide));
//       });
//     });

//     // Optional Auto-play
//     setInterval(() => {
//       goToSlide(currentSlide + 1);
//     }, 5000);



$(document).ready(function () {
  const bannerCarousal = $('#carouselSlides');
  bannerCarousal.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true
  });

  bannerCarousal.owlCarousel();
  $("#nextBtn").click(function () {
    bannerCarousal.trigger("next.owl.carousel");
  });
  $("#prevBtn").click(function () {
    bannerCarousal.trigger("prev.owl.carousel");
  });
});


$(document).ready(function () {
  const talentedCarousal = $('#talented-carousal');
  talentedCarousal.owlCarousel({
    items: 3,
    loop: false,
    nav: false,
    dots: false
  });

  talentedCarousal.owlCarousel();
  $("#nextBtn").click(function () {
    talentedCarousal.trigger("next.owl.carousel");
  });
  $("#prevBtn").click(function () {
    talentedCarousal.trigger("prev.owl.carousel");
  });
});



$(document).ready(function () {
  $('.slider-wrapper').each(function () {
    const $wrapper = $(this);
    const $carousel = $wrapper.find('.talented-item-slider');

    // Init OwlCarousel
    $carousel.owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false
    });

    $wrapper.find('.slider-indicators').on('click', '.indicator', function (e) {
      e.preventDefault();
      e.stopPropagation(); // important to stop bubbling!
    
      var idx = $(this).index();
    
      // Find the closest .slider-wrapper and its carousel
      var $currentCarousel = $(this).closest('.slider-wrapper').find('.owl-carousel').first();
    
      // Trigger navigation on only this one
      $currentCarousel.trigger('to.owl.carousel', [idx, 600]);
      console.log('Clicked indicator:', idx);
console.log('Target carousel:', $currentCarousel);

    });
    
    

    // Change event to update indicators/progress bar
    $carousel.on('changed.owl.carousel', function (ev) {
      var count = ev.item.count,
        clones = ev.relatedTarget._clones.length / 2,
        realIndex = (ev.item.index - clones) % count;
      if (realIndex < 0) realIndex += count;

      const $indicators = $wrapper.find('.slider-indicators .indicator');
      $indicators.removeClass('active').eq(realIndex).addClass('active');

      const $progressBar = $wrapper.find('.progress-bar-line');
      const classList = $progressBar.attr('class') || '';
      const newClassList = classList
    .split(' ')
    .filter(cls => !cls.startsWith('before:w-'))
    .join(' ');
  $progressBar.attr('class', newClassList);

      const classMap = {
        0: 'before:w-[15%]',
        1: 'before:w-[30%]',
        2: 'before:w-[45%]',
        3: 'before:w-[60%]',
        4: 'before:w-[75%]',
        5: 'before:w-[100%]',
      };

      if (classMap[realIndex]) {
        $progressBar.addClass(classMap[realIndex]);
      }
    });
  });
});




$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 3 }
    }
  });

  owl.owlCarousel();
  $("#next-Btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $("#prev-Btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});










let tabsContainer = document.querySelector("#tabs");
let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");
    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].classList.remove("active"); tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.classList.add("active", "pill-btn");
  });
});





document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    
    body.classList.toggle('hidden');
    icon.classList.toggle('rotate-90');
    header.classList.toggle('active'); // <- Toggle 'active' class on header
  });
});
