let btnLeft = document.querySelector('.btn_left')
let btnRight = document.querySelector('.btn_right')
let slideImgs = document.querySelectorAll('.slide_img')
let slideDots = document.querySelectorAll('.slide_dot')
let deeper = document.querySelector('.menu_left>ul>.deeper')
let ul = document.querySelector('.menu_left>ul>.deeper>ul')

slideImgs[0].classList.add('active')
slideDots[0].classList.add('active')
let count = 0;
btnLeft.addEventListener('click', function () {
    count --;
    if(count < 0) {
        count = slideImgs.length - 1;
    }
    for(let i = 0; i < slideImgs.length; i++) {
        slideImgs[i].classList.remove('active')
        slideDots[i].classList.remove('active')
    }
    slideDots[count].classList.add('active')
    slideImgs[count].classList.add('active')
})
btnRight.addEventListener('click', function () {
    count ++;
    if(count > slideImgs.length -1) {
        count = 0;
    }
    for(let i = 0; i < slideImgs.length; i++) {
        slideImgs[i].classList.remove('active')
        slideDots[i].classList.remove('active')
    }
    slideImgs[count].classList.add('active')
    slideDots[count].classList.add('active')
})
slideDots.forEach((ele,index) => {
    ele.addEventListener('click', function() {
        for(let i = 0; i < slideDots.length; i++) {
            slideDots[i].classList.remove('active')
            slideImgs[i].classList.remove('active')
        }
        this.classList.add('active')
        slideImgs[index].classList.add('active')
        count = index;
    })
})

deeper.addEventListener('click', function() {
    ul.classList.toggle('active')
})