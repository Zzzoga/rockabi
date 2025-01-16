// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// TEXT INPUT VALIDATE
	document.querySelectorAll('input[name="name"]').forEach(input => {
		input.addEventListener('keydown', function(e){
		  if( e.key.match(/[0-9]/) ) return e.preventDefault();
		}); 
		
		input.addEventListener('input', function(e){
		  input.value = input.value.replace(/[0-9]/g, "");
		});
	})

	// MODAL NAV
	// document.querySelector('.burger').addEventListener('click', e => {
	// 	e.preventDefault()
	// 	if (!e.target.closest('.burger').classList.contains('active')) {
	// 		e.target.closest('.burger').classList.add('active')
	// 		document.querySelector('.modal__nav').classList.add('active')
	// 		document.querySelector('body').classList.add('hidden')
	// 		document.querySelector('header').classList.add('nav__active')
	// 	} else {
	// 		e.target.closest('.burger').classList.remove('active')
	// 		document.querySelector('.modal__nav').classList.remove('active')
	// 		document.querySelector('body').classList.remove('hidden')
	// 		document.querySelector('header').classList.remove('nav__active')
	// 	}
	// })

	// document.querySelectorAll('nav.modal__menu ul li a.nav__link').forEach(link => {
	// 	link.addEventListener('click', e => {
	// 		document.querySelector('.burger').classList.remove('active')
	// 		document.querySelector('.modal__nav').classList.remove('active')
	// 		document.querySelector('body').classList.remove('hidden')
	// 		document.querySelector('header').classList.remove('nav__active')
	// 	})
	// })

	// FIXED HEADER ON SCROLL
	document.addEventListener('scroll', e => {
		if(!document.querySelector('header').classList.contains('custom')) {
			if (this.pageYOffset > 10) {
				document.querySelector('header').classList.add('fixed')
			} else {
				document.querySelector('header').classList.remove('fixed')
			}
		}
	})
	
	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	// ACCORDEON FUNC
	if (document.querySelector('.accordeon__header') != null) {
		document.querySelectorAll('.accordeon.size').forEach(item => {
			item.classList.add('active')
			item.querySelector('.accordeon__body').style.height = item.querySelector('.accordeon__body__inner').clientHeight + 'px'
		})

		document.querySelectorAll('.accordeon__list .accordeon:nth-child(1)').forEach(item => {
			item.classList.add('active')
			item.querySelector('.accordeon__body').style.height = item.querySelector('.accordeon__body__inner').clientHeight + 'px'
		})
		
		document.querySelectorAll('.accordeon__header').forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.closest('.accordeon').classList.contains('active')) {
					e.target.closest('.accordeon__list').querySelectorAll('.accordeon').forEach(item => {
						item.classList.remove('active')
						item.querySelector('.accordeon__body').style.height = '0px'
					})
					e.target.closest('.accordeon').classList.add('active')
					e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = e.target.closest('.accordeon').querySelector('.accordeon__body__inner').clientHeight + 'px'
				} else {
					e.target.closest('.accordeon').classList.remove('active')
					e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = '0px'
				}
			})
		})
	}

	if (document.querySelector('p.lookbooks__headers__item') != null) {
		document.querySelectorAll('p.lookbooks__headers__item').forEach(item => {
			item.addEventListener('click', e => {
				document.querySelector('p.lookbooks__headers__item.active').classList.remove('active')
				document.querySelector('.lookbooks__body__item.active').classList.remove('active')
		
				e.target.classList.add('active')
				document.querySelector(`.lookbooks__body__item[data-look="${e.target.dataset.look}"`).classList.add('active')
			})
		})

		document.querySelectorAll('.look').forEach(item => {
			item.addEventListener('click', e => {
				document.querySelector('.lookbooks__body__list').classList.add('disabled')
				document.querySelector('.lookbooks__body__detail').classList.add('active')
			})
		})

		document.querySelector('.lookbooks__body__detail__close').addEventListener('click', e => {
			document.querySelector('.lookbooks__body__list').classList.remove('disabled')
			document.querySelector('.lookbooks__body__detail').classList.remove('active')
		})
	}

	if (document.querySelector('button.btn.black.yes') != null) {
		document.querySelector('button.btn.black.yes').addEventListener('click', e => {
			document.querySelector('.city').classList.add('disabled')
		})
		
		document.querySelector('button.btn.white.no').addEventListener('click', e => {
			document.querySelector('.city').classList.add('disabled')
		})
	}
	
	if (document.querySelector('.auth__wrapper form') != null) {
		document.querySelectorAll('a.form__link').forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				document.querySelectorAll('.auth__wrapper form').forEach(form => form.classList.add('disabled'))
				document.querySelector(`.auth__wrapper form[data-form="${e.target.dataset.form}"]`).classList.remove('disabled')
				document.querySelectorAll('a.form__link').forEach(link => link.classList.remove('active'))
				e.target.classList.add('active')
			})
		})
		
	}

	if (document.querySelector('.cart__step') != null) {
		document.querySelectorAll('.cart__step a.form__link').forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				e.target.closest('.accordeon__body').style.height = e.target.closest('.accordeon__body').querySelector('.accordeon__body__inner').clientHeight + 'px'
			})
		})
	}

	if (document.querySelector('a.favorite__btn') != null) {
		document.querySelectorAll('a.favorite__btn').forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				if (e.target.closest('a').classList.contains('active')) {
					e.target.closest('a').classList.remove('active')
				} else {
					e.target.closest('a').classList.add('active')
				}
			})
		})
	}

	if (document.querySelector('.cart__delivery__address__select__input') != null) {
		document.querySelectorAll('.cart__delivery__address__select__input').forEach(input => {
			input.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.closest('.cart__delivery__address__select__input').classList.contains('active')) {
					e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__options').style.height = e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__list').clientHeight + 1 + 'px'
					e.target.closest('.cart__delivery__address__select__input').classList.add('active')
					setTimeout(() => {
						e.target.closest('.accordeon__body').style.height = e.target.closest('.accordeon__body').querySelector('.accordeon__body__inner').clientHeight + 'px'
					}, 500)
				} else {
					e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__options').style.height = '0px'
					e.target.closest('.cart__delivery__address__select__input').classList.remove('active')
					setTimeout(() => {
						e.target.closest('.accordeon__body').style.height = e.target.closest('.accordeon__body').querySelector('.accordeon__body__inner').clientHeight + 'px'
					}, 500)
				}
			})
		})
		
		document.querySelectorAll('span.cart__delivery__address__select__option').forEach(option => {
			option.addEventListener('click', e => {
				e.preventDefault()
				e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__options').style.height = '0px'
				e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__input .current__address').innerHTML = e.target.innerHTML
				e.target.closest('.cart__delivery__address').querySelector('.cart__delivery__address__select__input').classList.remove('active')
				setTimeout(() => {
					e.target.closest('.accordeon__body').style.height = e.target.closest('.accordeon__body').querySelector('.accordeon__body__inner').clientHeight + 'px'
				}, 500)
			})
		})
	}

	if (document.querySelector('.catalog__filter') != null) {
		document.querySelector('.catalog__filter__wrapper__btn').addEventListener('click', e => {
			e.preventDefault()
			if (!document.querySelector('.catalog__filter').classList.contains('active')) {
				document.querySelector('.catalog__filter').classList.add('active')
			} else {
				document.querySelector('.catalog__filter').classList.remove('active')
			}
		})
	}
	
	

	// SHOW/HIDE MODAL
	function showModal(item, modal) {
		document.querySelectorAll(item).forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.add('active')
				document.querySelector('body').classList.add('hidden')
			})
		})
	}

	function hideModal(item, modal) {
		document.querySelectorAll(item).forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.remove('active')
				document.querySelector('body').classList.remove('hidden')
			})
		})
	}
	
	showModal('.vacancy__btn', '.modal__call')
	hideModal('.modal__call .modal__close', '.modal__call')
	hideModal('.modal__call .modal__overlay', '.modal__call')

	// showModal('a.control__link.cart', '.modal__cart')
	// hideModal('.modal__cart .modal__close', '.modal__cart')
	// hideModal('.modal__cart .modal__overlay', '.modal__cart')

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// ACCORDEON FUNC
	// if (document.querySelector('.accordeon__header') != null) {
	// 	document.querySelectorAll('.city__list .accordeon:nth-child(1)').forEach(item => {
	// 		item.classList.add('active')
	// 		item.querySelector('.accordeon__body').style.height = item.querySelector('.accordeon__body__inner').clientHeight + 'px'
	// 	})
		
	// 	document.querySelectorAll('.accordeon__header').forEach(item => {
	// 		item.addEventListener('click', e => {
	// 			e.preventDefault()
	// 			if (!e.target.closest('.accordeon').classList.contains('active')) {
	// 				e.target.closest('.city__list').querySelectorAll('.accordeon').forEach(item => {
	// 					item.classList.remove('active')
	// 					item.querySelector('.accordeon__body').style.height = '0px'
	// 				})
	// 				e.target.closest('.accordeon').classList.add('active')
	// 				e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = e.target.closest('.accordeon').querySelector('.accordeon__body__inner').clientHeight + 'px'
	// 			} else {
	// 				e.target.closest('.accordeon').classList.remove('active')
	// 				e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = '0px'
	// 			}
	// 		})
	// 	})
	// }


})


