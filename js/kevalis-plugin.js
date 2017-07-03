( function( $ ) {

    var overlayHTML = '<div id="how-it-works-wrapper">'
                       + '<div class="closeX">✕</div>'
                       + '<div class="how-it-works-container">'
                          + '<img src="/wordpress/wp-content/plugins/kevalis-plugin/img/white-arrow-left.png">'
                             + '<h3 class="how-it-works-number-1">1</h3>'
                             + '<div style="position: absolute;left: 20px;top: 75px;min-width: 240px;">'
                                + '<p style="margin-bottom: 0;display: block;">Upload a design,<span style="margin-top: 5px;display: block;">create text, or freehand</span>'
                       + '</p></div></div></div>';

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
        window.FancyProductDesigner.overlayHelper();

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

        function toggleImageTips() {
            if($('.img-tips-popup').css('display') === 'block') {
                $('.img-tips-popup').css('display', 'none');
            } else {
                $('.img-tips-popup').css('display', 'block');
            }
        }

        function addImageTips() {
            $('.fpd-content').before(
                '<div class="img-info-link">' +
                    '<p>Image Tips</p> '
                    + '</div>' );

            $('.img-info-link').on('click', toggleImageTips);
        }


        function toggleImageTipsLink() {
            $('div[data-module]').on('click', function () {

                if ($(this).attr("data-module") === 'images') {
                    $(".img-info-link").css('display', 'block');
                } else {
                    $(".img-info-link").css('display', 'none');
                }
            });
        }

        function addTipsOverlay() {
            $('.fpd-main-wrapper').append(overlayHTML);
            $('#how-it-works-wrapper').on('click', function () {
                if ($('#how-it-works-wrapper').css('visibility') === 'visible') {
                    $('#how-it-works-wrapper').css('visibility', 'hidden');
                }
            });
        }

        function addShowTipsOverlayLink() {
            $('.fpd-product-designer-wrapper').before('<div><h1>Custon Design</h1><h2 class="tips-overlay-link">How It Works</h2></div>');
            $('.tips-overlay-link').on('click', toggleOverlay);
        };


        var toggleOverlay = function() {
            if($('#how-it-works-wrapper').css('visibility') === 'visible') {
                $('#how-it-works-wrapper').css('visibility', 'hidden');
            } else {
                $('#how-it-works-wrapper').css('visibility', 'visible');
            }
        };


        window.ImagesModule.imageTipsHelper = function () {

            addImageTips();
            toggleImageTipsLink();
            addImageTipsPopup();

        };

        window.FancyProductDesigner.overlayHelper = function () {
            addShowTipsOverlayLink();
            addTipsOverlay();
        };

    }

}) ( jQuery );





