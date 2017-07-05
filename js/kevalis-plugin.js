( function( $ ) {

    var tipsOverlayHTML = '<div id="instructions-wrapper">'
                        + '<div class="closeX">✕</div>'
                        + '<div class="instruction-1-container">'
                          + '<img src="/wordpress/wp-content/plugins/kevalis-plugin/img/white-arrow-left.png">'
                          + '<div class="instruction-1">'
                            + '<h3 class="instructions-number-1">1</h3>'
                            + '<p class="instructions-text">Upload a design,'
                                + '<span class="instructions-text-line-2">create text, or freehand</span>'
                            + '</p>'
                          + '</div>'
                        + '</div>'
                          + '<div class="instruction-2-container">'
                            + '<div class="instructions-2-text-wrapper">'
                              + '<img src="/wordpress/wp-content/plugins/kevalis-plugin/img/white-arrow-right.png">'
                              + '<h3 class="instructions-number-2">2</h3>'
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

    var medicalTermsButton = '<button class="medical-terms-button">Medical Terms</button>';

    var medicalTermsOverlay = '<div class="overlay"></div>';

    var medicalTermsModal = '<div class="modal">'
        + ' <div class="modal-dialog">'
            + ' <div class="modal-header">'
                + '<h4>Medical Terms &amp; Abbreviations</h4>'
                + '<span class="close">+</span>'
            + ' </div>'
            + ' <div class="modal-content-block">'
               + ' <div class="modal-body">'
                   + ' <div class="container-fluid">'
                       + ' <div class="row"><div class="medical-title">'
                                + '<strong>Medical Term</strong>'
                           + '</div>'
                           + ' <div class="abbrev-title">'
                                + ' <strong>Abbreviation</strong>'
                           + ' </div>'
                       + ' </div>'
                       + ' <div class="row"><div><div class="medical-term">A NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">A NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">A NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">A NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">A POSITIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">A POS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">AB NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AB NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">AB POSITIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AB POS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ALLERGIES</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ALGY</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ALLERGY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ALGY</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ALZHEIMER\'S DISEASE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">AMOXICILLIN</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AMX</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ANAPHYLAXIS</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ANA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ANTICOAGULANTS</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ANTICOAGULANTS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">APRAXIA OF SPEECH</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AOS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ASPIRIN ENDUCED RESPIRATORY DISEASE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">AERD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ASTHMATIC</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ASMA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ATRIAL FIBRILLATION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">A-FIB or ATRIAL FIB</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ATRIAL FIBRILLATION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">A-FIB</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ATTENTION DEFICIT DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ADD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ATTENTION DEFICIT HYPERACTIVITY DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ADHD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">AUTISM SPECTRUM DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ASD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">AUTISM</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ASD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">B NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">B NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">B NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">B NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">B POSITIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">B POS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">BLOOD TYPE A</div></div>'
                           + ' <div><div class="medical-term-abbreviation">BTA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CATARACT SURGERY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LENS IMPLANTS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CEREBRAL PALSY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHIARI MALFORMATION TYPE 1</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CHM T1</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHIARI MALFORMATION TYPE 2</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CHM T2</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHIARI MALFORMATION TYPE 3</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CHM T3</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHRONIC FATIGUE SYNDROME, MYALGIC ENCEPHALOPATHY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CFS/ME</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHRONIC OBSTRUCTIVE PULMONARY DISEASE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">COPD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHRONIC VENOUS DISEASE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CVD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CHRONIC VENOUS INSUFFICIENCY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CVI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">COCHLEAR IMPLANT</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CONGESTIVE HEART FAILURE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CHF</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">CONTINUOUS GLUCOSE MONITOR</div></div>'
                           + ' <div><div class="medical-term-abbreviation">CGM</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DEFIBRILLATOR </div></div>'
                           + ' <div><div class="medical-term-abbreviation">ICD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DEPRESSION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DEP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DIABETES</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DM</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DIABETI TYPE2</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DIABETIC TYPE 2</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DIABETIC TYPE 1</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DIABETIC T1</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DIABETIC TYPE 2</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DIABETIC T2</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DO NOT INTUBATE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DNI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">DO NOT RESUSCITATE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">DNR</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">FACTOR V</div></div>'
                           + ' <div><div class="medical-term-abbreviation">FCTRV</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">FOOD PROTEIN INDUCED ENTEROCOLITIS SYNDROME</div></div>'
                           + ' <div><div class="medical-term-abbreviation">FPIES</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HARD OF HEARING</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HOH</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HEPATITIS POSITIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HEP POS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HIGH BLOOD PRESSURE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HBP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HIGH FUNCTIONING AUTISM SPECTRUM DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HFASD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HORMONE REPLACEMENT THERAPY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HRT</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HYPERTENSION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HTN</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">HYPERTROPHIC CARDIOMYOPATHY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">HCM</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">IDIOPATHIC THROMBOCYTOPENIC PURPURA</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ITP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">IMPLANTABLE CARDIOVERTER DEFIBRILLATOR</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ICD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">INCONTINENCE </div></div>'
                           + ' <div><div class="medical-term-abbreviation">INCONTINENCE </div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">INTRAVEINOUS</div></div>'
                           + ' <div><div class="medical-term-abbreviation">IV</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">LATEX ALLERGY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">LONG Q-T SYNDROME</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LQTS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">LOW BACK PAIN</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LBP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">LOW BLOOD PRESSURE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LBP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">LOW PULSE RATE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">LPR</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">MAGNETIC RESONANCE IMAGING</div></div>'
                           + ' <div><div class="medical-term-abbreviation">MRI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">MALIGNANT HYPERTHERMIA</div></div>'
                           + ' <div><div class="medical-term-abbreviation">MALIG HYPER ALLERGY</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">MITRA VALVE PROLAPSE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">MVP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">MULTIPLE DRUG ALLERGIES</div></div>'
                           + ' <div><div class="medical-term-abbreviation">MDA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">MULTIPLE SCLEROSIS</div></div>'
                           + ' <div><div class="medical-term-abbreviation">MS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">NO KNOW ALLERGIES</div></div>'
                           + ' <div><div class="medical-term-abbreviation">NKA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">NO KNOWN DRUG ALLERGIES</div></div>'
                           + ' <div><div class="medical-term-abbreviation">NKDA</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">NO MEDICAL HISTORY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">NO MED HX</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">NOT AN ORGAN DONOR</div></div>'
                           + ' <div><div class="medical-term-abbreviation">NO ORG DON</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">O NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">O NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">O NEGATIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">O NEG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">O POSITIVE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">O POS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ORGAN DONOR</div></div>'
                           + ' <div><div class="medical-term-abbreviation">ORG DON</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">PENICILLIN</div></div>'
                           + ' <div><div class="medical-term-abbreviation">PCN</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">POST TRAUMATIC STRESS DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">PTSD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">PULMONARY EMBOLISM</div></div>'
                           + ' <div><div class="medical-term-abbreviation">PE</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">QUADRUPLE BYPASS SURGERY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">QUAD BYPASS SURG</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">REACTION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">RXN</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">RHEUMATIOD ARTHRITIS/DISEASE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">RA/RD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">RUNS LOW BLOOD PRESSURE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">RLBP</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SENSORY PROCESSING DISORDER</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SPD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SERVICE DOG</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SHORT BOWEL SYNDROME</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SBS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SPINAL CORD INJURY</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SCI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SPINAL CORD STIMULATOR</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SCS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">SUPRAVENTRICULAR TACHYACARDIA</div></div>'
                           + ' <div><div class="medical-term-abbreviation">SVT</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">TETRALOGY OF FALLOT</div></div>'
                           + ' <div><div class="medical-term-abbreviation">TET</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">THYROID</div></div>'
                           + ' <div><div class="medical-term-abbreviation">THY</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">TOTAL HIP REPLACEMENT</div></div>'
                           + ' <div><div class="medical-term-abbreviation">THR</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">TOTAL KNEE REPLACEMENT</div></div>'
                           + ' <div><div class="medical-term-abbreviation">TKR</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">ULCERATIVE COLITIS</div></div>'
                           + ' <div><div class="medical-term-abbreviation">UC</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">UPPER RESPIRATORY INFECTION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">URI</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">VASO-VAGAL SYNCOPE</div></div>'
                           + ' <div><div class="medical-term-abbreviation">VVGS</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">VENTRICULAR SEPTUM DEFECT</div></div>'
                           + ' <div><div class="medical-term-abbreviation">VSD</div></div></div>'
                       + ' <div class="row"><div><div class="medical-term">VOCAL CHORD DYSFUNCTION</div></div>'
                           + ' <div><div class="medical-term-abbreviation">VCD</div></div></div>'
                    + '</div>'
                + '</div>'
            + '</div>'
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

            $('.fpd-content').after('<div id="tips-popup">'
                + '<p>Helpful Text Tips Here</p> '
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
            $('.fpd-main-wrapper').append(tipsOverlayHTML);
            $('#instructions-wrapper').on('click', function () {
                if ($('#instructions-wrapper').css('visibility') === 'visible') {
                    $('#instructions-wrapper').css('visibility', 'hidden');
                }
            });
        }

        var toggleOverlay = function () {
            if($('#instructions-wrapper').css('visibility') === 'visible') {
                $('#instructions-wrapper').css('visibility', 'hidden');
            } else {
                $('#instructions-wrapper').css('visibility', 'visible');
            }
        };

        function addShowTipsOverlayLink() {
            $('.fpd-product-designer-wrapper').before('<div>'
                + '<h1>Custom Design</h1><h2 class="tips-overlay-link">How It Works</h2>'
                + '</div>');
            $('.tips-overlay-link').on('click', toggleOverlay);
        };

        function addMedicalTermsOverlayAndButton(){
            $(".fpd-module.fpd-active").append(medicalTermsButton);
            $('body').prepend(medicalTermsOverlay);
            $('body').prepend(medicalTermsModal);
        };


        function toggleMedicalTermsOverlay(){
            $('.close').on('click', function () {
                $('.overlay').fadeOut(150);
                $('.modal').fadeOut(150);
            });

            $('.modal').on('click', function () {
                $('.overlay').fadeOut(150);
                $('.modal').fadeOut(150);
            });

            $('.medical-terms-button').on('click', function () {
                $('.overlay').fadeIn(150);
                $('.modal').fadeIn(150);
                // $('.modal').css('display', 'block');

            });
        }

        window.ImagesModule.imageTipsHelper = function () {
            addImageTips();
            updateTipsLinkText();
            addImageTipsPopup();
        };

        window.FancyProductDesigner.overlayHelper = function () {
            addShowTipsOverlayLink();
            addTipsOverlay();
            addMedicalTermsOverlayAndButton();
            toggleMedicalTermsOverlay();
        };

    }

}) ( jQuery );