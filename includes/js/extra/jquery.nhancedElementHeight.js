/**
 * Plugin for element height
 * http://nhance.pl
 * 2.0v
 */

function blockHeight(settings) {
    var opt = $.extend({
        target: ".table-cell",
        adjustTo: "window",
        max_height: false,
        preserve_min_height: true, // true - jezeli wyzszy - nie nadawaj wysokosci, false - zawsze nadaje wysokosc, 1000 - minimalna wysokosc
        adjustHeight: 0,
        rwd: true,
        loadMoment: "load", // load lub ready
        setTimeout: 200
    }, settings);


    function windowHeight() {
        return $(window).height();
    }

    function elemHeight() {
        return $(opt.target).height();
    }

    function adjustToHeight() {
        if (!opt.max_height) {
            if (opt.adjustTo == "window") {
                return $(window).height();
            } else {
                return $(opt.adjustTo).height();
            }
        } else {
            return opt.max_height;
        }
    }


    function set() {
        //$(opt.target).each(function () {
        $(opt.target).css("height", "");

        if (typeof opt.preserve_min_height == "number") {
            // element musi miec minimalna wysokosc
            if (elemHeight() < opt.preserve_min_height && adjustToHeight() < opt.preserve_min_height) {
                $(opt.target).height(opt.preserve_min_height + opt.adjustHeight);
            } else {
                $(opt.target).height(adjustToHeight() + opt.adjustHeight);
            }

        } else if (opt.preserve_min_height == true) {
            // jezeli element jest wyzszy niz window height - nie nadawaj mu wysokosci
            if (elemHeight() >= adjustToHeight()) {
                return false;
            } else {
                $(opt.target).height(adjustToHeight() + opt.adjustHeight)
            }

        } else {
            // element zawsze będzei tej same wysokosci co element/okno
            $(opt.target).height(adjustToHeight() + opt.adjustHeight);
        }
        //});
    }


    // WHEN TO SET HEIGHT
    if (opt.loadMoment == "load") {
        $(window).load(function () {
            setTimeout(set, opt.setTimeout);
        });
    } else {
        setTimeout(set, opt.setTimeout);
    }

    // ADJUST WHEN RESIZING WINDOW
    if (opt.rwd) {
        $(window).resize(function () {
            setTimeout(set, opt.setTimeout);
        });
    }
}