$.index = null;
$.negativeTop = null;
$.duration = null;

$.prep = function(params) {
    $.index = params.index || null;
    $.negativeTop = -65;
    $.duration = 1000;
    
    if ($.index) {
        $.root.top = $.negativeTop;
        $.index.add($.root);
    }
    else
        Ti.API.error("com.grinapps.messages: Current window not found.");
};

$.prepHandlers = function() {
};

$.show = function(params) {
    /***
        Styles: success, error, warning, info
    ***/
    var message, duration, animationDuration, style,
        topAnimation, bgColor, fontColor, persistent,
        height;
    
    topAnimation = "0%";
    if (OS_IOS)
        topAnimation = "3%";
    
    message = params.message || '';
    $.duration = params.duration || 1000;
    animationDuration = params.animationDuration || 2100;
    style = params.style || 'success';
    bgColor = params.bgColor || null;
    fontColor = params.fontColor || null;
    persistent = params.persistent || false;
    height = params.height || null;
    
    $.messageLabel.text = message;
    
    if (bgColor && fontColor) {
        $.root.backgroundColor = bgColor;
        $.messageLabel.color = fontColor;
    }
    else
        $.root.backgroundColor = $.root["data__" + style];
    
    if (height)
        $.root.height = height;
    
    $.root.visible = true;
    
    $.root.animate({
        top: topAnimation,
        duration: $.duration
    });
    
    if (!persistent)
        setTimeout(function() {
            $.root.animate({
                top: $.negativeTop,
                duration: $.duration
            }, function() {
                $.root.top = $.negativeTop;
                $.root.visible = false;
            });
        }, animationDuration);
};

$.hide = function() {
    $.root.animate({
        top: $.negativeTop,
        duration: $.duration
    }, function() {
        $.root.top = $.negativeTop;
        $.root.visible = false;
    });
};


$.prep(arguments[0] || {});
