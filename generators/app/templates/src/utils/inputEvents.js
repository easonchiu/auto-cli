{
	if((/Android [4-6]/).test(navigator.appVersion)) {
		window.addEventListener('resize', e => {
			if(document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
				window.setTimeout(document.activeElement.scrollIntoViewIfNeeded)
			}
		})
	}

	document.body.addEventListener('click', e => {
		if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'){
			const focus = document.querySelector('input:focus')
			focus && focus.blur()
		}
	})
}