( function( $ ) {

    $( window ).on("load", function () {

        // var sheet = (function () {

        //     var style = document.createElement("style");

        //     style.appendChild(document.createTextNode(""));

        //     document.head.appendChild(style);

        //     return style.sheet;

        // })();


        Start();
        window.ImagesModule.imageTipsHelper();
        loadCssFile('/css/kevalis-styles.css');
        window.FancyProductDesigner.otherFunc();

    });

    function loadCssFile(filename) {
        var fileref, filetype = filename.split('.').pop();
        if (filetype === "css") { //if filename is an external CSS file
            fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            // fileref.setAttribute("href", filename);

            fileref.setAttribute("href", 'http://localhost/wordpress/wp-content/plugins/kevalis-plugin/css/kevalis-styles.css');
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
}

    function Start() {
        'use strict';

        function addImageTipsPopup() {

            $('.fpd-content').before('<div class="img-tips-popup" >' +
                '<p>Helpful Tips Here</p> '
                + '</div>');

        }

        function addImageTips() {99
            $('.fpd-content').before(
                '<div class="img-info-link">' +
                    '<p>Image Tips</p> '
                + '</div>' );
        }

        function toggleImageTips() {
            $('div[data-module]').on('click', function () {

                if ($(this).attr("data-module") === 'images') {
                    $(".img-info-link").css('display', 'block');
                } else {
                    $(".img-info-link").css('display', 'none');
                }
            });
        }

        function addShowTipsOverlayLink() {
            $('.fpd-product-designer-wrapper').before('<div><h2 class="tips-overlay-link">How It Works</h2></div>');
        };


        window.ImagesModule.imageTipsHelper = function () {

            addImageTips();
            toggleImageTips();
            addImageTipsPopup();

        };

        window.FancyProductDesigner.otherFunc = function () {
            addShowTipsOverlayLink();
        };

    }

}) ( jQuery );





