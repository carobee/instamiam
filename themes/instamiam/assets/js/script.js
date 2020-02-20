jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var filterizd = $('.filtr-container').filterizr({});

	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect.
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut.

		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			var error = true;
			$('#message').css("border-color", "#D8000C");
		} else {
			$('#message').css("border-color", "#666");
		}
	});

});
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

// var wow = new WOW({
// 	offset: 100, // distance to the element when triggering the animation (default is 0)
// 	mobile: false // trigger animations on mobile devices (default is true)
// });

/* ========================================================================= */
/*	Staticman comments reply
/* ========================================================================= */
function changeValue(elementName, newValue) {
	document.getElementsByName(elementName)[0].value = newValue;
};

/* ========================================================================= */
/*	Honeypot
/* ========================================================================= */
$(document).ready(function () {
	$('form').submit(function () {
		if ($('input[type="text"]#e-mail').val().length > 0) {
			$('form').attr('action', '/');
			return false;
		}
	});
});

/* ========================================================================= */
/*	Recherche Algolia
/* ========================================================================= */
/* global algoliasearch instantsearch */

const searchClient = algoliasearch('CWMYOSSE93', '924f0979d2bf21684401063991d99d52');

const search = instantsearch({
  indexName: 'prod_INSTAMIAM',
  searchClient,
});



search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
	  <div>
	  <div class="hit-name">
		<a href="{{url}}">{{title}}</a>&nbsp;[{{categories}}]
	  </div>
	</div>
      `,
    },
  }),


]);


search.start();
