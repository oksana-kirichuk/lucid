$.fn.tabPlugin = function(options) {
    var param = $.extend({
        'animationSpeed': 300,
        'transitionFunction': 'linear',
        'dataSelector': 'data-tab'
    }, options);

    var $selector = this;

    $selector.find('.tab-content').css('transition', 'all ' + param.animationSpeed + 'ms ' + param.transitionFunction);

    function tabController(target) {
        $selector.find('.tab').removeClass('active');
        $selector.find('.tab-content').removeClass('active');
        $selector.find('.tab[data-tab="' + target + '"]').addClass('active');
        $selector.find('.tab-content' + target).addClass('active');
    }

    $selector.find('[' + param.dataSelector + ']').click(function() {
        var target = $(this).attr(param.dataSelector);
        tabController(target);
    })
}
