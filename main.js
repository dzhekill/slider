let slider= document.querySelectorAll('.slider-item');
let btns = document.querySelectorAll('.slider-item__progress');
let elem = document.querySelectorAll(".slider-item__progress>div"); 
let wid = 0;
let currentSlide = 0;
let interval = 8000;
let width = 1;
let frameInterval = setInterval(frame, interval/88);
let slideInterval = setInterval(function(){
					nextSlide();
					width=1;}, interval);

for(btn of btns){
	btn.addEventListener('click', function(e) {
		nextSlide();
		clearInterval(slideInterval);
		clearInterval(frameInterval);
		width=1;
		slideInterval = setInterval(function(){
					nextSlide();
					width=1;}, interval);
		frameInterval = setInterval(frame, interval/88);
	});
}

function nextSlide() {
	slider[currentSlide].style.transform = 'translateX('+-wid+'vw)';
	currentSlide = (currentSlide+1)%slider.length;
	wid = currentSlide * 100;
	slider[currentSlide].style.transform = 'translateX('+-wid+'vw)';
	if(currentSlide===0){
		for(let i=1;i<slider.length;i++){
			slider[i].style.transform = 'translateX('+(i*100)+'vw)';
		}
	}
	
}

function frame() {
	if (width >= 100) {
		clearInterval(frameInterval);
		width=1;
	} else {
		width++; 
		for(el of elem){
			el.style.width = width + '%'; 
		}
	}
}




