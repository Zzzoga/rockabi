let i = 1
const mainCatArr = document.querySelectorAll('.collection__cat__slider__item__img')
mainCatArr.forEach(item => {
	item.classList.add(`item__${i++}`)
})

for (let j = 1; j <= i; j++) {
	var mainCats = new Swiper(`.collection__cat__slider__item__img.item__${j} .swiper`, {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		freeMode: false,
		pagination: {
			el: `.collection__cat__slider__item__img.item__${j} .collection__cat__slider__item__img__nav`,
			clickable: true,
		}
	});
}

let n = 1
const pageCatArr = document.querySelectorAll('.catalog__item__img')
pageCatArr.forEach(item => {
	item.classList.add(`item__${n++}`)
})

for (let m = 1; m <= n; m++) {
	var pageCats = new Swiper(`.catalog__item__img.item__${m} .swiper`, {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		freeMode: false,
		pagination: {
			el: `.catalog__item__img.item__${m} .catalog__item__img__nav`,
			clickable: true,
		}
	});
}

var newsSlider = new Swiper(".collection__cat__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 12,
	loop: true,
	freeMode: false,
	// pagination: {
	// 	el: ".news__nav",
	// 	clickable: true,
	// },
	// navigation: {
	// 	nextEl: "section.news .arrow.next",
	// 	prevEl: "section.news .arrow.prev",
	// },
	breakpoints: {
        768: {
			slidesPerView: 2,
			spaceBetween: 12,
        },
        992: {
			slidesPerView: 3,
			spaceBetween: 10,
        },
        1440: {
			slidesPerView: 4,
			spaceBetween: 10,
        },
    },
});

var productSlider = new Swiper(".product__detail__img__slider .swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	// pagination: {
	// 	el: ".news__nav",
	// 	clickable: true,
	// },
	navigation: {
		nextEl: ".product__detail__img__slider .arrow.next",
		prevEl: ".product__detail__img__slider .arrow.prev",
	},
});


