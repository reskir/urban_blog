(function() {
    var header = document.querySelector('.header'),
        btn = document.querySelector('.toggle-nav'),
        menu = document.querySelector('#nav-icon1'),
        content = document.querySelector('.content'),
        banner = document.querySelector('.marketing-banner');

    btn.addEventListener('click', function() {
        menu.classList.toggle('open');
        header.classList.toggle('active');
    });

    var scrollPos = 100;

    window.addEventListener('scroll', _.throttle(function(e) {
        if (window.scrollY > scrollPos) {
            header.classList.add('hidden');
            scrollPos = window.scrollY;
        } else if (window.scrollY === 0 ) {
            header.classList.remove('hidden');
        } else if (window.scrollY < scrollPos && window.scrollY > 100) {
            header.classList.remove('hidden');
            scrollPos = window.scrollY;
        }
    }, 300));

})();