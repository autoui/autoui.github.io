// 单选/复选框
$(document).on('click', '.radio', function(e){
    e.preventDefault ? e.preventDefault() : e.returnValue = false ;
    var filterName = $(this).children(':radio').attr('name');
    if($(this).is('.disabled')) {
        return false;
    } else {
        $(':radio[name="' + filterName + '"]').prop('checked',false).parent('.radio').removeClass('checked');
        $(this).addClass('checked').children(':radio').prop('checked',true);
    }
});

$(document).on('click', '.checkbox', function(e){
    e.preventDefault ? e.preventDefault() : e.returnValue = false ;

    if($(this).is('.disabled')) {
        return false;
    } else {
        $(this).toggleClass('checked').children(':checkbox').prop('checked',!!$(this).is('.checked'));
        var myFn = $.trim($(this).attr('data-fn'));
        if(myFn && typeof window.myFn == 'function') {
            window.myFn.call(this);
        }
    }
});