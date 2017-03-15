(function() {

	skel.init({
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', viewport: { scalable: false } }
		}
	});
		
		// Remove "loading" class once the page has fully loaded.
			window.onload = function() {
				document.body.className = '';
			}

		// Prevent scrolling on touch.
			window.ontouchmove = function() {
				return false;
			}

		// Fix scroll position on orientation change.
			window.onorientationchange = function() {
				document.body.scrollTop = 0;
			}

})();