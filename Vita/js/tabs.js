(function ($) {
    $(function () {

        $('ul.tabs-caption').on('click', 'li:not(.tab-active)', function () {
            $(this)
                .addClass('tab-active').siblings().removeClass('tab-active')
                .closest('div.service-tabs').find('div.tabs-content').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
        });

    });
})(jQuery);
