const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides.length)

//VARIABLES
let currentSlideIndex = 0
let arrowLeft = document.querySelector("#banner .arrow_left")
let arrowRight = document.querySelector("#banner .arrow_right")
let slideImage = document.querySelector(".banner-img")
let textslideImage = document.querySelector("#banner p")
let dotsContainer = document.querySelector(".dots")
let slideIndex = 0
console.log(currentSlideIndex)


//FUNCTIONS
function createDots () {
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div")
		dot.classList.add("dot")
		dotsContainer.appendChild(dot)
	}	
}
createDots()

let dotsList = document.querySelectorAll(".dots .dot")	

function createActiveDot () {
	let activeDot = dotsList[slideIndex]
	activeDot.classList.add("dot_selected")
}
createActiveDot()

function changeSlide () {
	slideImage.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlideIndex].image)
	textslideImage.innerHTML = slides[currentSlideIndex].tagLine
}

function updateActiveDotRight () {	
	activeDot = dotsList[currentSlideIndex]
	activeDot.classList.add("dot_selected")
	dotsList[currentSlideIndex - 1].classList.remove("dot_selected")
}

function updateActiveDotLeft () {	
	activeDot = dotsList[currentSlideIndex]
	activeDot.classList.add("dot_selected")
	dotsList[currentSlideIndex + 1].classList.remove("dot_selected")
}

function  nextSlide () {
	arrowRight.addEventListener("click", () => 
		{	if (currentSlideIndex >= slides.length-1) {
				currentSlideIndex = 0
				changeSlide()
				activeDot = dotsList[0]
				activeDot.classList.add("dot_selected")
				dotsList[slides.length-1].classList.remove("dot_selected")
			}
			else {
				currentSlideIndex++	
				console.log(currentSlideIndex)
				changeSlide()
				updateActiveDotRight()
			}	
		}	
	)							
}
nextSlide()

function previousSlide () {
	arrowLeft.addEventListener("click", () => 
		{	if (currentSlideIndex <= 0) {
				currentSlideIndex = slides.length - 1
				changeSlide()
				activeDot = dotsList[slides.length-1]
				activeDot.classList.add("dot_selected")
				dotsList[0].classList.remove("dot_selected")
			}
			else {
				currentSlideIndex--
				console.log(currentSlideIndex)
				changeSlide()
				updateActiveDotLeft()
			}
		}
	)
}
previousSlide()



//EVENTS
arrowLeft.addEventListener("click", () => 
	{console.log("Click on left arrow")
	}
)

arrowRight.addEventListener("click", () => 
	{console.log("Click on right arrow")
	}
)











