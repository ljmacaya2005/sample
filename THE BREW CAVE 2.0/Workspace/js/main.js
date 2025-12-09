document.addEventListener('DOMContentLoaded', () => {
	const splash = document.getElementById('splash');
	const loader = document.getElementById('loader');
	const loginCard = document.getElementById('loginCard');
	const beans = document.querySelectorAll('.bean');

	// --- Splash Screen Logic ---

	// 1. Show the loader after a short delay to let the logo animate in first.
	setTimeout(() => {
		if (loader) {
			loader.classList.add('visible');
		}
	}, 800);

	// 2. Set a total time for the splash screen to be visible.
	const splashDuration = 2500; // 2.5 seconds

	setTimeout(() => {
		if (splash) {
			splash.classList.add('hidden');
		}

		// 3. Animate in the main content after the splash screen starts to fade out.
		// This delay should be slightly less than the splash screen's CSS transition duration.
		setTimeout(() => {
			// Animate login card
			if (loginCard) {
				loginCard.classList.add('show');
			}

			// Animate background beans
			beans.forEach(bean => {
				const delay = (parseFloat(bean.style.getPropertyValue('--delay')) || 0) * 1000;
				setTimeout(() => {
					bean.classList.add('arrived');
				}, delay);
			});

		}, 300); // Start content animation 300ms after splash fade begins

	}, splashDuration);

});