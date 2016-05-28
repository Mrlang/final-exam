(function () {
        function Carousel (doc, containerCN, imgBoxCN, focuseCN, addFocuseCN, offsets, time) {
        var container = doc.querySelector('.' + containerCN),
            imgBox = doc.querySelector('.' + imgBoxCN),
            focuse = doc.querySelectorAll('.' + focuseCN),
            len = focuse.length - 1,
            index = 0,
            timer;
        function switchPics (offset) {
            var newPos = parseInt(imgBox.style.left) + offset;
            imgBox.style.left = newPos + 'px';
            if (newPos < -offsets * len) {
                imgBox.style.left = '0px';
            }
            if (newPos > 0) {
                imgBox.style.left = '0px';
            }
        }
        function showFocuse () {
            for (var i = 0; i < focuse.length; i++) {
                focuse[i].className = focuseCN;
            }
            if (index > len) {
                index = 0;
            }
            if (index < 0) {
                index = len;
            }
            focuse[index].className += addFocuseCN;
        }
        (function () {
            for (var i = 0; i < focuse.length; i++) {
                focuse[i].addEventListener('click', (function (n) {
                    return function () {
                        var offset = (n - index) * -offsets;
                        switchPics(offset);
                        index = n;
                        showFocuse();
                    }
                })(i))
            }
        })()
        function playCarousel () {
            function click () {
                index += 1;
                switchPics(-offsets);
                showFocuse();
            }
            timer = setInterval(click, time);
        }
        playCarousel();
        function stopCarousel () {
            clearInterval(timer);
        }
        container.addEventListener('mouseover', stopCarousel);
        container.addEventListener('mouseout', playCarousel);
    }
    Carousel(document, 'news-carousel', 'news-imgBox', 'newsFocused', ' active', 581, 3000);
    Carousel(document, 'ori-carousel', 'ori-imgBox', 'ori-focuse-item', ' active', 581, 3000);
    Carousel(document, 'market-carousel', 'market-imgBox', 'news-focuse-item', ' active', 581, 3000);
    var arrow = document.querySelector('.slideBar-backTo');
    arrow.addEventListener('click', function () {
        document.body.scrollTop = 0;
    })
})();