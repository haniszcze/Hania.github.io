/**
 * Plugin for collapsing elements
 * http://nhance.pl
 * 1v beta
 */
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}
function windowsPhone8_support() {
    // wsparcie starszych windows phone 8
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
                document.createTextNode(
                        "@-ms-viewport{width:auto!important}"
                        )
                );
        document.getElementsByTagName("head")[0].
                appendChild(msViewportStyle);
    }
}

function helpers() {
    windowsPhone8_support();
    if (detectIE()) {
        $("html").addClass("ie ie-" + detectIE());
    }
//detect mobile
    console.log("is mobile? " + navigator.userAgent.match(/Mobi/));
    if (navigator.userAgent.match(/Mobi/)) {
        $("html").addClass("user-agent-mobile");
    }
}

