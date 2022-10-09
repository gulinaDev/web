const swiper = new Swiper(".mySwiper", {


    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});





const btn = document.querySelector(".navbar--menu__square--block__close")
btn.addEventListener("click", () => {
    document.querySelector('.navbar--menu').style.display = 'block'
})
const close = document.querySelector(".navbar--menu__square--block__close")
btn.addEventListener("click", () => {
    document.querySelector('.navbar--menu').style.display = 'none'
})
