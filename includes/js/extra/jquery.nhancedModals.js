/**
 * Plugin for modals
 * http://nhance.pl
 * 1.0v
 */

function modalWindows(options) {
    var defaults = {
        target: ".modal",
        trigger: "[data-toggle-modal]",
        defaultOpen: false,
        bodyClass: "modal-open",
        "nh_modalShow": function () {
        },
        "nh_modalHide": function () {
        },
        "nh_modalTriggerClick": function () {
        }
    };

    var opt = $.extend(true, {}, defaults, options);


    // SHOW
    function showModal() {
        $(opt.target).modal("show");
        if (opt.bodyClass) {
            $(opt.target).on("show.bs.modal", function (e) {
                $("body").addClass(opt.bodyClass);

            });
        }
        opt.nh_modalShow.call(opt);
    }

    // HIDE
    function hideModal() {
        $(opt.target).modal("hide");
        if (opt.bodyClass) {
            $(opt.target).on("hidden.bs.modal", function (e) {
                $("body").removeClass(opt.bodyClass);
            });
        }
        opt.nh_modalHide.call(opt);
    }


    // TRIGGER FUNCTION
    function trigger() {
        $(opt.trigger).click(function (e) {
            e.preventDefault();
            showModal();
            opt.nh_modalTriggerClick.call(opt);
        });

    }

    // DEFAULT
    function defaultOpen() {
        if (opt.defaultOpen) {
            showModal();
        }
    }

////////////////////////////////////////////////////
////////////////////////////////////////////////////
    // INIT
    defaultOpen();
    trigger();
    if (opt.bodyClass) {
        $(opt.target).on("hidden.bs.modal", function (e) {
            $("body").removeClass(opt.bodyClass);
        });
    }

}