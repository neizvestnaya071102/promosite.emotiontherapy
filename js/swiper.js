const swiper = new Swiper('.swiper-container', {
    loop: true,
    initialSlide: 4
})

const next = document.querySelector('.swiper-arrow-next')

next.addEventListener('click', ()=>{
    swiper.slideNext();
})

const prev = document.querySelector('.swiper-arrow-prev')

prev.addEventListener('click', ()=>{
    swiper.slidePrev();
})