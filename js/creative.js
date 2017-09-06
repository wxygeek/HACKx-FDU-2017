(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    var timeIntervalTime = 150;
    var displayTime = 700;

    // HACK x with different words
    var words = ['FDU', 'Business', 'Finance', 'Art', 'Health', 'China', 'Ideas', 'Geek', 'Design'];
    var currentWordIndex = 0;
    var currentWordSubstrLen = 4;
    var isFinished = true;
    var timeInterval = timeIntervalTime;

    function flushContent () {
        if(isFinished) {
            timeInterval = timeIntervalTime;
            currentWordSubstrLen--;
            if(currentWordSubstrLen < 0) {
                //展示新词
                currentWordIndex++;
                currentWordIndex = currentWordIndex < words.length ? currentWordIndex : 0;
                currentWordSubstrLen = 1;
                isFinished = false;
            }
        } else {
            currentWordSubstrLen++;
            timeInterval = timeIntervalTime;
            if(currentWordSubstrLen === words[currentWordIndex].length) {
                isFinished = true;
                timeInterval = displayTime;
            }
        }
        var text = words[currentWordIndex].substr(0, currentWordSubstrLen);
        if(currentWordSubstrLen === 0) {
            // text = '<br>';
            text = (window.screen.width < 768 ? '<br>' : '');
        }
        $('#hackx_header_content').html(text);
        setTimeout(flushContent, timeInterval);
    }
    setTimeout(flushContent, displayTime);

})(jQuery); // End of use strict
