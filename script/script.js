(function () {
    let z = document.querySelectorAll('.burger');
   for(let square of z){

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('burger3-animation');
            }
        });
    });
    observer.observe(square);
   }
})();