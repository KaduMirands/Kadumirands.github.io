document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.remove('hidden');
    }, 300); 
    setTimeout(function() {
        const banners = document.querySelector('.banners');
        if (banners) {
            banners.classList.remove('hidden1');
        }
    }, 2000);
});