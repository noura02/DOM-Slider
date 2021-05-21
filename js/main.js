var close = document.querySelector('#close');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var imgs = Array.from( document.querySelectorAll('.img-fluid'));
var lightBoxContainer = document.querySelector('#lightBoxContainer');
var lightBoxItem = document.querySelector('#lightBoxItem');
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        lightBoxContainer.style.display = 'flex';
        currentIndex= imgs.indexOf(e.target);
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

    })
}


close.addEventListener('click', closeSlider)

    function closeSlider() {
        lightBoxContainer.style.display = 'none';

}

next.addEventListener('click', nextSlide)
function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0
    }
    var imgSrc =imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

prev.addEventListener('click', prevSlide)
function prevSlide() {
    currentIndex--;
    if (currentIndex<0) {
        currentIndex = imgs.length - 1
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        closeSlider()
    }
    else if (e.key == 'ArrowRight') {
        nextSlide()
    }
    else if (e.key == 'ArrowLeft') {
        prevSlide()
    }

})


