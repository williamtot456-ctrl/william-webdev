function initLightbox() {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

window.onload = initLightbox;
