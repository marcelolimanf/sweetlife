function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

$(document).ready(() => {


    document.addEventListener('scroll', (data) => {
        if(isInViewport(document.querySelector('.third_icons_container'))){
            var all = document.querySelectorAll('.third_icons_container img')

            all.forEach((item, i) => {
                setTimeout(() => {
                    item.classList.add('show-zoom')
                    item.setAttribute('style', 'opacity: 1;')
                }, i*1500)
            })
        }
        
    })
})
