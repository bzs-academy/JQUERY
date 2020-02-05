/*
The jQuery library contains the following features:
---------------------------------------------------
HTML/DOM manipulation
CSS manipulation
HTML event methods
Effects and animations
AJAX
Utilities (add/change attributes)

Basic syntax is: 
----------------
$(selector).action(function () {})
    . A $ sign to define/access jQuery
    . A (selector) to "query (or find)" HTML elements  ------- $() ile baslar , CSS SELECTORS , ÖNEMLI !!!
    . A jQuery action() to be performed on the element(s) ---- Events'ler


    $(selectors).action( function () {
        //code here
    })

jQuery uses CSS syntax to select elements. 
-------------------------------------------
    $(this).hide() - hides the current element.

    $("p").hide() - hides all <p> elements.

    $(".test").hide() - hides all elements with class="test".

    $("#test").hide() - hides the element with id="test".



The Document Ready Event :
--------------------------
    $(document).ready(function(){
        // jQuery methods go here...
    });
VEYA
    $(function(){
        // jQuery methods go here...
    });

    1. This is to prevent any jQuery code from running before the document is finished loading (is ready).

    2. It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.

    ÖRNEK :
    -------
    $(document).ready(function(){
        $("button").click(function(){
            $("p").hide();
        });
    });


birden fazla event olursa - on - ile :
--------------------------------------
    $(selector).on({
        event-1: function(){
            // code here
        },
        event-2: function(){
             // code here
        },
        event-3: function(){
            // code here
        }
    });
*/

$(document).ready(function() {

    // jQuery methods go here...


    //1. alternatif syntax :
    // $(selectors).action( function () {
    //    //code here
    // })


    //2. alternatif syntax :
    // bir event olursa - on - ile :
    // -----------------------------
    // $(selector).on("event", function(){
        // code here
    // });


    // 1. alternatif ile 
    // $('.one').click( function () {
    //     $('#first').hide();
    // });


    // 2. alternatif ile 
    $('.one').on("click", function(){
        $('#first').hide();
    });

    
    $('#two').click( function () {
        $('.second').hide();
    });

    $('.three').click( function () {
        $('p:last').hide();
    });

    // hover : 1. fonksiyon : mouseenter icin   / 2. fonksiyon : mouseleave icin
    $('h2').hover(  function ()  {
                                    $(this).css('color', 'red')
                                }, 
                    function () {
                                    $(this).css('color', 'black')
                                }
                );


    // coklu event/action
    $('.box1').on({

        // 1. event
        mouseenter : function () {
            $(this).css({"textAlign":"center", "lineHeight":"250px", "color":"blue", "background":"yellow" })
        },

        // 2. event
        mouseleave : function () {
            $(this).css({ "background":"lightblue", "color":"black"})
        },

        // 3. event
        click : function () {
            $(this).css("fontSize", "20px")
        }

    });


});

