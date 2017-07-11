( function( $ ) {

    var tipsOverlayHTML = '<div id="instructions-wrapper">'
                            + '<div id="quickTipsCloseX">+</div>'
                            + '<div class="instruction-1-container">'
                            + '<img src="/wp-content/plugins/kevalis-plugin/img/white-arrow-left.png">'
                              + '<div class="instruction-1">'
                                + '<h3 class="instructions-number-1">1</h3>'
                                + '<p class="instructions-text">Upload a design,'
                                    + '<span class="instructions-text-line-2">create text, or freehand</span>'
                                + '</p>'
                              + '</div>'
                            + '</div>'
                              + '<div class="instruction-2-container">'
                                + '<div class="instructions-2-text-wrapper">'
                                  + '<img src="/wp-content/plugins/kevalis-plugin/img/white-arrow-right.png">'
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

    var medicalTermsOverlay = '<div id="kv_medical_tips_overlay"></div>';

    var medicalTermsArray = [{"term":"A NEGATIVE","abbreviation":"A NEG"},{"term":"A NEGATIVE","abbreviation":"A NEG"},{"term":"A POSITIVE","abbreviation":"A POS"},{"term":"AB NEGATIVE","abbreviation":"AB NEG"},{"term":"AB POSITIVE","abbreviation":"AB POS"},{"term":"ALLERGIES","abbreviation":"ALGY"},{"term":"ALLERGY","abbreviation":"ALGY"},{"term":"ALZHEIMER\'S DISEASE","abbreviation":"AD"},{"term":"AMOXICILLIN","abbreviation":"AMX"},{"term":"ANAPHYLAXIS","abbreviation":"ANA"},{"term":"ANTICOAGULANTS","abbreviation":"ANTICOAGULANTS"},{"term":"APRAXIA OF SPEECH","abbreviation":"AOS"},{"term":"ASPIRIN ENDUCED RESPIRATORY DISEASE","abbreviation":"AERD"},{"term":"ASTHMATIC","abbreviation":"ASMA"},{"term":"ATRIAL FIBRILLATION","abbreviation":"A-FIB or ATRIAL FIB"},{"term":"ATRIAL FIBRILLATION","abbreviation":"A-FIB"},{"term":"ATTENTION DEFICIT DISORDER","abbreviation":"ADD"},{"term":"ATTENTION DEFICIT HYPERACTIVITY DISORDER","abbreviation":"ADHD"},{"term":"AUTISM SPECTRUM DISORDER","abbreviation":"ASD"},{"term":"AUTISM","abbreviation":"ASD"},{"term":"B NEGATIVE","abbreviation":"B NEG"},{"term":"B NEGATIVE","abbreviation":"B NEG"},{"term":"B POSITIVE","abbreviation":"B POS"},{"term":"BLOOD TYPE A","abbreviation":"BTA"},{"term":"CATARACT SURGERY","abbreviation":"LENS IMPLANTS"},{"term":"CEREBRAL PALSY","abbreviation":"CP"},{"term":"CHIARI MALFORMATION TYPE 1","abbreviation":"CHM T1"},{"term":"CHIARI MALFORMATION TYPE 2","abbreviation":"CHM T2"},{"term":"CHIARI MALFORMATION TYPE 3","abbreviation":"CHM T3"},{"term":"CHRONIC FATIGUE SYNDROME, MYALGIC ENCEPHALOPATHY","abbreviation":"CFS/ME"},{"term":"CHRONIC OBSTRUCTIVE PULMONARY DISEASE","abbreviation":"COPD"},{"term":"CHRONIC VENOUS DISEASE","abbreviation":"CVD"},{"term":"CHRONIC VENOUS INSUFFICIENCY","abbreviation":"CVI"},{"term":"COCHLEAR IMPLANT","abbreviation":"CI"},{"term":"CONGESTIVE HEART FAILURE","abbreviation":"CHF"},{"term":"CONTINUOUS GLUCOSE MONITOR","abbreviation":"CGM"},{"term":"DEFIBRILLATOR ","abbreviation":"ICD"},{"term":"DEPRESSION","abbreviation":"DEP"},{"term":"DIABETES","abbreviation":"DM"},{"term":"DIABETI TYPE2","abbreviation":"DIABETIC TYPE 2"},{"term":"DIABETIC TYPE 1","abbreviation":"DIABETIC T1"},{"term":"DIABETIC TYPE 2","abbreviation":"DIABETIC T2"},{"term":"DO NOT INTUBATE","abbreviation":"DNI"},{"term":"DO NOT RESUSCITATE","abbreviation":"DNR"},{"term":"FACTOR V","abbreviation":"FCTRV"},{"term":"FOOD PROTEIN INDUCED ENTEROCOLITIS SYNDROME","abbreviation":"FPIES"},{"term":"HARD OF HEARING","abbreviation":"HOH"},{"term":"HEPATITIS POSITIVE","abbreviation":"HEP POS"},{"term":"HIGH BLOOD PRESSURE","abbreviation":"HBP"},{"term":"HIGH FUNCTIONING AUTISM SPECTRUM DISORDER","abbreviation":"HFASD"},{"term":"HORMONE REPLACEMENT THERAPY","abbreviation":"HRT"},{"term":"HYPERTENSION","abbreviation":"HTN"},{"term":"HYPERTROPHIC CARDIOMYOPATHY","abbreviation":"HCM"},{"term":"IDIOPATHIC THROMBOCYTOPENIC PURPURA","abbreviation":"ITP"},{"term":"IMPLANTABLE CARDIOVERTER DEFIBRILLATOR","abbreviation":"ICD"},{"term":"INCONTINENCE ","abbreviation":"INCONTINENCE "},{"term":"INTRAVEINOUS","abbreviation":"IV"},{"term":"LATEX ALLERGY","abbreviation":"LA"},{"term":"LONG Q-T SYNDROME","abbreviation":"LQTS"},{"term":"LOW BACK PAIN","abbreviation":"LBP"},{"term":"LOW BLOOD PRESSURE","abbreviation":"LBP"},{"term":"LOW PULSE RATE","abbreviation":"LPR"},{"term":"MAGNETIC RESONANCE IMAGING","abbreviation":"MRI"},{"term":"MALIGNANT HYPERTHERMIA","abbreviation":"MALIG HYPER ALLERGY"},{"term":"MITRA VALVE PROLAPSE","abbreviation":"MVP"},{"term":"MULTIPLE DRUG ALLERGIES","abbreviation":"MDA"},{"term":"MULTIPLE SCLEROSIS","abbreviation":"MS"},{"term":"NO KNOW ALLERGIES","abbreviation":"NKA"},{"term":"NO KNOWN DRUG ALLERGIES","abbreviation":"NKDA"},{"term":"NO MEDICAL HISTORY","abbreviation":"NO MED HX"},{"term":"NOT AN ORGAN DONOR","abbreviation":"NO ORG DON"},{"term":"O NEGATIVE","abbreviation":"O NEG"},{"term":"O NEGATIVE","abbreviation":"O NEG"},{"term":"O POSITIVE","abbreviation":"O POS"},{"term":"ORGAN DONOR","abbreviation":"ORG DON"},{"term":"PENICILLIN","abbreviation":"PCN"},{"term":"POST TRAUMATIC STRESS DISORDER","abbreviation":"PTSD"},{"term":"PULMONARY EMBOLISM","abbreviation":"PE"},{"term":"QUADRUPLE BYPASS SURGERY","abbreviation":"QUAD BYPASS SURG"},{"term":"REACTION","abbreviation":"RXN"},{"term":"RHEUMATIOD ARTHRITIS/DISEASE","abbreviation":"RA/RD"},{"term":"RUNS LOW BLOOD PRESSURE","abbreviation":"RLBP"},{"term":"SENSORY PROCESSING DISORDER","abbreviation":"SPD"},{"term":"SERVICE DOG","abbreviation":"SD"},{"term":"SHORT BOWEL SYNDROME","abbreviation":"SBS"},{"term":"SPINAL CORD INJURY","abbreviation":"SCI"},{"term":"SPINAL CORD STIMULATOR","abbreviation":"SCS"},{"term":"SUPRAVENTRICULAR TACHYACARDIA","abbreviation":"SVT"},{"term":"TETRALOGY OF FALLOT","abbreviation":"TET"},{"term":"THYROID","abbreviation":"THY"},{"term":"TOTAL HIP REPLACEMENT","abbreviation":"THR"},{"term":"TOTAL KNEE REPLACEMENT","abbreviation":"TKR"},{"term":"ULCERATIVE COLITIS","abbreviation":"UC"},{"term":"UPPER RESPIRATORY INFECTION","abbreviation":"URI"},{"term":"VASO-VAGAL SYNCOPE","abbreviation":"VVGS"},{"term":"VENTRICULAR SEPTUM DEFECT","abbreviation":"VSD"},{"term":"VOCAL CHORD DYSFUNCTION","abbreviation":"VCD"}];

    var medicalTermsModalStart =  '<div class="kv_modal">'
                                  + ' <div class="kv_modal-dialog">'
                                      + ' <div class="kv_modal-header">'
                                          + '<h4 id="medical-terms-title">Medical Terms &amp; Abbreviations</h4>'
                                          + '<span class="terms-close">+</span>'
                                      + ' </div>'
                                      + ' <div class="kv_modal-content-block">'
                                         + ' <div class="kv_modal-body">'
                                             + ' <div class="container-fluid">'
                                                 + ' <div class="kv-term-row"><div class="medical-title">'
                                                          + '<strong>Medical Term</strong>'
                                                     + '</div>'
                                                     + ' <div class="abbrev-title">'
                                                          + ' <strong>Abbreviation</strong>'
                                                     + ' </div>'
                                                 + ' </div>';

    var medicalTermsModalEnd = '</div></div></div></div></div>';

    var medicalTermsModalContent = '';

    $( window ).on("load", function () {

        kv_start();
        window.ImagesModule.kv_imageTipsHelper();
        window.FancyProductDesigner.kv_overlayHelper();

    });

    function kv_start() {
        'use strict';

        function kv_addImageTipsPopup() {

            $('.fpd-content').after('<div id="tips-popup">'
                + '<p>Helpful Text Tips Here</p> '
                + '<div class="closeX">+</div>'
                + '</div>');

            $('#tips-popup > .closeX').on('click', kv_toggleImageTips);

        }

        function kv_toggleImageTips() {

            kv_updateTipsPopupContent();

            if($('#tips-popup').css('display') === 'block') {
                $('#tips-popup').css('display', 'none');
            } else {
                $('#tips-popup').css('display', 'block');
            }
        }

        function kv_addImageTips() {
            $('.fpd-content').before(
                '<div class="img-info-link">'
                    + '<p class="tips-link">Text Tips</p>'
                    + '</div>'
            );

            $('.img-info-link').on('click', kv_toggleImageTips);
        }

        function kv_updateTipsLinkText() {
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

        function kv_setPopupContent(module) {
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

        function kv_updateTipsPopupContent() {
            $('div[data-module]').on('click', function () {
                var module = $(this).attr("data-module");
                kv_setPopupContent(module);
            });
        }

        function kv_addTipsOverlay() {
            $('.fpd-main-wrapper').append(tipsOverlayHTML);
            $('#instructions-wrapper').on('click', function () {
                if ($('#instructions-wrapper').css('visibility') === 'visible') {
                    $('#instructions-wrapper').css('visibility', 'hidden');
                }
            });
        }

        var kv_toggleOverlay = function () {
            if($('#instructions-wrapper').css('visibility') === 'visible') {
                $('#instructions-wrapper').css('visibility', 'hidden');
            } else {
                $('#instructions-wrapper').css('visibility', 'visible');
            }
        };

        function kv_addShowTipsOverlayLink() {
            $('.fpd-product-designer-wrapper').before('<div>'
                + '<h1 id="kv_custom-design">Custom Design</h1>'
                + '<h2 class="tips-overlay-link">How It Works</h2>'
                + '</div>');
            $('.tips-overlay-link').on('click', kv_toggleOverlay);
        };

        function kv_addMedicalTermsOverlayAndButton(){
            if($('.fpd-btn > .fpd-price').length){
              console.log("Its hereeeeeeeee");
            } else {
              console.log("It ain't hereeeeeeeeeee"); 
              setTimeout(function(){ 
                
                if($('.fpd-btn > .fpd-price').length){
               console.log("Its hereeeeeeeee now");
              }
                
                $('.fpd-btn > .fpd-price').parent().after(medicalTermsButton); 

                $('.medical-terms-button').on('click', function () {
                  $('#kv_medical_tips_overlay').fadeIn(150);
                  $('.kv_modal').fadeIn(150);
              });

              }, 500);
            }
            $('.fpd-btn > .fpd-price').parent().after(medicalTermsButton);
            $('body').prepend(medicalTermsOverlay);
            var modalBuilt = prepareTermsDialog('medical-terms');
            $('body').prepend(modalBuilt);
        };

        function prepareTermsDialog(termsType){

          var i = 0, termsBody = '', termsEnd = '', termsArray = [];
          
          if(termsType === 'medical-terms'){
            termsBody = medicalTermsModalStart;
            termsEnd = medicalTermsModalEnd; 
            termsArray = medicalTermsArray;
          } else {

          }

          for(i = 0; i < termsArray.length; i++){
            termsBody += ' <div class="kv-term-row"><div><div class="kv-term-value">' 
                            + termsArray[i].term + '</div></div>'
                            + ' <div><div class="kv-term-abbreviation">' 
                            + termsArray[i].abbreviation + '</div></div></div>';
          }

          termsBody += termsEnd;
          return termsBody;
        }

        function kv_toggleMedicalTermsOverlay(){
            $('.terms-close').on('click', function () {
                $('#kv_medical_tips_overlay').fadeOut(150);
                $('.kv_modal').fadeOut(150);
            });

            $('#kv_medical_tips_overlay').on('click', function () {
                $('#kv_medical_tips_overlay').fadeOut(150);
                $('.kv_modal').fadeOut(150);
            });

            $('.medical-terms-button').on('click', function () {
                $('#kv_medical_tips_overlay').fadeIn(150);
                $('.kv_modal').fadeIn(150);
            });
        }

        window.ImagesModule.kv_imageTipsHelper = function () {
            kv_addImageTips();
            kv_updateTipsLinkText();
            kv_addImageTipsPopup();
        };

        window.FancyProductDesigner.kv_overlayHelper = function () {
            kv_addShowTipsOverlayLink();
            kv_addTipsOverlay();
            kv_addMedicalTermsOverlayAndButton();
            kv_toggleMedicalTermsOverlay();
        };

    }

}) ( jQuery );