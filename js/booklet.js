const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    observer:true,
    slidesPerView:1,
    centeredSledes: true,
    resizeObserver: true,
    //setWrapperSize: true


})

const next = document.querySelector('.swiper-arrow-next')

next.addEventListener('click', ()=>{
    swiper.slideNext();
    swiper.update()
    if (swiper.activeIndex == 0){
        document.querySelector('.booklet__content').classList.add('thin')
        document.querySelector('.booklet__wrapper').classList.add('thin')
        // swiper.updateSize()
    } else {
        document.querySelector('.booklet__content').classList.remove('thin')
        document.querySelector('.booklet__wrapper').classList.remove('thin')
        // swiper.updateSize()
    }
})

const prev = document.querySelector('.swiper-arrow-prev')

prev.addEventListener('click', ()=>{
    swiper.slidePrev();
    swiper.update()
    if (swiper.activeIndex == 0){
        document.querySelector('.booklet__content').classList.add('thin')
        document.querySelector('.booklet__wrapper').classList.add('thin')
        // swiper.updateSize()
    } else {
        document.querySelector('.booklet__content').classList.remove('thin')
        document.querySelector('.booklet__wrapper').classList.remove('thin')
        // swiper.updateSize()
    }
})

