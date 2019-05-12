$(document).ready(function () {

    $('#learn-more').click(function () {
        $('html, body').animate({
            scrollTop: $('#abt-section').offset().top
        }, 1000);
    })

    var btn = $('#scroll-top-btn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $('#send-email').click(() => {
        var template_params = {
            "from_name": $('#from-name').val(),
            "from_email": $('#from-email').val(),
            "message_html": $('#from-msg').val()
        }
        var service_id = "gmail";
        var template_id = "template_xHYgEs7V";
        emailjs.send(service_id, template_id, template_params);
    })

});
