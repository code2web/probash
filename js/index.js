/*	for mobile menu*/
const mobileNav = document.querySelector(".mobileNavberBtn");
const headerElem = document.querySelector(".mobileNavbarDisplay");
// const headerElem = document.querySelector(".header");
mobileNav.addEventListener("click", () => {
	headerElem.classList.toggle("active");
});

const headerElemEach = document.querySelectorAll(".linkNavDiv");
headerElemEach.forEach((elem) => {
	elem.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");		
	});
});
/*	for mobile menu*/
