(function ($) {
    $.fn.datepicker = function (options) {
        var defaults = {
            allowInputToggle: true,
            calendarWeeks: true,
            dayViewHeaderFormat: 'MMM YYYY',
            format: 'MM/DD/YYYY',
            showTodayButton: true,
            ignoreReadonly: true
        };

        $.extend(defaults, options);
        return this.datetimepicker(defaults);
    };
}(jQuery));