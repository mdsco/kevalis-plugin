( function( $ ) {

    var overlayHTML = '<div id="how-it-works-wrapper">'
                        + '<div class="closeX">✕</div>'
                        + '<div class="how-it-works-container">'
                          + '<img src="/wordpress/wp-content/plugins/kevalis-plugin/img/white-arrow-left.png">'
                          + '<div class="instruction-1-container">'
                            + '<h3 class="how-it-works-number-1">1</h3>'
                            + '<p class="instructions-text">Upload a design,'
                                + '<span class="instructions-text-line-2">create text, or freehand</span>'
                            + '</p>'
                          + '</div>'
                        + '</div>'
                          + '<div class="instruction-2-container">'
                            + '<div class="instructions-text-wrapper">'
                              + '<img src="/wordpress/wp-content/plugins/kevalis-plugin/img/white-arrow-right.png">'
                              + '<h3 class="how-it-works-number-2">2</h3>'
                              + '<p class="instructions-text">Manage layers, undo,'
                                + '<span> save and more</span>'
                              + '</p>'
                          + '</div>'
                        + '</div>'
                        + '<div class="quick-tips-wrapper">'
                          + '<p class="text-top">Quick tips</p>'
                          + '<p>to get started</p>'
                        + '</div>'
                    + '</div>';

    $( window ).on("load", function () {

        Start();
        window.ImagesModule.imageTipsHelper();
        loadCssFile('/css/kevalis-styles.css');
        window.FancyProductDesigner.overlayHelper();

    });

    function loadCssFile(filename) {
        var fileref, filetype = filename.split('.').pop();
        if (filetype === "css") { 
            fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", 'http://localhost/wordpress/wp-content/plugins/kevalis-plugin/css/kevalis-styles.css');
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
}

    function Start() {
        'use strict';

        function addImageTipsPopup() {

            $('.fpd-content').after('<div id="tips-popup">' +
                '<p>Helpful Text Tips Here</p> '
                + '<div class="closeX">✕</div>'
                + '</div>');

            $('#tips-popup > .closeX').on('click', toggleImageTips);

        }

        function toggleImageTips() {

            // update content on popup for the tab
            updateTipsPopupContent();

            if($('#tips-popup').css('display') === 'block') {
                $('#tips-popup').css('display', 'none');
            } else {
                $('#tips-popup').css('display', 'block');
            }
        }

        function addImageTips() {
            $('.fpd-content').before(
                '<div class="img-info-link">'
                    + '<p class="tips-link">Text Tips</p>'
                    + '</div>'
            );

            $('.img-info-link').on('click', toggleImageTips);
        }

        function updateTipsLinkText() {
            $('div[data-module]').on('click', function () {
                var module = $(this).attr("data-module");
                if ( module === 'images') {
                    $(".tips-link").text('Image Tips');
                } else if (module === "text") {
                    $(".tips-link").text('Text Tips');
                } else if (module === "designs") {
                    $(".tips-link").text('Custom Design Tips');
                } else if (module === "names-numbers") {
                    $(".tips-link").text('Names & names-numbers Tips');
                } else if (module === "drawing") {
                    $(".tips-link").text('Drawing Tips');
                }
            });
        }

        function setPopupContent(module) {
            if (module === 'images') {
                $("#tips-popup p").text('Helpful Image Tips');
            } else if (module === "text") {
                $("#tips-popup p").text('Helpful Text Tips');
            } else if (module === "designs") {
                $("#tips-popup p").text('Helpful Custom Design Tips');
            } else if (module === "names-numbers") {
                $("#tips-popup p").text('Helpful Names & names-numbers Tips');
            } else if (module === "drawing") {
                $("#tips-popup p").text('Helpful Drawing Tips');
            }
        }

        function updateTipsPopupContent() {
            $('div[data-module]').on('click', function () {
                var module = $(this).attr("data-module");
                setPopupContent(module);
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

        var toggleOverlay = function () {
            if($('#how-it-works-wrapper').css('visibility') === 'visible') {
                $('#how-it-works-wrapper').css('visibility', 'hidden');
            } else {
                $('#how-it-works-wrapper').css('visibility', 'visible');
            }
        };

        function addShowTipsOverlayLink() {
            $('.fpd-product-designer-wrapper').before('<div>'
                + '<h1>Custom Design</h1><h2 class="tips-overlay-link">How It Works</h2>'
                + '</div>');
            $('.tips-overlay-link').on('click', toggleOverlay);
        };

        window.ImagesModule.imageTipsHelper = function () {
            addImageTips();
            updateTipsLinkText();
            addImageTipsPopup();
        };

        window.FancyProductDesigner.overlayHelper = function () {
            addShowTipsOverlayLink();
            addTipsOverlay();
        };

    }

}) ( jQuery );