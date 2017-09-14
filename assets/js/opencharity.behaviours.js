/**
 * @file
 * Custom scripts for theme.
 */

(function ($) {
    Drupal.behaviors.open_charity = {
        attach: function (context, settings) {

            // on doc ready
            $(document).ready(function () {
                Drupal.open_charity.apply_members_slider();
                Drupal.open_charity.apply_blog_slider();
                Drupal.open_charity.apply_sticky_header();
            });

            // on ajax complete (ie: when opening modals)
            $(document).ajaxComplete(function () {


            });

        }
    };

    // Create theme related functions
    Drupal.open_charity = Drupal.open_charity || {};

    Drupal.open_charity.apply_members_slider = function () {
        $slider_parent = jQuery('.view-our-members .view-content');
        if (typeof $slider_parent !== "undefined") {
            $slider_parent.bxSlider({
                slideWidth: 221,
                minSlides: 1,
                maxSlides: 5
            });
        } else {
            console.log('cant  initialize slider');
            console.log(jQuery('.view-our-members .view-content'));
        }
    };

    Drupal.open_charity.apply_blog_slider = function () {
        var $slider_parent = $('.view-blog .view-content');
        if (typeof $slider_parent !== "undefined") {
            $slider_parent.bxSlider({
                slideWidth: 221,
                minSlides: 1,
                maxSlides: 5
            });
        }
    };

    Drupal.open_charity.apply_sticky_header = function () {
        var $wrap = jQuery(".header--wrapper");
        $(window).on('scroll',function (e) {
            if ($(window).scrollTop() > 500) {
                $wrap.addClass("sticky");
            } else {
                $wrap.removeClass("sticky");
            }

        });
    };


})(jQuery);
