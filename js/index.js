const rangeslDay = document.getElementById("rangesl-day");
const rangeslCounts = document.getElementById("rangesl-counts");
const rangeslMounth = document.getElementById("rangesl-mounth");
const calculateOut = document.querySelector(".calculate__out span");

let dayNumber = 0;
let mountNumber = 0;
let countsNumber = 0;

noUiSlider.create(rangeslDay, {
	start: [30],
	range: {
		min: 1,
		max: 100,
	},
});
noUiSlider.create(rangeslCounts, {
	start: [30],
	range: {
		min: 1,
		max: 10,
	},
});
noUiSlider.create(rangeslMounth, {
	start: [30],
	range: {
		min: 1,
		max: 12,
	},
});

rangeslDay.noUiSlider.on("update", function (values, handle) {
	dayNumber = +Math.floor(values[handle]);
	calculateOut.innerHTML = Math.floor(dayNumber * 4.55 * mountNumber * 30 * countsNumber);
	rangeslDay
		.querySelector(".noUi-handle")
		.setAttribute("data-count", Math.floor(values[handle]));
});
rangeslCounts.noUiSlider.on("update", function (values, handle) {
	countsNumber = +Math.floor(values[handle]);
	calculateOut.innerHTML = Math.floor(dayNumber * 4.55 * mountNumber * 30 * countsNumber);
	rangeslCounts
		.querySelector(".noUi-handle")
		.setAttribute("data-count", Math.floor(values[handle]));
});
rangeslMounth.noUiSlider.on("update", function (values, handle) {
	mountNumber = +Math.floor(values[handle]);
	calculateOut.innerHTML = Math.floor(dayNumber * 4.55 * mountNumber * 30 * countsNumber);
	rangeslMounth
		.querySelector(".noUi-handle")
		.setAttribute("data-count", Math.floor(values[handle]));
});

const links = document.querySelectorAll("[data-goto-section]");
const header = document.querySelector(".fixed");

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		if (link.dataset.gotoSection) {
			e.preventDefault();
			const section = document.querySelector(e.target.dataset.gotoSection);
			const sectionTop = header
				? section.getBoundingClientRect().top - header.offsetHeight
				: section.getBoundingClientRect().top;

			if (document.querySelector(".menu__icon")?.classList.contains("menu__icon--lock")) {
				document.body.classList.remove("page__body--lock");
				const iconMenu = document
					.querySelector(".menu__icon")
					.classList.remove("menu__icon--active");
				const menuBody = document
					.querySelector(".menu__body")
					.classList.remove("menu__body--active");
			}

			window.scrollBy({
				top: sectionTop,
				behavior: "smooth",
			});
		}
	});
});
