import './style'
import loadingSpin from '../__loading-spin'

class Loading {
	static show(tips) {
		this.hide(false);

		let loading = document.createElement('div')
		loading.classList.add('x-loading')
		loading.id = 'j-x-loading'

		if (tips) {
			loading.innerHTML = `<div class="x-loading__inner">${loadingSpin}<p>${tips.toString()}</p></div>`
		} else {
			loading.innerHTML = loadingSpin
		}

		document.body.appendChild(loading)

		const focusdom = document.querySelector(':focus')
		if (focusdom) {
			focusdom.blur()
		}
	}

	static hide() {
		let loading = document.getElementById('j-x-loading')
		if (loading) {
			document.body.removeChild(loading)
		}
	}
}

export default Loading