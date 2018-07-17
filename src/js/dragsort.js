(function($, w, doc, u){
    function DragSort(el, options) {
        var opts = {
            dragSelector: null,
            dragSelectorExclude: null,
            dragEnd: null,
            placeHolderTemplate: '<li></li>'
        };

        $.extend({}, opts, options);
    }

    $.fn.dragSort = function(options) {
        return this.each(function(){
            if(!$(this).data('dragSort')) {
                var api = new DragSort(this, options);
                $(this).data('dragSort', api);
            }
        })
    }
})(jQuery, window, document);